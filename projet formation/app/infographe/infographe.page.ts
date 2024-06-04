import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-infographe',
  templateUrl: './infographe.page.html',
  styleUrls: ['./infographe.page.scss'],
})
export class InfographePage implements OnInit {
  selectedSection: string | undefined;

  constructor() {}

  ngOnInit() {
    this.selectedSection = 'bureauQuestions';
  }

  afficherQuestions(section: string) {
    this.selectedSection = section;
  }

  submitAnswers() {
    var score = 0;

    // Assuming correct answers are 'a'
    var correctAnswers = ['a', 'a', 'a', 'a', 'a'];

    for (var i = 1; i <= correctAnswers.length; i++) {
      var selectedAnswer = this.getSelectedAnswer('q' + i);

      if (selectedAnswer === correctAnswers[i - 1]) {
        score += 2; // Each correct answer is worth 2 points
      }
    }

    // Display the score
    alert('Your score: ' + score + ' out of 10');
  }

  getSelectedAnswer(questionName: string) {
    var selectedOption = document.querySelector('input[name="' + questionName + '"]:checked');

    if (selectedOption) {
      return (selectedOption as HTMLInputElement).value;
    } else {
      return ''; // Return an empty string if no option is selected
    }
  }
}
