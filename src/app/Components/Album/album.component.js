"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var core_1 = require("@angular/core");
var router_1 = require("@angular/router");
var spotify_service_1 = require("../../Services/spotify.service");
var platform_browser_1 = require("@angular/platform-browser");
var AlbumComponent = (function () {
    function AlbumComponent(_spotify, _router, sanitizer) {
        this._spotify = _spotify;
        this._router = _router;
        this.sanitizer = sanitizer;
    }
    AlbumComponent.prototype.ngOnInit = function () {
        var _this = this;
        this._router.params
            .map(function (params) { return params['id']; })
            .subscribe(function (id) {
            _this._spotify.getAlbums(id)
                .subscribe(function (album) {
                _this.album = album;
                _this.albumUrl = _this.album.images[0].url;
                _this.safeAlbum = _this.sanitizer.bypassSecurityTrustResourceUrl(_this.albumUrl);
            });
        });
    };
    return AlbumComponent;
}());
AlbumComponent = __decorate([
    core_1.Component({
        selector: 'album',
        templateUrl: './album.component.html'
    }),
    __metadata("design:paramtypes", [spotify_service_1.SpotifyService, router_1.ActivatedRoute, platform_browser_1.DomSanitizer])
], AlbumComponent);
exports.AlbumComponent = AlbumComponent;
//# sourceMappingURL=album.component.js.map