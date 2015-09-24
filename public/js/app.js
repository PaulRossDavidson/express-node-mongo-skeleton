var myApp = angular.module("TacoApp", ['ngMaterial','ngMdIcons']);

myApp.run(['$rootScope',function($rootScope){
	console.log("rootScope added.")
}])
.controller('AppCtrl', ['$scope', $mdDialog, function($scope, $mdDialog) {
	console.log('controller loaded')
	$scope.blob = {name: "Paul"}


}]);
// $scope.showAdvanced = function(ev) {
//     $mdDialog.show({
//       controller: DialogController,
//       templateUrl: 'dialog1.tmpl.html',
//       parent: angular.element(document.body),
//       targetEvent: ev,
//       clickOutsideToClose:true
//     })
//     .then(function(answer) {
//       $scope.status = 'You said the information was "' + answer + '".';
//     }, function() {
//       $scope.status = 'You cancelled the dialog.';
//     });
//   };
// });
// function DialogController($scope, $mdDialog) {
//   $scope.hide = function() {
//     $mdDialog.hide();
//   };
//   $scope.cancel = function() {
//     $mdDialog.cancel();
//   };
//   $scope.answer = function(answer) {
//     $mdDialog.hide(answer);
//   };
// }