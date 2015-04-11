'use strict';

/**
 * @ngdoc function
 * @name letsSchedulecommyApp.controller:UserSessionsCtrl
 * @description
 * # UserSessionsCtrl
 * Controller of the letsSchedulecommyApp
 */
angular.module('letsSchedulecommyApp').controller('UserSessionsCtrl', function ($scope, $auth, $location) {
	 
	$scope.$on('auth:login-error', function(ev, reason) {
  	$scope.error = reason.errors[0];
	});

 $scope.handleRegBtnClick = function() {
 	console.log("im here now")
    $auth.submitRegistration($scope.registrationForm).then(function() { 
    	console.log($scope.registrationForm)
      $auth.submitLogin({
        email: $scope.registrationForm.email,
        password: $scope.registrationForm.password
      });
    });
  };

  $scope.$on('auth:registration-email-error', function(ev, reason) {
  	$scope.error = reason.errors[0];
	});
});