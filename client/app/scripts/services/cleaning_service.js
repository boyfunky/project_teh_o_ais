'use strict';
var projectTehOAis = angular.module('letsSchedulecommyApp');
projectTehOAis.service('saveBookingDetails', function($http, $q) {
	var host = 'http://localhost:3000';
 	var saveDetails = { 	
 		myDetails: function(paramsSlot, location_id, paramsUser){
 			console.log("sending to database");
 			//var passParams = JSON.stringify(singlePackageSlot).replace(/:/g,'=').replace(/"/g,'').replace(/,/g,'&').replace(/{/g,'').replace(/}/g,'').replace(/ /g,'+');
 			//console.log(passParams);
 			var d= $q.defer();
 			// t.integer :user_id
    //   t.date    :service_date
    //   t.integer :company_id
    //   t.integer :time_slot_id
    //   t.integer :employees
    //   t.integer :location_id
    //   t.string  :status
    //   t.string  :feedback
    //   t.decimal :transaction_amount
    //   t.integer	:package_category_id
    //   t.integer	:package_id
			var url = host + '/schedules.json?callback=JSON_CALLBACK&location_id='+location_id+'&package_id='+paramsSlot+'&format=json';
			console.log(url);
    	$http.postp(url).then(function(data, status) {
				if(data.status===200){
		  		console.log(data);
		  		d.resolve(data.data);
		  		
		  	}
		  	else {
		  		d.reject(data);
		  	}
			});
			return d.promise;  
		}
	};
	return saveDetails;
});	

projectTehOAis.service('getLocations', function($http, $q) {
	var host = 'http://localhost:3000';

 	var getAllLocations= {
 	
 		myLocation: function(){
 			console.log("in here locations");
 			var d= $q.defer();
			var url = host + '/locations.json?callback=JSON_CALLBACK&format=json';
			console.log(url);
    	$http.jsonp(url).then(function(data, status) {
				if(data.status===200){
		  		console.log(data);
		  		d.resolve(data.data);
		  		
		  	}
		  	else {
		  		d.reject(data);
		  	}
			});
			return d.promise;  
		}
	};
	return getAllLocations;
});	

projectTehOAis.service('getSelectedPackages', function($http, $q) {
	var host = 'http://localhost:3000';

 	var getPackagesBySelection = {
 	
 		packagesBySelection: function(perlocation){
 			console.log("in here packages by selection");
 			var d= $q.defer();
			var url = host + '/packages.json?service_id=1&location_id='+perlocation+'&format=json';
			console.log(url);
    	$http.post(url).then(function(data, status) {
				if(data.status===200){
		  		console.log(data);
		  		d.resolve(data.data);
		  		
		  	}
		  	else {
		  		d.reject(data);
		  	}
			});
			return d.promise;  
		}
	};
	return getPackagesBySelection;
});	
	
// projectTehOAis.service('getMonthCalendar', function() {
	
//  	var getMonthNumber = {
 	
//  		monthNumber: function(start, packagesdata){
//  			console.log("here in calendar month");
//  			console.log("starthere: "+ start);
//  			console.log("packagehere: "+packagesdata);
//  			start.setDate(packagesdata);
// 			while (start.getDay() !== packagesdata) {
//       	start.setDate(start.getDate() + 1);
//   	 	}
//   	 		return start;
//   	 		//console.log("startDate: " + start); 
// 		}
// 	};
// 	return getMonthNumber;
// });
	


