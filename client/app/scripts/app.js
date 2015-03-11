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
    'ngSanitize'
  ])
  .config(function ($routeProvider) {
    $routeProvider
      .when('/', {
        templateUrl: 'views/cleaning_services/homepage.html',
        controller: 'CleaningServicesCtrl'
      })
      .when('/about', {
        templateUrl: 'views/about.html',
        controller: 'AboutCtrl'
      })
      .otherwise({
        redirectTo: '/'
      });
  });
