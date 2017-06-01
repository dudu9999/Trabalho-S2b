angular.module('primeiroApp').config([
  '$stateProvider',
  '$urlRouterProvider',
  function($stateProvider, urlRouterProvider){
    $stateProvider.state('dashboard',{
      url: "/dashboard",
      templateUrl: "dashboard/dashboard.html"
    }).state('cicloCompra',{
      url: "/cicloCompra",
      templateUrl: "cicloCompra/tabs.html"
    })
      $urlRouterProvider.outherwise('/dashboard')
  }
])
