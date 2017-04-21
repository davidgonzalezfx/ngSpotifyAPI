import { Component } from '@angular/core';
import { SpotifyService } from '../../Services/spotify.service'

@Component({
  selector: 'search',
  templateUrl: './search.component.html',
})
export class SearchComponent  {
	private searchStr:string
	private res: Object

	constructor(private _spotify: SpotifyService){

	}

	searchMusic(){
		return this._spotify.searchMusic(this.searchStr).subscribe(res => {
			console.log(res.artists.items)
			this.res = res.artists.items
			// console.log('Res.name equal to: '+ this.res)
		})
	}
}
