import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  showElement:boolean = true;

  items=[0,1,2];
  ngContentMarkup:string ="<ng-content select='p'></ng-content>"
  title = 'POC on content projection and ng template';
}
