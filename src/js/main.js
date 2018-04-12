import './vendor';

let $stat = 'play';

$('.header__play-btn').on('click', () => {
	if ($stat === 'play') {
		$('.header__background').trigger('pause');
		$stat = 'pause';
		$('.header__play-btn-stop').addClass('header__play-btn-play');
		$('.header__play-btn-play').removeClass('header__play-btn-stop');
	}
	else {
		$('.header__background').trigger('play');
		$stat = 'play'
		$('.header__play-btn-play').addClass('header__play-btn-stop');
		$('.header__play-btn-stop').removeClass('header__play-btn-play');
}
});

$(function(){

    $('.menuToggle').on('click', function() {
       $('.menu').slideToggle(300, function(){
            if( $(this).css('display') === "none"){
                $(this).removeAttr('style');
            }
       });

    });

});