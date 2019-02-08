var app = angular.module('app', []);
app.controller('Controller', ['$scope', '$timeout', '$log',function($scope, $timeout, $log) {
 $scope.acierto="NO";

 $scope.calcular = function(){
     $timeout(function() {
         $scope.random = Math.floor(Math.random()* 3) + 1;
         $log.log("Numero random: "+$scope.random);
         if ($scope.random==$scope.valor){
             $scope.acierto="SI";
         }
         
    },300);
}
}]);