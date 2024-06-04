// Import des modules nécessaires
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-dev-web',
  templateUrl: './dev-web.page.html',
  styleUrls: ['./dev-web.page.scss'],
})
export class DevWebPage implements OnInit {

  constructor() { }

  ngOnInit() {
    // Initialisation du composant
  }

  afficherQuestions(section: string) {
    // Logique pour afficher les questions en fonction de la section
  }
}