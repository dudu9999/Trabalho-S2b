angular.module('primeiroApp').config([
  '$stateProvider',
  '$urlRouterProvider',
  function($stateProvider, $urlRouterProvider) {
    $stateProvider.state('dashboard', {
      url: "/dashboard",
      templateUrl: "dashboard/dashboard.html"
    }).state('cicloCompra',{
      url: "/cicloCompra",
      templateUrl: "cicloCompra/tabs.html"
    }).state('login', {
      url: "/login",
      templateUrl: "cicloCompra/account.html"
    }).state('register', {
      url: "/register",
      templateUrl: "cicloCompra/register.html"
    }).state('anuncio', {
      url: "/anuncio",
      templateUrl: "cicloCompra/anuncio.html"
    }).state('checkout', {
      url: "/checkout",
      templateUrl: "cicloCompra/checkout.html"
    })
    $urlRouterProvider.otherwise('/dashboard')
  }
])
