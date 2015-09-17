var myApp = angular.module("TacoApp", ['ngMaterial','ngMdIcons']);

myApp.run(['$rootScope',function($rootScope){
	console.log("rootScope added.")
}])
.controller('AppCtrl', ['$scope', function($scope) {
	console.log('controller loaded')
	$scope.blob = {name: "Paul"}


}]);