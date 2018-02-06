import { Component } from '@angular/core';
import { AgmCoreModule } from '@agm/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title: string = 'Google Maps Angular 5';
  lat: number = 48.2080;
  lng: number = 16.3738;
  locationChosen = false;

  onClickLocation(event) {
    this.lat = event.coords.lat;
    this.lng = event.coords.lng;
    this.locationChosen = true;
  }
}
