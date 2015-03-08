'use strict';

/**
 * @ngdoc function
 * @name letsSchedulecommyApp.controller:CleaningServicesCtrl
 * @description
 * # CleaningServicesCtrl
 * Controller of the letsSchedulecommyApp
 */
angular.module('letsSchedulecommyApp')
  .controller('CleaningServicesCtrl', function ($scope, $log, $http, $modal, cleaningService, getMonthCalendar, getpackagedataArray) {
  	var host = 'http://localhost:3000';
  	var date = new Date();
    var d = date.getDate();
    var m = date.getMonth();
    var y = date.getFullYear();
    var packages, packagesdata, packages1;
    
    $scope.eventSources = {
    color: 'red', // an option!
    textColor: 'black' // an option!
  };
  
   $scope.events = [{
        title: 'Birthday Party',
        start: new Date(y, m, d + 1, 19, 0),
        end: new Date(y, m, d + 1, 22, 30),
        allDay: false}];
  	
	  $scope.calendarOptions = {
    calendar: {
    
      height: 450,
      editable: false,
      header: {
        left: 'month agendaWeek agendaDay',
        center: 'title',
        right: 'today prev,next'
      },
      defaultView: 'agendaWeek',
      dayClick: $scope.alertEventOnClick,
      eventResize: $scope.alertOnResize,
      eventClick: function(size) {

        var modalInstance = $modal.open({
      			templateUrl: 'views/cleaning_services/register_event.html',
        		controller: 'CleaningServicesCtrl',
      			size: size
    			});
      },
      
    }
  };
  
  $scope.registerevent = function() {
  	
  };
  
  
  $scope.eventSources = [$scope.events];
	  
	  $scope.makeReservation = function(){
	  	
	  	var url = host + '/packages.json?callback=JSON_CALLBACK&'+'format=json';
	  	
	  	//console.log(url);
	  	cleaningService.myService().then(function(data){
    		 console.log("success");
			   packages = data;
			   console.log(data);
			   $scope.getpackageData(getpackagedataArray.packageDataArray(packages));
			   });
			   // getpackagedataArray.packageDataArray(packages).then(function(data){
    		 // console.log("success getpackage");
			   // packages1 = data;
			   // console.log(packages1);
			   // });
			   
    	 
    	 
	    
	  };
	  
	  $scope.getpackageData = function(packages) {
	  	
    	 //console.log("loandataarray");
    	 //console.log(loandatarray[i].count);
    	 
    	 var start = new Date();
    	 console.log(start);
    	 var end = new Date();
    	 var endMonth = end.getMonth() + 2;
    	 console.log("endMonth: " + endMonth);
   		 var dayOfWeek = [];
   		 console.log("here it stops");
    	 while (end.getMonth() <= endMonth) {
    	 		console.log(end);
    	 		end.setDate(end.getDate() + 7);
    	 		console.log("-- end --")
    	 		console.log(end);
    	 }
    	 end.setDate(end.getDate()- 7);
    	 
    	 console.log(end);
    	 console.log(start.getMonth());
    	 var startMonth = start.getMonth();
    	 console.log("startmonth: " + startMonth);
    	  var dayOfWeek = [];
    	 
    	 var j=0;
     
    //console.log(dayOfWeek);
    
    		for (j =0; j < packages.length; j++)
    	 	{
    	 		$scope.num_str = parseInt(packages[j].day);
    	 		$scope.s = getMonthCalendar.monthNumber(start, $scope.num_str);
    	 	//console.log("startDatereturn: " + $scope.s);
    	 	var getStarted = $scope.s;
    			while (getStarted.getMonth() <= end.getMonth()) 
    			{
        		dayOfWeek.push(new Date(getStarted.getTime()));
        		getStarted.setDate(getStarted.getDate() + 7);
    			}
    			//console.log("day of week: "+dayOfWeek.length);
    			for (var i =0; i<dayOfWeek.length; i++){
    				console.log("day of week: "+dayOfWeek[i]);
    				console.log("day of week number: "+i);
    				console.log("j: "+j);
    	   $scope.events.push({title: 'Cleaning',start: new Date(dayOfWeek[i].getFullYear(), dayOfWeek[i].getMonth(), dayOfWeek[i].getDate() , packages[j].start_hour, packages[j].start_minute), end: new Date(dayOfWeek[i].getFullYear(), dayOfWeek[i].getMonth(), dayOfWeek[i].getDate(), packages[j].end_hour, packages[j].end_minute),allDay: false});
    	  }
	  	 }
	  	 console.log("done");	 
	  };
  });