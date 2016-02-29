
var app = angular.module('app');

 //preview the picture
        app.directive('ngThumbs', ['$filter',function ($filter) {
            return {
                restrict: 'EA',

                scope:{
                	prover:'=',
                	expression:'@',
                	keyName:'=',
                	filterKey:'@',
                    callBack:"="
                },

                template: '<div></div>',
                link: function (scope, element, attributes) {
                    
                    var showImage = function(){
                         scope.callBack(false);
                          element.find('div').empty();
                    var filtedArray = $filter('CustomFilter')(scope.prover,scope.expression,scope.filterKey); 
                    // console.log(filtedArray);

                    angular.forEach(filtedArray,function(obj,i){
                        var url = helper(obj,scope.keyName);
                        var img = new Image();
                    img.src = url;
                    element.find('div').append(img);
                    });
                    // console.log(scope.callBack);
                    scope.callBack(true);
                    }
                	var helper = function(obj,str){
                		var kesy = str.split('.');
                   		var objNow = obj;
                		for(var i=0;i<kesy.length;i++){
                			objNow = objNow[kesy[i]];
                		}
                		return objNow;
                	}
                    scope.$watch(function () {
                        return scope.keyName;
                    }, function () {
                        showImage();
                    });

                	 scope.$watch(function () {
                        return scope.prover;
                    }, function () {
                        showImage();
                    });
                	        	
                }
            }
        }])