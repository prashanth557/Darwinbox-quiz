import { Component, ViewChild, OnInit } from '@angular/core';
import { CountdownComponent } from 'ngx-countdown';
import { ChartsModule } from 'ng2-charts';
import { CookieService } from 'ng2-cookies';

@Component({
  selector: 'app-quiz',
  templateUrl: './quiz.component.html',
  styleUrls: ['./quiz.component.scss']
})
export class QuizComponent implements OnInit {
  currentIndex: number;
  @ViewChild('countdown') counter: CountdownComponent;
  questions: any = [
    {
      'question': 'Which of the following is correct about CLI?',
      'options': ['CLI stands for Command Line Interface.',
      'CLI can be used to create Angular JS application.',
      'It also helps in creating a unit and end-to-end tests for the application.',
      'All of the above'],
      'correctAnswer': 'All of the above'
    },
    {
      'question': 'Which of the following filter is used to convert input to all lowercase?',
      'options': ['lowercase', 'lower', 'Both of the above', 'None of the above'],
      'correctAnswer': 'lowercase'
    },
    {
      'question': 'Which of the following filter is used to slice a piece of data from the input string.',
      'options': ['slice', 'substring', 'Both of the above', 'None of the above'],
      'correctAnswer': 'slice'
    },
    {
      'question': 'Which of the following is true about uppercase filter?',
      'options': ['Uppercase filter is a function which takes text as input.',
      'Uppercase filter converts a text to upper case text',
      'Both of the above', 'None of the above'],
      'correctAnswer': 'Uppercase filter converts a text to upper case text'
    },
    {
      'question': 'What does AOT stand for?',
      'options': ['Angular Object Templates', 'Ahead-of-time compilation', 'Angular Open Terminal', 'Angular Object Timer'],
      'correctAnswer': 'Ahead-of-time compilation'
    },
    {
      'question': ' AngularJS 2.0 is a ?',
      'options': ['library', 'Framework', ' Operating System', 'Programming Language'],
      'correctAnswer': 'Framework'
    }
  ];
  showErrorMessage: boolean;
  resultsData: any;
  // Pie Chart data
  pieChartLabels = ['Correct Answers', 'Wrong Answers'];
  pieChartData = [];
  pieChartType = 'pie';
  userName: string;
  constructor(public cookieService: CookieService) { }

  ngOnInit() {
    this.currentIndex = 0;
    this.userName = this.cookieService.get('username');
  }

  loadQuestions(index) {
    this.currentIndex = index;
    this.showErrorMessage = false;
  }

  submitTest(isTimeout) {
    this.showErrorMessage = false;
    if (isTimeout) {
      this.fetchResults();
    } else {
      // for loop is more efficient in case of early loop termination
      for (let i = 0; i < this.questions.length; i++) {
        if (this.questions[i] && !this.questions[i].selectedAnswer) {
          this.currentIndex = i;
          this.showErrorMessage = true;
          break;
        }
      }
      if (!this.showErrorMessage) {
        this.fetchResults();
      }
    }
  }

  fetchResults() {
    let correctAnswers = 0;
    this.questions.forEach(question => {
      if (question.selectedAnswer === question.correctAnswer) {
        correctAnswers++;
      }
    });
    this.cookieService.deleteAll();
    this.pieChartData = [correctAnswers, this.questions.length - correctAnswers];
  }

}
