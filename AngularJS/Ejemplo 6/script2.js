var app = angular.module('app', []);
app.controller('myCtrl', function($scope) {
 $scope.pintores= [
    {
     "Nombre":"Pablo Picasso",
     "Ciudad":"Malaga"
    },
    {
    "Nombre":"Diego Velazquez",
    "Ciudad":"Malaga"
    },
    {
    "Nombre":"Salvador Dali",
    "Ciudad":"Malaga"
    },
    {
    "Nombre":"Francisco de Goya",
    "Ciudad":"Malaga"
    }
 ]

});