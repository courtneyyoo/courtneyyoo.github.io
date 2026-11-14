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


$('[data-filter]').click(function (e) {
	e.preventDefault();
	var f = $(this).data('filter');
	$('[data-filter]').removeClass('on');
	$('[data-filter="' + f + '"]').addClass('on');
	$('.item').each(function () {
		$(this).toggle(f === 'all' || $(this).data('cat') === f);
	});
	$('.horizontal_nav').removeClass('show_menu');
});
