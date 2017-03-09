(function() {
    'use strict';

    angular
        .module('DetlefApp')
        .factory('detlefFactory', detlefFactory);

    detlefFactory.$inject = ['$http', '$q'];

    /* @ngInject */
    function detlefFactory($http, $q) {
        var service = {
            getLinked: getLinked,
            getVideo: getVideo
        };
        return service;

        ////////////////

        function getLinked(name) {
            var defer = $q.defer();

            $http({
                    method: 'GET',
                    url: 'http://api.icndb.com/jokes/random?firstName=Detlef&amp;lastName=Schrempf',
                    params: {
                        firstName: name,


                        
                    }
                })
                .then(
                    function(response) {
                        if (typeof response.data === 'object') {
                            defer.resolve(response);


                        } else {
                            defer.reject(response);
                        }
                    },
                    // failure
                    function(error) {
                        defer.reject(error);

                    });

            return defer.promise;
        }



        function getVideo(searchVideo) {
            var defer = $q.defer();

            $http({
                    method: 'GET',
                    url: '',
                    params: {
                        key: 'AIzaSyADIvcJHqmSGWTZGuzoLt8nMoxTHrIKUec',
                        part: '',
                        
                    }
                })
                .then(
                    function(response) {
                        if (typeof response.data === 'object') {
                            defer.resolve(response);


                        } else {
                            defer.reject(response);
                        }
                    },
                    // failure
                    function(error) {
                        defer.reject(error);

                    });

            return defer.promise;
        }

    }


})();
