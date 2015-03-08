'use strict';

angular.module('letsSchedulecommyApp')
	.service('cleaningService', function($http, $q) {
		var host = 'http://localhost:3000';

	 	var getService = {
	 	
	 		myService: function(){
	 			console.log("in here service");
	 			var d= $q.defer();
				var url = host + '/packages.json?callback=JSON_CALLBACK'+'&format=json';
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
		return getService;
	});	
	
angular.module('letsSchedulecommyApp')
	.service('getMonthCalendar', function() {
	
	 	var getMonthNumber = {
	 	
	 		monthNumber: function(start, packagesdata){
	 			 console.log("here in calendar month");
	 			console.log("starthere: "+ start);
	 			 console.log("packagehere: "+packagesdata);
	 			start.setDate(packagesdata);
 					while (start.getDay() !== packagesdata) {
        		start.setDate(start.getDate() + 1);
    	 		}
    	 		return start;
    	 		//console.log("startDate: " + start); 
			}
		};
		return getMonthNumber;
	});
	
	angular.module('letsSchedulecommyApp')
	.service('getpackagedataArray', function() {
		console.log("packageDatArray");
		var date = new Date();
    var d = date.getDate();
    var m = date.getMonth();
    var y = date.getFullYear();
    var packagesdata;
		var packageData = {
			packageDataArray: function(packages){
				var objectDataArray = [];
    	 var i =0;
    	 var key = 0;
    	 
    	 while (key < packages.length )
    	 {
    	 	packagesdata = {
    	 		year: y,
    	 		month: m, 
    	 		count: packages[key].count,
    	 		day: packages[key].day_id, 
    	 		start_hour: new Date(packages[key].start_time).getUTCHours(),
    	 		start_minute: new Date(packages[key].start_time).getUTCMinutes(),
    	 		end_hour: new Date(packages[key].end_time).getUTCHours(),
    	 		end_minute: new Date(packages[key].end_time).getUTCMinutes()
    	 	};
    	 	//console.log(packagesdata);
    	 	objectDataArray[key++] = packagesdata;
    	 }
    	 console.log("objectDataArray");
    	 console.log(objectDataArray);
    	 return objectDataArray;
			} 
		};
		return packageData;
});
		//var getMonth;
	//	var geteventData;
		//var pushEvents;
