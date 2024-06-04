import { Component } from '@angular/core';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.page.html',
  styleUrls: ['./contact.page.scss'],
})
export class ContactPage {
  newMessage: string = '';
  messages: any[] = [];

  constructor() {}

  sendMessage(event: Event) {
    event.preventDefault();

    if (this.newMessage.trim() !== '') {
      this.messages.push({
        content: this.newMessage,
        author: 'Étudiant',
        date: new Date(),
        replies: [],
      });

      this.newMessage = '';
    }
  }

  replyToMessage(messageIndex: number) {
    const replyText = prompt('Entrez votre réponse :');
    if (replyText !== null) {
      this.messages[messageIndex].replies.push({
        content: replyText,
        author: 'Professeur',
        date: new Date(),
      });
    }
  }
}
