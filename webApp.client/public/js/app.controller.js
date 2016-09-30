(function(){
    'use strict';
    angular
        .module('myApp')
        .controller('myController',myController);

    function myController($scope,DataService,$timeout){
        var that= this;

        that.alert=false;
        that.search=null;
        that.searchData=null;
        that.position=null;        
        that.showAll=false;
        
        DataService.fetchData(that);
        
        that.searchDataFunction = searchDataFunction;
        that.searchClick = searchClick;
        that.displayAll=displayAll;
        
        setInterval(function(){
            $scope.$apply(function(){
                DataService.fetchData(that);

            });
        },5000);
        
        function searchClick(){
            that.searchData = that.search;
            searchDataFunction();
        }
        function searchDataFunction(){
            reset();
            //process data to get position for 1 instrument
            var temp = that.data;
            var i=0;
            for(;i<temp.length;i++){
                if(temp[i].instrument === parseInt(that.searchData)){
                    that.position = temp[i].position;
                    break;                                        
                }
            }          
            if(i=== temp.length){
                that.searchData=null;
                that.alert = "Position not found for instrument:"+that.searchData;
            }
        }

        function displayAll(){
            reset();
            that.search=null;
            that.searchData=null;
            that.position=null;

            if(that.showAll)
                that.showAll= false;
            else
                that.showAll = true;
            console.log(that.showAll);

        }     
        function reset(){
            that.alert = false;            
        }  
    }
})();
