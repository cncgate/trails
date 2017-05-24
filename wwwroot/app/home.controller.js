
(function () {
    'use strict';

    angular
        .module('app')
        .controller('HomeController', ['$scope', HomeController]);

    function HomeController($scope) {
        var vm = this;

        vm.title = '';

        activate();

        function activate() { }
    }
})();
