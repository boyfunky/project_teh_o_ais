$(function() {
	$('#calendar').fullCalendar({
		header: {
			left: 'prev,next today',
			center: 'title',
			right: 'month,agendaWeek,agendaDay'
			
		},
		selectable: true,

		events: '/submit_event '
		
	});
});


$(function () {
	$('#datetimepicker1').datetimepicker();
});

$(function () {
	$('#datetimepicker2').datetimepicker();
});
