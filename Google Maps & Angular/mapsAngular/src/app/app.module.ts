import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AgmCoreModule } from '@agm/core';

import { AppComponent } from './app.component';


@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AgmCoreModule.forRoot({apiKey: 'AIzaSyCXzz5Em3qDn6bcajzd-urn77rQV2QS8Ww'})
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
