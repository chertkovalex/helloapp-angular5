import { Component } from '@angular/core';

@Component({
  selector: 'my-app',
  template: `<label>Enter Name:</label>
    <input [(ngModel)]="name" placeholder="Enter Name" />
    <h2>Welcome, {{name}}!</h2>`
})
export class AppComponent {
  name = '';
}
