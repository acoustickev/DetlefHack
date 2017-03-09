(function() {
    'use strict';

    var DetlefApp = angular.module('DetlefApp', ['toastr', 'ui.router',]);

    DetlefApp.filter('trustThisUrl', ['$sce', function($sce) {
        return function(val) {
            return $sce.trustAsResourceUrl(val);
        };
    }]);

    DetlefApp.config(function($stateProvider, $urlRouterProvider) {

        $urlRouterProvider.otherwise("/State1");

        $stateProvider


            .state('State1', {
                url: "/State1",
                templateUrl: "app/partials/State1.html",
                controller: "mainController",
                controllerAs: "vm"

            })
            .state('State2', {
                url: "/State2",
                templateUrl: "app/partials/State2.html",
                controller: "hiLightsController",
                controllerAs: "vm"
            });
    });
})();
