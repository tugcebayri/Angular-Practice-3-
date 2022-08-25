import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  showPassword = false;
  log = [];
  showSecret = false;
  newLog = [];

  isShow() {
    this.showPassword = !this.showPassword;
    this.log.push(this.log.length +1);
  }
  onToggleDetails() {
    this.showSecret = !this.showSecret;
    this.newLog.push(new Date());
  }
}