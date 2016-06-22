app
    .directive("addUser",['$mdDialog', 'UsersFactory', '$mdToast', function($mdDialog, UsersFactory, $mdToast){
    return {
        restrict: 'E',
        templateUrl: 'js/directives/tpl/add-user.html',
        link: function($scope, elem, attrs){
            $scope.showDialog = function($event){
                $mdDialog.show({
                    parent: angular.element(document.body),
                    targetEvent: $event,
                    scope: $scope,
                    preserveScope: true,
                    templateUrl: 'js/directives/tpl/add-user-dialog.html',
                    controller: function($scope, $mdDialog){
                        $scope.user = {};

                        $scope.closeDialog = function() {
                          $mdDialog.hide();
                        }

                        $scope.saveUser = function(){
                            $scope.loading = true;

                            UsersFactory.insert($scope.user).then(function(resp){
                                $scope.closeDialog();
                                Alert('User saved successfully.', $mdToast);
                                $scope.getAllUsers();
                            });
                        }

                    }
                });
            }
        }
    }
}]);
