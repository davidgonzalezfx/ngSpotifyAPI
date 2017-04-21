"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var core_1 = require("@angular/core");
var platform_browser_1 = require("@angular/platform-browser");
// Components
var app_component_1 = require("./app.component");
var navbar_component_1 = require("./Components/Navbar/navbar.component");
var search_component_1 = require("./Components/Search/search.component");
var about_component_1 = require("./Components/About/about.component");
var artist_component_1 = require("./Components/Artist/artist.component");
var album_component_1 = require("./Components/Album/album.component");
// Services
var http_1 = require("@angular/http");
// Router
var app_routing_1 = require("./app.routing");
// Forms
var forms_1 = require("@angular/forms");
var AppModule = (function () {
    function AppModule() {
    }
    return AppModule;
}());
AppModule = __decorate([
    core_1.NgModule({
        imports: [
            platform_browser_1.BrowserModule,
            app_routing_1.Routing,
            forms_1.FormsModule,
            http_1.HttpModule
        ],
        declarations: [
            app_component_1.AppComponent,
            navbar_component_1.NavbarComponent,
            search_component_1.SearchComponent,
            about_component_1.AboutComponent,
            artist_component_1.ArtistComponent,
            album_component_1.AlbumComponent
        ],
        bootstrap: [app_component_1.AppComponent]
    })
], AppModule);
exports.AppModule = AppModule;
//# sourceMappingURL=app.module.js.map