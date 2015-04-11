'use strict';

/**
 * @ngdoc overview
 * @name letsSchedulecommyApp
 * @description
 * # letsSchedulecommyApp
 *
 * Main module of the application.
 */
angular
  .module('letsSchedulecommyApp', [
    'ngCookies',
    'ngResource',
    'ngRoute',
    'ui.bootstrap',
    'ui.calendar',
    'ngSanitize',
    'ui.router',
    'ng-token-auth',
    'Devise'
  ])
  .config(function ($stateProvider, $routeProvider, $authProvider) {
    $routeProvider
      .when('/sign_in', {
        templateUrl: 'views/user_sessions/sign_in.html',
        controller: 'UserSessionsCtrl'
      })
      .when('/sign_up', {
        templateUrl: 'views/user_sessions/sign_up.html',
        controller: 'UserSessionsCtrl'
      })
      .when('/', {
        templateUrl: 'views/cleaning_services/homepage.html',
        controller: 'CleaningServicesCtrl'
      })
      .when('/maid-cleaners', {
        templateUrl: 'views/cleaning_services/maid_cleaning_service.html',
        controller: 'CleaningServicesCtrl'
      })
      .when('/booking_confirmation', {
        templateUrl: 'views/cleaning_services/reservation_confirmation.html',
        controller: 'CleaningServicesCtrl'
      })
      .when('/payment_confirmation', {
        templateUrl: 'views/cleaning_services/payment_confirmation.html',
        controller: 'CleaningServicesCtrl'
      })
      .when('/about', {
        templateUrl: 'views/about.html',
        controller: 'AboutCtrl'
      })
      .otherwise({
        redirectTo: '/'
      });

      $stateProvider.state('sunday', {
        url: "/maid-cleaners",
        templateUrl: "views/cleaning_services/tabs/sunday.html"
      }); 

      $authProvider.configure({
        apiUrl: 'http://localhost:3000/api'
      });    
  });

// angular.module('letsSchedulecommyApp').run(['$rootScope', '$location', function($rootScope, $location) {
//   $rootScope.$on('auth:login-success', function() {
//     $location.path('/');
//   });
// }]);


// angular.module('letsSchedulecommyApp', ['ng-token-auth'])
//     .config(function($authProvider) {
//         $authProvider.configure({
//             apiUrl: 'http://api.example.com'
//         });
//     });