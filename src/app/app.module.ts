import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import {IPdfViewerModule} from './ipdf-viewer/ipdfviewer.module'
import { NgContentPocComponent } from './ng-content-poc/ng-content-poc.component';
import { TemplaePocComponent } from './templae-poc/templae-poc.component';

@NgModule({
  declarations: [
    AppComponent,
    NgContentPocComponent,
    TemplaePocComponent
  ],
  imports: [
    BrowserModule,
    IPdfViewerModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
