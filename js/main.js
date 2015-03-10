jQuery(document).ready(function($){
	$('.disabled').click(function (e) {e.preventDefault()});
	$('[href^=#]').click(function (e) {e.preventDefault()});
	$("[data-toggle=tooltip]").tooltip();
	$("[data-toggle=popover]").popover();
	$('<button type="button" class="close" data-dismiss="alert" aria-hidden="true">&times;</button>').prependTo('div.alert-dismissable');
});