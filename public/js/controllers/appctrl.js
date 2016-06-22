app
    .controller('appCtrl', ['$scope', 'UsersFactory', '$interval',
                                 function($scope, UsersFactory, $interval){
        //Iniciando loader
        $scope.loading = true;
        $scope.users = [];

        //Buscar usuarios
        $scope.getAllUsers = function(){
          UsersFactory.getAll().then(function(resp){
            $scope.loading = false;
            $scope.users = resp.data;
          });
        };

        $scope.deleteUser = function(id){
          $scope.loading = true;
          UsersFactory.remove(id).then(function(resp){
            $scope.loading = false;
            $scope.users = resp.data;
  		    });
        };

        $scope.getAllUsers();
}]);
