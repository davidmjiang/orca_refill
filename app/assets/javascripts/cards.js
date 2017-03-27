/* jshint strict: false, asi: true, esversion:6 */
$(document).ready(function(){
	$(".card-name").on('ajax:success', function(e){
		console.log("Clicked!");
		let id = e.target.attr('data-id');
		$(`.card-details[data-id=${id}]`).slideToggle();
	})
});