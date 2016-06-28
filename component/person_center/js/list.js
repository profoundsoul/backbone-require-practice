$('.checkboxlist label').click(function(){
	$(this).toggleClass('act');
	$(this).find('i').toggleClass('check')
})