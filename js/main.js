$('.gallery').find('.galimg').each(function(e) {

if (this.width > this.height) {

	$(this).addClass('landscape');
}

else {

	$(this).addClass('portrait');
}

});