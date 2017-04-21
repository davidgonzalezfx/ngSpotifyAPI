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
var spotify_service_1 = require("../../Services/spotify.service");
var SearchComponent = (function () {
    function SearchComponent(_spotify) {
        this._spotify = _spotify;
    }
    SearchComponent.prototype.searchMusic = function () {
        var _this = this;
        return this._spotify.searchMusic(this.searchStr).subscribe(function (res) {
            console.log(res.artists.items);
            _this.res = res.artists.items;
            // console.log('Res.name equal to: '+ this.res)
        });
    };
    return SearchComponent;
}());
SearchComponent = __decorate([
    core_1.Component({
        selector: 'search',
        templateUrl: './search.component.html',
    }),
    __metadata("design:paramtypes", [spotify_service_1.SpotifyService])
], SearchComponent);
exports.SearchComponent = SearchComponent;
//# sourceMappingURL=search.component.js.map