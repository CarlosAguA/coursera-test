(function (){
   'use strict';

   angular.module("LunchCheck", [])
   .controller("LunchController", LunchController);

  LunchController.$inject = ['$scope'];

   function LunchController($scope){
     $scope.somePlaceholder = "list comma separated dishes you usually have for lunch";
      $scope.textFromButton = "Check If Too Much";
      $scope.itemsForLunch = "";
      $scope.numberOfItems = 0 ;
      $scope.flagToShowMessage = false ;
      $scope.colorsFlag = 0;

      $scope.calculateItems = function(){
        $scope.flagToShowMessage = true;
        var stringToSplit = $scope.itemsForLunch ;
        var array = stringToSplit.split(',');

        if(array[0] == ""){
           array = [];
        }

        removeArrayIndexWhenEmpty(array);
        $scope.numberOfItems = array.length ;
      };

      $scope.displayMessage = function (){
      var items =  $scope.numberOfItems;
        if( items > 0 && items <= 3   ){
          $scope.colorsFlag= 1;
            return "Enjoy!";
        }else if (items >3){
           $scope.colorsFlag= 2;
            return "Too Much!" ;
        }
        else{
           $scope.colorsFlag= 0;
            return "Please enter data first.";
        }
      };

     //Handled situation : not counting after the comma when empty.
      function removeArrayIndexWhenEmpty(array){
        //Remove the item from the array when it´s empty
        array.forEach( function(entry){
           entry = entry.trim();
          if(entry == '' ){
              array.splice(-1,1)
          }
        });
      }
   }
})();
