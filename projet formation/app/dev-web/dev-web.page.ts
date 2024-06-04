import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-dev-web',
  templateUrl: './dev-web.page.html',
  styleUrls: ['./dev-web.page.scss'],
})
export class DevWebPage implements OnInit {
  // Ajoutez une propriété pour suivre quelle section est actuellement affichée
  selectedSection: string | undefined;

  constructor() { }

  ngOnInit() {
    // Initialisation du composant
    this.selectedSection = 'devWebQuestions'; // Par défaut, afficher 'devWebQuestions'
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


