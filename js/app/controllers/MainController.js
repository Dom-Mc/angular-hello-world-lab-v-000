function MainController($scope){
  $scope.name = "Dom";
  $scope.email = "dom@example.com"
  $scope.phone = "4153333333"
}

angular
  .module('app')
  .controller('MainController', MainController);
