// JavaScript Document

/* hamburger menu */
var $btnMenu = $('.btn_menu');

$btnMenu.click(function(){
	$('.horizontal_nav').toggleClass('show_menu');	
})

/* hover state */
$('.item .info').hide();

$('.item').hover(function () {
	$(this).find('img').css('opacity','0.5');
    $(this).find('.info').show();
	
}, function () {
	$(this).find('img').css('opacity','1');
    $(this).find('.info').hide();
	
});

