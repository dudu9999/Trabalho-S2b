angular.module('accountCtrl',function($scope, $location){
  $scope.submit = function(){
    var  uname =  $scope.username;
    var  password =  $scope.password;
    if (($scope.username == 'admin') && ($scope.password == 'admin')) {
        $location.path('/dashboard');
    }else {
      alert("Usuario não existe");
    }
  };
});
/*
angular.module('accountCtrl',function($scope, $location){
  $scope.submit = function(){
    var  uname =  $scope.username;
    var  password =  $scope.password;
    if (($scope.username == 'admin') && ($scope.password == 'admin')) {
        $location.path('/dashboard');
    }else if ($scope.username == 'admin' && $scope.password =! 'admin') {
      alert("senha errada");
    }else if ($scope.username =! 'admin' && $scope.password == 'admin') {
      alert("Usuario errado");
    }else{
      alert("Usuario não existe");
    }
  };
});

*/
