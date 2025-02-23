import { Component } from '@angular/core';

@Component({
  selector: 'app-body',
  template: `
      <app-header></app-header>
      <router-outlet></router-outlet>
  `,
  standalone: false,
  styles: []
})
export class AppComponent {
  title = 'paris-attractions-website';
}
