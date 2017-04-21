import { Component, OnInit } from '@angular/core'
import { Router, ActivatedRoute } from '@angular/router'
import { SpotifyService } from '../../Services/spotify.service'
import {DomSanitizer} from '@angular/platform-browser';

@Component({
	selector: 'artist',
	templateUrl: './artist.component.html'
})
export class ArtistComponent implements OnInit {
	id:string
	artist: Object
	albums: Object
	imagesUrl:string
	// safeUrl:any	

	constructor(private _spotify: SpotifyService, private _router: ActivatedRoute, private sanitizer:DomSanitizer){
	}

	ngOnInit(){
		this._router.params
			.map(params => params['id'])
			.subscribe((id) => {
				this._spotify.searchArtist(id)
					.subscribe(artist => {
						this.artist = artist
					})
				this._spotify.getAlbum(id)
					.subscribe(albums => {
						this.albums = albums.items
						console.log(albums)
						this.imagesUrl = this.albums[0].images[0].url
						this.safeUrl = this.sanitizer.bypassSecurityTrustResourceUrl(this.imagesUrl);
					})
			
			})
	}

}