$('.galimg').find('img').each(function(e) {

if (this.width > this.height) {

	$(this).addClass('landscape');
}

else {

	$(this).addClass('portrait');
}

});

var divW = $('.galimg').width(); 

$('img').each(function(){
    $(this).height(divW);
});