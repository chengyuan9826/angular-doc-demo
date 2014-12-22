docApp.controller('ListCtrl', function($scope) {
    var selectedCategory = "home";

    $scope.selectedCategory = function(newCategory) {
        selectedCategory = newCategory;
    }
    $scope.getCategoryClass = function(item) {
    	console.log(item,selectedCategory);
        return item == selectedCategory ? "active" : "";
    }
});
docApp.controller('RouteNavCtrl',function(){
	
});
docApp.controller('RouteListCtrl',function(){
	
});
docApp.controller('RouteHomeCtrl',function(){
	
});
