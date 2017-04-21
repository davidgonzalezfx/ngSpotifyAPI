import { ModuleWithProviders } from '@angular/core'
import { Routes, RouterModule } from '@angular/router'

import { AboutComponent } from './Components/About/about.component'
import { SearchComponent } from './Components/Search/search.component'
import { ArtistComponent } from './Components/Artist/artist.component'
import { AlbumComponent } from './Components/Album/album.component'

const routes: Routes = [
	{
		path: '',
		component: SearchComponent
	},
	{
		path: 'about',
		component: AboutComponent
	},	
	{
		path: 'artist/:id',
		component: ArtistComponent
	},
	{
		path: 'album/:id',
		component: AlbumComponent
	}
]

export const Routing: ModuleWithProviders = RouterModule.forRoot(routes)