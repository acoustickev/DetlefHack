(function() {
    'use strict';

    angular
        .module('DetlefApp')
        .controller('hiLightsController', hiLightsController);

    hiLightsController.$inject = ['detlefFactory', 'toastr'];

    /* @ngInject */
    function hiLightsController(detlefFactory, toastr) {
        var vm = this;
        vm.title = 'hiLightsController';



       




    }

})();
