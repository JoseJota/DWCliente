import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { EventsShowComponent } from './events-show/events-show.component';
import { PeopleComponent } from './people/people.component';

@NgModule({
  declarations: [
    AppComponent,
    EventsShowComponent,
    PeopleComponent,
    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
    
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
