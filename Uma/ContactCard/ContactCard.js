function attachHandlers(about){
	$('#showdata a').on("click", function(){
		alert(about);
		console.log(about);
		$(this).parent().children('p').text(about);
	});
}

$(document).ready(function(){
	$('form').on("submit", function(){
		var fname = $("input[name='fname']").val();
		var lname = $('input[name="lname"]').val();
		var about = $('textarea[name="describe"]').val();
		$('#showdata').append("<p>"+fname+" "+lname+"</p><br><a target='#'>Click for description!</a>");
		attachHandlers(about);
	});

});