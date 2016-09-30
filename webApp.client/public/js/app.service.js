
(function(){
    'use strict';
    angular
        .module('myApp')
        .factory('DataService',DataService);

        function DataService($http){
            var that = {};        
            that.fetchData = function(obj){
                
                $http.get('http://localhost:8081/api/v1/fetchAll').then(successCallback, errorCallback);
                
                function successCallback(data){
                    obj.data = data.data;
                    //updating search data
                    if(obj.position!==null){
                        obj.searchDataFunction();
                    }
                    console.log('Data fetched');
                }    
                function errorCallback(err){
                    console.log('Error while fetching data from server',err);
                }
            }
            
            return that;
            
        }
})();