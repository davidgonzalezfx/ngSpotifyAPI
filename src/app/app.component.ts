import { Component } from '@angular/core';
import { SpotifyService } from './Services/spotify.service'

@Component({
  selector: 'my-app',
  templateUrl: './app.component.html',
  providers: [SpotifyService]
})
export class AppComponent  {}
