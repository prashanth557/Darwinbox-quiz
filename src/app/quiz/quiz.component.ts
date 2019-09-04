import { Component, ViewChild, OnInit } from '@angular/core';
import { CountdownComponent } from 'ngx-countdown';
import { ChartsModule } from 'ng2-charts';

@Component({
  selector: 'app-quiz',
  templateUrl: './quiz.component.html',
  styleUrls: ['./quiz.component.scss']
})
export class QuizComponent implements OnInit {
  currentIndex: number;
  @ViewChild('countdown') counter: CountdownComponent;
  questions: any =  [
    {
     'question': 'Who is the prime minister of India ?',
     'options': ['Narendra Modi', 'Amit Shah', 'Sonia Gandhi', 'Rahul Gandhi'],
     'correctAnswer': 'Narendra Modi'
    },
    {
      'question': 'Who is the president minister of India ?',
      'options': ['Ramnanth Govindh', 'Amit Shah', 'Sonia Gandhi', 'Rahul Gandhi'],
      'correctAnswer': 'Ramnanth Govindh'
    },
    {
      'question': 'Who is the prime minister of India ?',
      'options': ['Narendra Modi', 'Amit Shah', 'Sonia Gandhi', 'Rahul Gandhi'],
      'correctAnswer': 'Narendra Modi'
     },
     {
       'question': 'Who is the president minister of India ?',
       'options': ['Ramnanth Govindh', 'Amit Shah', 'Sonia Gandhi', 'Rahul Gandhi'],
       'correctAnswer': 'Ramnanth Govindh'
     },
     {
      'question': 'Who is the prime minister of India ?',
      'options': ['Narendra Modi', 'Amit Shah', 'Sonia Gandhi', 'Rahul Gandhi'],
      'correctAnswer': 'Narendra Modi'
     },
     {
       'question': 'Who is the president minister of India ?',
       'options': ['Ramnanth Govindh', 'Amit Shah', 'Sonia Gandhi', 'Rahul Gandhi'],
       'correctAnswer': 'Ramnanth Govindh'
     }
];
showErrorMessage: boolean;
resultsData: any;
  // Pie Chart data
pieChartLabels = ['Correct Answers', 'Wrong Answers'];
pieChartData = [];
pieChartType = 'pie';
  constructor() { }

  ngOnInit() {
    this.currentIndex = 0;
  }

  loadQuestions(index) {
    console.log('Index:::', index);
    console.log('questions', this.questions);
    this.currentIndex = index;
    this.showErrorMessage = false;
  }

  finishTest() {
    console.log('count down', this.counter);
    this.counter.restart();
  }

  submitTest() {
    // const data = this.questions.reduce( (question, i ) => !question.selectedAnswer ? i : null);
    // console.log('DATA', data);
    this.showErrorMessage = false;
    for ( let i = 0 ; i < this.questions.length ; i ++ ) {
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

  fetchResults() {
    let correctAnswers = 0;
    // totalMarks = this.questions.reduce( question => question.selectedAnswer === question.correctAnswer ? totalMarks++ : '');
    this.questions.forEach(question => {
      if (question.selectedAnswer === question.correctAnswer) {
        correctAnswers++;
      }
    });
    this.pieChartData = [correctAnswers, this.questions.length - correctAnswers];

    console.log('Questions', this.questions);
    console.log('totalMarks', totalMarks);
  }

}
