$(document).ready(function(){
	$('form').submit(function(){
		var fname = $("input[name='fname']").val();
		var lname = $('input[name="lname"]').val();
		var email = $('input[name="email"]').val();
		var contact = $('input[name="contact"]').val();
		$('tbody').append("<tr><td>"+fname+"</td><td>"+lname+"</td><td>"+email+"</td><td>"+contact+"</td></tr>");
		return false
	});
});