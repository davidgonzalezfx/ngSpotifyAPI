"use strict";
var router_1 = require("@angular/router");
var about_component_1 = require("./Components/About/about.component");
var search_component_1 = require("./Components/Search/search.component");
var artist_component_1 = require("./Components/Artist/artist.component");
var album_component_1 = require("./Components/Album/album.component");
var routes = [
    {
        path: '',
        component: search_component_1.SearchComponent
    },
    {
        path: 'about',
        component: about_component_1.AboutComponent
    },
    {
        path: 'artist/:id',
        component: artist_component_1.ArtistComponent
    },
    {
        path: 'album/:id',
        component: album_component_1.AlbumComponent
    }
];
exports.Routing = router_1.RouterModule.forRoot(routes);
//# sourceMappingURL=app.routing.js.map