var modW= $('.galimg').width(500);
var modW= $('.galimg').height(500);

$('.gallery').find('.galimg').each(function(e) {

if (this.width > this.height) {

	$(this).addClass('landscape');
}

else {

	$(this).addClass('portrait');
}

});

