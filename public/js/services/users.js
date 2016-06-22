app.factory('UsersFactory', ['$http', function PeoplesFactory($http) {
    var path = '/users';
    var peoples = [];
		return {
			getAll: function(){
				return $http({method: 'GET', url: path});
			},
      insert: function(obj){
        return $http({method: 'POST', url: path, data: obj});
      },
      remove: function(id){
        return $http({method: 'DELETE', url: path +'/' + id});
      }
    }
}]);
