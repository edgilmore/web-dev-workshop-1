define(["jquery", "knockout", "durandal/app", "durandal/system", "plugins/router", "q", "breeze"], function ($, ko, app, system, router) {
    var
    // Properties

    // Handlers
        getCustomer = function () {
            this.Name = ko.observable;
            this.Age = ko.observable;
        },
    // Lifecycle
        activate = function () {

        },

        deactivate = function () {
        };

    return {
        // Place your public properties here
        activate: activate,
        deactivate: deactivate
    };
});
