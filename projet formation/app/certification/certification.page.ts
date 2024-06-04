import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-certification',
  templateUrl: './certification.page.html',
  styleUrls: ['./certification.page.scss'],
})
export class CertificationPage implements OnInit {
    afficherQuestions: string = "Hello from TypeScript!";

  constructor() { }

  ngOnInit() {
  };
}
