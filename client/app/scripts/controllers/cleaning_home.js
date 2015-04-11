'use strict';

/**
 * @ngdoc function
 * @name letsSchedulecommyApp.controller:CleaningServicesCtrl
 * @description
 * # CleaningServicesCtrl
 * Controller of the letsSchedulecommyApp
 */
angular.module('letsSchedulecommyApp')
  .controller('CleaningServicesCtrl', function ($scope, $log, $rootScope, $http, $modal, getSelectedPackages, getLocations, saveBookingDetails) {
  	var host = 'http://localhost:3000';
  	var date = new Date();
    var d = date.getDate();
    var m = date.getMonth();
    var y = date.getFullYear();
    var packages, packagesdata, packagesarray, packages1, locations, modalInstance, customerParams, params;

    $scope.getlocations = function() {
      console.log("coming in here first");
      getLocations.myLocation().then(function(data) {
        console.log('success locations');
        $scope.locations = data;
        console.log($scope.locations);
      });
    };

    $scope.getReservationDetails = function(size, packageSlot) {
      var service_option;
      if($('input[name=service_option]:checked')) {

        service_option = $('input[name=service_option]:checked').val();
      }
     
      if (service_option!= null) {
        $rootScope.date = new Date();
        console.log($rootScope.date);
        $rootScope.singlePackageSlot = packageSlot;
        $rootScope.locationName = $scope.cleaningServiceLocation.name;

        modalInstance = $modal.open({
          templateUrl: 'views/cleaning_services/register_event.html',
          controller: 'CleaningServicesCancelCtrl',
          size: size
        });
      }
      else {
        $('.product-noselected-message').html('Please select an option');
      }
    
    };

    $('input[name=service_option]').click(function() {
      console.log("im here lah")
      $('.product-noselected-message').toggle();
    });

    $scope.getServiceID = function(number) {
      $rootScope.serviceID = number;
      console.log("rootscope: "+$rootScope.serviceID);
    }
  
    $scope.loadPackageTable = function(packages) {
      console.log(packages);
      console.log(packages.length);
      packagesarray = [];
      var key = 0;
      while (key < packages.length) {
        packagesdata = {
          package_id: packages[key].id,
          package_resource: packages[key].resource_quantity,
          start_time: new Date(packages[key].package_start_time).getUTCHours() + ":" + ('0'+ new Date(packages[key].package_end_time).getUTCMinutes()).slice(-2),
          end_time: new Date(packages[key].package_end_time).getUTCHours() + ":" + ('0'+ new Date(packages[key].package_end_time).getUTCMinutes()).slice(-2),
          day_id: packages[key].day_id,
          package_category: packages[key].package_category_name,
          service_name: packages[key].service_name,
        };
        packagesarray[key++] = packagesdata;
      } 
      console.log(packagesarray);  
      $scope.packagesResultSet = packagesarray;
    };

    $scope.open = function($event) {
      $event.preventDefault();
      $event.stopPropagation();

      $scope.opened = true;
    };

    $scope.formats = ['dd-MMMM-yyyy', 'yyyy/MM/dd', 'dd.MM.yyyy', 'shortDate'];
    $scope.format = $scope.formats[0];

    $scope.loadPackagesView = function(){

      console.log($scope.cleaningServiceLocation.id);
      $rootScope.locationID = $scope.cleaningServiceLocation.id;
      getSelectedPackages.packagesBySelection($scope.cleaningServiceLocation.id).then(function(data){
        console.log('success in make reservation');
        packages = data;
        console.log(data);
        $scope.loadPackageTable(packages);
      });
    };

    $scope.submitCustomerDetails = function() {
      customerParams = {
        customer_name: mortgageForm.customer_name.value,
        customer_phone: mortgageForm.customer_phone.value,
        customer_email: mortgageForm.customer_email.value,
        customer_address: mortgageForm.customer_address.value
      };

      console.log(customerParams)
      $rootScope.postCustomerDetails = customerParams;
      $scope.cancel();
    };

    $scope.confirmBookingReservation = function(singlePackageSlot, postCustomerDetails) {
      console.log("----------------------")
      console.log(singlePackageSlot)
      console.log(postCustomerDetails)
      console.log("----------------------")
      var location_id = $rootScope.locationID;
      var paramsSlot = JSON.stringify(singlePackageSlot.package_id).replace(/:/g,'=').replace(/"/g,'').replace(/,/g,'&').replace(/{/g,'').replace(/}/g,'').replace(/ /g,'+');
      console.log("package param: " + paramsSlot);
      var paramsUser= JSON.stringify(postCustomerDetails).replace(/:/g,'=').replace(/"/g,'').replace(/,/g,'&').replace(/{/g,'').replace(/}/g,'').replace(/ /g,'+');
      console.log("package param: " + paramsUser);
      saveBookingDetails.myDetails(paramsSlot, location_id, paramsUser).then(function(data){ 
        console.log('saved in schedule db');
        console.log(data);
      });
    };

    $scope.passParams = function(singlePackageSlot) {
      console.log("in pass params");
      console.log($rootScope.locationID);
      params = {
        package_id: singlePackageSlot.package_id,
        time_slot_id: singlePackageSlot.time_slot_id,
        employees: singlePackageSlot.package_resource,
        location_id: $rootScope.locationID,
        package_category_id: singlePackageSlot.package_category_id
      };
      return params;
    };

});


angular.module('letsSchedulecommyApp')
  .controller('CleaningServicesCancelCtrl', function ($location, $scope, $modalInstance) {
    $scope.cancel = function() {
      console.log("in cancel mode");
      $modalInstance.dismiss('cancel');
    };

  });

    // $scope.eventSources = {
    //   color: 'red', // an option!
    //   textColor: 'black' // an option!
    // };  

    // $scope.events = [{
    //     title: 'Birthday Party',
    //     start: new Date(y, m, d + 1, 19, 0),
    //     end: new Date(y, m, d + 1, 22, 30),
    //     allDay: false
    //   }];
      
    //   $scope.calendarOptions = {
    //     calendar: {
    //       height: 450,
    //       editable: false,
    //       header: {
    //         left: 'month agendaWeek agendaDay',
    //         center: 'title',
    //         right: 'today prev,next'
    //       },
    //       defaultView: 'agendaWeek',
    //       dayClick: $scope.alertEventOnClick,
    //       eventResize: $scope.alertOnResize,
    //       eventClick: function(size) {
            
    //       }, 
    //     }
    //   };
      
    //   $scope.eventSources = [$scope.events];
        
     


  
      // $scope.getpackageData = function(packages) {
         
      //   var start = new Date();
      //   console.log(start);
      //   var end = new Date();
      //   var endMonth = end.getMonth() + 2;
      //   console.log("endMonth: " + endMonth);
      //   var dayOfWeek = [];
      //   console.log("here it stops");
      //   while (end.getMonth() <= endMonth) {
      //     console.log(end);
      //     end.setDate(end.getDate() + 7);
      //     console.log("-- end --")
      //     console.log(end);
      //   }
      //   end.setDate(end.getDate()- 7);
      //   console.log(end);
      //   console.log(start.getMonth());
      //   var startMonth = start.getMonth();
      //   console.log("startmonth: " + startMonth);
      //   var dayOfWeek = [];
      //   var j=0;
        
      //   for (j =0; j < packages.length; j++) {
      //     $scope.num_str = parseInt(packages[j].day);
      //     $scope.s = getMonthCalendar.monthNumber(start, $scope.num_str);
      //     var getStarted = $scope.s;
      //     while (getStarted.getMonth() <= end.getMonth()) {
      //       dayOfWeek.push(new Date(getStarted.getTime()));
      //       getStarted.setDate(getStarted.getDate() + 7);
      //     }
      //     for (var i =0; i<dayOfWeek.length; i++){
      //       console.log("day of week: "+dayOfWeek[i]);
      //       console.log("day of week number: "+i);
      //       console.log("j: "+j);
      //      $scope.events.push({title: 'Cleaning',start: new Date(dayOfWeek[i].getFullYear(), dayOfWeek[i].getMonth(), dayOfWeek[i].getDate() , packages[j].start_hour, packages[j].start_minute), end: new Date(dayOfWeek[i].getFullYear(), dayOfWeek[i].getMonth(), dayOfWeek[i].getDate(), packages[j].end_hour, packages[j].end_minute),allDay: false});
      //     }
      //   } 
      // };
