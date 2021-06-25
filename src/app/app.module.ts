import {NgModule} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {MatButtonModule} from '@angular/material/button';

import {AppComponent} from './app.component';
import {SchedulingDetailsComponent} from './components/scheduling-details/scheduling-details.component';
import {SummaryComponent} from './components/scheduling-details/summary/summary.component';
import {SelectionPanelComponent} from './components/scheduling-details/selection-panel/selection-panel.component';
import {SafeHtmlPipe} from './pipes/safe-html.pipe';

@NgModule({
  declarations: [
    AppComponent,
    SchedulingDetailsComponent,
    SummaryComponent,
    SelectionPanelComponent,
    SafeHtmlPipe
  ],
  imports: [
    MatButtonModule,
    BrowserModule,
    BrowserAnimationsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {
}
