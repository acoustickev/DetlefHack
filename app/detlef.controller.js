(function() {
    'use strict';

    angular
        .module('DetlefApp')
        .controller('mainController', mainController);

    mainController.$inject = ['detlefFactory', 'toastr'];

    /* @ngInject */
    function mainController(detlefFactory, toastr) {
        var vm = this;
        vm.title = 'mainController';

        vm.jokeSearch = function(searchJoke) {
            detlefFactory.getLinked(searchJoke).then(
                function(response) {
                    console.log(response.data.value.joke);
                    vm.jokeResponse = response.data.value.joke.replace(/&quot;/g, '"');
                    console.log(vm.jokeResponse);
                    toastr.success("The Guy From Parks and Rec");
                },
                function(error) {
                    if (error.data) {
                        toastr.error("My Haircut costs $5" + error.data);
                    } else {
                        toastr.info('Bring Back the Sonics');
                    }
                }

            )
            vm.searchJoke = '';
        };




    }

})();
