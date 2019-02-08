var app = angular.module('app', []);
app.controller('Controller', ['$scope', '$timeout', '$log',function($scope, $timeout, $log) {
 $scope.producidoEvento="NO";

 $timeout(function() {
     $scope.producidoevento="SIII";
},3000);

$log.log("Hola");
$log.warn("!!!");
$log.warn("!!!!!!");
$log.error("Vamos que la he liao parda");
}]);