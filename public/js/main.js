//Iniciando aplicação e importando dependências
var app = angular.module('commandApp', ['ngMaterial'])
.config(function($mdThemingProvider) {
  $mdThemingProvider.theme('default')
    .primaryPalette('blue');
});
