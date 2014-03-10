define(['plugins/router', "durandal/app"], function (router, app) {
    return {
        router: router,

        search: function () {
            app.showMessage("Not Implemented", "Error");
        },

        activate: function () {
            router.map([
                { route: '', moduleId: 'viewmodels/home', title: "Home", nav: true },
                {"route": "about", "moduleId": "viewmodels/about", "title": "About Us", "nav": true},
                {"route": "products", "moduleId": "viewmodels/products", "title": "Products", "nav": true},
                {"route": "KO", "moduleId": "viewmodels/KO", "title": "KO Test", "nav": true},
                /*{durandal:routes}*/
            ]).buildNavigationModel();

            return router.activate();
        }
    };
});