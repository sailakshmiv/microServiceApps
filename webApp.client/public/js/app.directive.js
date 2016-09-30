(function(){
    'use strict';
    angular
        .module('myApp')
        .directive('dashboard',dashboard);

    function dashboard(){
        return {
            restrict:'E',
            templateUrl: 'dashboard.template.html',
            controller:'myController',
            controllerAs:'ctrl'
        };
    }
})();