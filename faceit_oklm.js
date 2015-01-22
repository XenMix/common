var CurrPage = "";
var side = 0;

function OnPageSwitch()
{
	if (CurrPage.indexOf("room") == -1 && $('.level_ifrm')[0])
	{
		$('.level_ifrm').remove();
		return false;
	}
	
	var MyName = $($('.nickname')[0]).find('a').html();
	var plys = $('.player-content');

	for (var i = 0 ; i < 5 ; i++)
	{
		var str = $(plys[i]).data('nickname');
		if( str == MyName )
		{
			side = 5;
			break;
		}
	}
		
	if (typeof $($('.badge')[side]).attr("src") == "undefined")
	{
		for (var i = side ; i < 5 + side ; i++) {
			var plys = document.getElementsByClassName('player-content');
			var str = $(plys[i]).data('nickname');
			var offleft = parseInt($(plys[i]).offset().left) + 10; 
			$('body').append('<div style="z-index: 999;overflow: hidden; position: absolute; width:50px; height:50px; left:'+offleft+'px; top:'+ $(plys[i]).offset().top +'px"><iframe style="position: relative;left: -595px;bottom:405px;height: 550px;" width="700px" height="512px" scrolling="no" src="https://www.faceit.com/players/'+str+'/csgo" id="seek_iframe_'+i+'" class="level_ifrm"></iframe>');
		}
	}
}

$(window).resize(function() {

	if (typeof $($('.badge')[side]).attr("src") != "undefined")
	{
		for (var i = side ; i < 5 + side ; i++) {
			var plys = document.getElementsByClassName('player-content');
			var offleft = parseInt($(plys[i]).offset().left) + 10; 
			$('#seek_iframe_'+i).css('left', offleft);
		}
	}

});

setInterval(function() {

	if (CurrPage != document.location.href.toString())
	{
		CurrPage = document.location.href.toString();
		setTimeout(function (){ OnPageSwitch(); }, 2000);
	}
	else if (CurrPage.indexOf("room") != -1 && typeof $($('.badge')[side]).attr("src") != "undefined")
		$('.level_ifrm').remove();

}, 500);