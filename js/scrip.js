	$('#check').click(function(event) {
		if(!$("#menuchek").prop("checked") || $(document).width() > 945){
		$('.navmenu').css({'display':'block'});
		$('.navmenu').css({'height':'auto'});
	} else if ($("#menuchek").prop("checked") && $(document).width() < 945){
		$('.navmenu').css({'display':'none'});
		$('.navmenu').css({'height':'0px'});
	}
	});
	setInterval(checkwidth, 400);
	
	function checkwidth(){
		if($(document).width() > 944){
		$('.navmenu').css({'display':'block'});
		$('.navmenu').css({'height':'auto'});
	}
	}
	
$('.fa-angle-left').click(function(){
		leftclick();
	});

$('.fa-angle-right').click(function(){
		rightclick();
	});


function leftclick(){
	var obj = $('.spantext').children('div');
		for(var i = 0; i < obj.length; i++){
			var clas =  obj[i].className;
			if($('.'+clas).css('display') == 'block'){
				var value = clas[1];
				var valuemin1 = clas[1] - 1;
			}
		}		
				var ignoreval = 't' + value;
				$('.'+ignoreval).css({'position':'absolute'});
				$('.'+ignoreval).animate({
							left:'1000px',
							opacity: '0'
								}, 800);
				if(valuemin1 < 1){
					valuemin1 = 3;
				} else if(valuemin1 > 3){
					valuemin1 = 1;
				}
				var res = 't'+valuemin1;
				$('.'+res).css({'position':'static',
								 'display':'block'})
				$('.'+res).animate({
							left:'0px',
							opacity:'1'
								}, 800);
				$('.'+ignoreval).css({'display':'none'});
}

function rightclick(){
	var obj = $('.spantext').children('div');
		for(var i = 0; i < obj.length; i++){
			var clas =  obj[i].className;
			if($('.'+clas).css('display') == 'block'){
				var value = clas[1];
				
				var valuemin1 = +clas[1] + 1;
				
			}
		}		
				var ignoreval = 't' + value;
				$('.'+ignoreval).css({'position':'absolute'});
				$('.'+ignoreval).animate({
							left:'1000px',
							opacity: '0'
								}, 800);
				if(valuemin1 < 1){
					valuemin1 = 3;
				} else if(valuemin1 > 3){
					valuemin1 = 1;
				}
				var res = 't'+valuemin1;
				
				$('.'+res).css({'position':'static',
								 'display':'block'})
				$('.'+res).animate({
							left:'0px',
							opacity: '1'
								}, 800);
				$('.'+ignoreval).css({'display':'none',
			});
}

setInterval(rightclick, 6000);


$('#myModal').on('shown.bs.modal', function () {
  $('#myInput').trigger('focus')
})



