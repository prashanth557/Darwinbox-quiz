import { Component, ViewChild, OnInit } from '@angular/core';
import { CountdownComponent } from 'ngx-countdown';


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
  constructor() { }

  ngOnInit() {
    this.currentIndex = 0;
  }

  loadQuestions(index) {
    console.log('Index:::', index);
    console.log('questions', this.questions);
    this.currentIndex = index;
  }

  finishTest() {
    console.log('count down', this.counter);
    this.counter.restart();
  }

}
