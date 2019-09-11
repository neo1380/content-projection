import { Component, OnInit,Input, TemplateRef } from '@angular/core';

@Component({
  selector: 'app-ng-content-poc',
  templateUrl: './ng-content-poc.component.html',
  styleUrls: ['./ng-content-poc.component.scss']
})
export class NgContentPocComponent implements OnInit {
  
  @Input() customTemplate : TemplateRef<any>;
  constructor() { }

  ngOnInit() {
      console.log(this.customTemplate)
  }

}
