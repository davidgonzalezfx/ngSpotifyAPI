import { Injectable } from '@angular/core'
import { Http } from '@angular/http'
import 'rxjs/add/operator/map'

@Injectable()
export class SpotifyService {
	private searchUrl:string
	private artistUrl:string
	private albumUrl:string
	private albumsUrl:string

	constructor(private _http: Http){

	}

	searchMusic(str:string, type="artist"){
		this.searchUrl = `https://api.spotify.com/v1/search?query=${str}&limit=20&type=${type}`
		return this._http.get(this.searchUrl).map(res => res.json())
	}

	searchArtist(id:string){
		this.artistUrl = `https://api.spotify.com/v1/artists/${id}`
		return this._http.get(this.artistUrl)
			.map(res => res.json())
	}

	getAlbum(artist_id:string){
		this.albumUrl = `https://api.spotify.com/v1/artists/${artist_id}/albums`
		return this._http.get(this.albumUrl)
			.map(res => res.json())
	}
	getAlbums(id:string){
		this.albumsUrl = `https://api.spotify.com/v1/albums/${id}`
		return this._http.get(this.albumsUrl)
			.map(res => res.json())
	}
}