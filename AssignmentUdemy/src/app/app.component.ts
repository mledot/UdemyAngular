import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'AssignmentUdemy';
  showSecret=false;
  log=[];

  onToggleDisplay(){
    this.showSecret = !this.showSecret;
    this.log.push(new Date());
  }
}
