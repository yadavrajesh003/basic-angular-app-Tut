import { Component } from '@angular/core';

@Component({
  selector: 'app-links',
  templateUrl: './links.component.html'
})

export class LinksComponent {
  links = [
    {
      'url': 'https://stackblitz.com/edit/basic-angular-tutorial-app',
      'text': 'Edit this app'
    },
    {
      'url': '#',
      'text': 'Link 2'
    },
    {
      'url': '#',
      'text': 'Link 3'
    }
  ];

}