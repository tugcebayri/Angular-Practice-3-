import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  showPassword = false;
  log = [];

  isShow() {
    this.showPassword = !this.showPassword;
    this.log.push(this.log.length +1);
  }
}