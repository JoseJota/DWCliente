var app=angular.module("app",[]);
 
app.constant("idioma","es-es");
 
app.constant("matematicas_simples",{
  sumar:function(a,b) {
    return a+b;
  },
  restar:function(a,b) {
    return a-b;
  }
});
 
app.constant("radio",10);
 
app.constant("area",function(radio) {
  return 3.1416*radio*radio;
})
app.constant("estatura","200");

app.controller("Controller2",["$scope","estatura",function($scope,estatura){
$scope.estatura=estatura;
}]);

app.controller("PruebaController",["$scope","idioma","matematicas_simples","radio","area",function($scope,idioma,matematicas_simples,radio,area) {
  $scope.idioma=idioma;
  $scope.suma=matematicas_simples.sumar(3,6);
  $scope.area=area(radio);
}]);