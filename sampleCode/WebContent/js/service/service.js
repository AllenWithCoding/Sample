var app = angular.module('app');

app.factory('UserImgService',['$http','$q',function($http,$q){

	return {


		getUserSelfData:function(){
		return $http.jsonp('https://api.instagram.com/v1/users/self/media/recent/?access_token=321800930.0a55143.8a16d377fa864a61868c823c2deb8ba4&url=http://instagr.am/p/fA9uwTtkSN/&callback=JSON_CALLBACK').then(
			function(response){
				return response.data;
			},
			function(err){
				return $q.reject(err);
			}
			);
	
	}}
	


}]);