import { Component, OnInit } from '@angular/core'
import { Router, ActivatedRoute } from '@angular/router'
import { SpotifyService } from '../../Services/spotify.service'
import {DomSanitizer} from '@angular/platform-browser';

@Component({
	selector: 'album',
	templateUrl: './album.component.html'
})
export class AlbumComponent implements OnInit {
	id:string
	album: Object
	albumUrl:string

	constructor(private _spotify: SpotifyService, private _router: ActivatedRoute,private sanitizer:DomSanitizer){

	}

	ngOnInit(){
		this._router.params
			.map(params => params['id'])
			.subscribe((id) => {
				this._spotify.getAlbums(id)
					.subscribe(album => {
						this.album = album
						this.albumUrl = this.album.images[0].url
						this.safeAlbum = this.sanitizer.bypassSecurityTrustResourceUrl(this.albumUrl);
					})
			
			})
	}

}