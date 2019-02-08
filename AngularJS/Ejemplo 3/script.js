var app = angular.module('app', []);
app.controller('Controller', function($scope) {
 $scope.total=0;
 $scope.cuanto=0;

 $scope.sumar = function(){
     $scope.total += parseInt($scope.cuanto);
 }

 $scope.restar = function(){
    $scope.total -= parseInt($scope.cuanto);
}
});