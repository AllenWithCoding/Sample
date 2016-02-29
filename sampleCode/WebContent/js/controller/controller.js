var app = angular.module('app');


app.controller('UserController',['$scope','UserImgService','$filter',function($scope,UserImgService,$filter){
	$scope.init = function(){
		$scope.userData=[];
		UserImgService.getUserSelfData().then(
				function(data){
					$scope.userData = data.data;
				},
				function(err){
					console.log(err);
				}
			);

	}

	$scope.ifSuccess = "Downloading";

	$scope.callback = function(flag){
		if(flag){
			$scope.ifSuccess = "Success";
		}else{
			$scope.ifSuccess = "Downloading";
		}
		
	}
	$scope.thumbsTypes= ["thumbnail","low_resolution","standard_resolution"];
	$scope.selectedThumbsType="images."+$scope.thumbsTypes[0]+".url";

	$scope.selectedIndex = 0;
	$scope.increase = function(){
		if($scope.selectedIndex<2){
			$scope.selectedIndex++;
		$scope.selectedThumbsType="images."+$scope.thumbsTypes[$scope.selectedIndex]+".url";
	}}
	$scope.decrease = function(){
		if($scope.selectedIndex>0){
			$scope.selectedIndex--;
		$scope.selectedThumbsType="images."+$scope.thumbsTypes[$scope.selectedIndex]+".url";
	}
	}

}])


