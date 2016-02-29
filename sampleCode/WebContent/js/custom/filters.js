var app = angular.module('app');

// Setup the filter
app.filter('CustomFilter', function() {

  // Create the return function and set the required parameter name to **input**
  return function(input,expression,key) {
// console.log(input);
    var out = [];

    // Using the angular.forEach method, go through the array of data and perform the operation of figuring out if the language is statically or dynamically typed.
    angular.forEach(input, function(obj) {

    	if(angular.isObject(obj) && angular.isObject(obj[key])){
    		// console.log(obj.tags);
      if (obj.tags.indexOf(expression)>-1) {
      	
        out.push(obj)
      }
      }
    })

    return out;
  }

});