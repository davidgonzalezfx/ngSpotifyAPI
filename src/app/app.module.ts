import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
// Components
import { AppComponent }  from './app.component';
import { NavbarComponent } from './Components/Navbar/navbar.component'
import { SearchComponent } from './Components/Search/search.component'
import { AboutComponent } from './Components/About/about.component'
import { ArtistComponent } from './Components/Artist/artist.component'
import { AlbumComponent } from './Components/Album/album.component'
// Services
import { HttpModule } from '@angular/http'
// Router
import { Routing } from './app.routing'
// Forms
import { FormsModule } from '@angular/forms'



@NgModule({
  imports:      [ 
  	BrowserModule, 
  	Routing, 
  	FormsModule,
  	HttpModule
  ],
  declarations: [ 
  	AppComponent,
  	NavbarComponent,
  	SearchComponent,
  	AboutComponent,
    ArtistComponent,
    AlbumComponent
  ],
  bootstrap:    [ AppComponent ]
})
export class AppModule { }
