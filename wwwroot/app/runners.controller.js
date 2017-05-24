
(function () {
    'use strict';

    angular
        .module('app')
        .controller('RunnersController', ['$scope', RunnersController]);

    RunnersController.$inject = ['$http'];

    function RunnersController($scope) {
        var vm = this;

        vm.title = '';

        activate();

        function activate() {
            $http.get('/api/runner').then(function (response) {
                vm.runners = response.data;

            }).catch(function (err) {
                console.log(err);
            })
        }
    }
})();
