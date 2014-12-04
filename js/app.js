$(document).ready(function(){

	//handle custom dropdown behavior
	$('.dropdown-toggle').dropdown();
	$('#pipelines li').on('click', function() {
	    $('#pipeline-title').html($(this).find('a').html() + " <span class='caret'>");
	});

	//init date picker
	$('#today').datepicker().on('changeDate', function(ev) {
		$('#today').datepicker('hide');
	});

	//close datepicker when clicking a date

	
	//handle calendar icon click
	$('#today').siblings(".input-group-addon").click(function(){
		$('#today').datepicker('show');
	})
});