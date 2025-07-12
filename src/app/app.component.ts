import { Component, TemplateRef, ViewChild } from '@angular/core';
import { RouterModule } from '@angular/router';
import { NxWelcomeComponent } from './nx-welcome.component';
import {
  AlertMessage,
  AlertMessageTypes,
  AngAlertBarComponent,
} from 'ang-alert-bar';

@Component({
  standalone: true,
  imports: [NxWelcomeComponent, RouterModule, AngAlertBarComponent],
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss',
})
export class AppComponent {
  title = 'org';

  @ViewChild('customTpl', { static: true }) customTpl!: TemplateRef<any>;

  messages: AlertMessage[] = [];
  messages1: AlertMessage[] = [];
  messages2: AlertMessage[] = [];
  messages3: AlertMessage[] = [];

  ngOnInit() {
    this.messages1 = [
      {
        alertType: AlertMessageTypes.Info,
        alertMessage: 'Please read the comments carefully',
      },
      {
        alertType: AlertMessageTypes.Success,
        alertMessage: 'Your message has been sent successfully',
      },
      {
        alertType: AlertMessageTypes.Warning,
        alertMessage: 'There was a problem with your network connection',
      },
      {
        alertType: AlertMessageTypes.Error,
        alertMessage: 'A problem occurred while submitting your data',
      },
    ];

    this.messages2 = [
      {
        alertType: AlertMessageTypes.Error,
        alertMessage: 'Yikes ! this was not expected, try something else.',
      },
      {
        alertType: AlertMessageTypes.Success,
        alertMessage: this._generateLongString(100),
      },
      {
        alertType: AlertMessageTypes.Warning,
        alertMessage:
          'Holy moly! this is no fun, looks like Tom pulled the plug again.',
      },
      {
        alertType: AlertMessageTypes.Info,
        alertMessage: 'Well, sometimes stuff happens, move along.',
      },
      {
        alertType: AlertMessageTypes.Success,
        alertMessage: "All's well that ends well.",
      },
    ];

    this.messages3 = [
      {
        alertType: AlertMessageTypes.Error,
        alertMessage: 'Yikes ! this was not expected, try something else.',
      },
      {
        alertType: AlertMessageTypes.Success,
        alertMessage: this._generateLongString(100),
      },
      {
        alertType: AlertMessageTypes.Warning,
        alertMessage:
          'Holy moly! this is no fun, looks like Tom pulled the plug again.',
      },
      {
        alertType: AlertMessageTypes.Info,
        alertMessage: 'Well, sometimes stuff happens, move along.',
      },
      {
        alertType: AlertMessageTypes.Success,
        alertMessage: "All's well that ends well.",
      },
    ];

    this.messages = [
      {
        alertType: AlertMessageTypes.Warning,
        alertMessage: this.customTpl,
      },
    ];
  }

  private _generateLongString(sentenceLength: number): string {
    const wordList: string[] = [
      'The',
      'quick',
      'brown',
      'fox',
      'jumps',
      'over',
      'the',
      'lazy',
      'dog',
      'Lorem',
      'ipsum',
      'dolor',
      'sit',
      'amet',
      'consectetur',
      'adipiscing',
      'elit',
      'Random',
      'sentence',
      'generator',
      'for',
      'TypeScript',
      'programming',
    ];

    const wordsInSentence = [];

    for (let i = 0; i < sentenceLength; i++) {
      const randomIndex = Math.floor(Math.random() * wordList.length);
      const randomWord = wordList[randomIndex];
      wordsInSentence.push(randomWord);
    }

    const randomSentence = wordsInSentence.join(' ');

    return randomSentence;
  }
}
