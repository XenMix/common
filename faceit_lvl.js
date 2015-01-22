var CurrPage = "";
var side = 0;

function CreateLevelTxt(offleft, offtop, level, name, i)
{
	$.get('https://api.faceit.com/api/nicknames/'+name, function(data) {
		$('body').append('<div id="seek_iframe_'+i+'" class="level_ifrm" style="z-index: 999;overflow: hidden; font-size: 30px; position: absolute; width:50px; height:50px; color:red; left:'+offleft+'px; top:'+offtop+'px">'+data.payload.csgo_skill_level_label+'</div>');
	});
}

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
			var offleft = parseInt($(plys[i]).offset().left) + 15;
			var offtop = parseInt($(plys[i]).offset().top) + 10;
			CreateLevelTxt(offleft, offtop, str, i);
		}
	}
}

$(window).resize(function() {

	if (typeof $($('.badge')[side]).attr("src") != "undefined")
	{
		for (var i = side ; i < 5 + side ; i++) {
			var plys = document.getElementsByClassName('player-content');
			var offleft = parseInt($(plys[i]).offset().left) + 15;
			var offtop = parseInt($(plys[i]).offset().top) + 10;
			$('#seek_iframe_'+i).css('left', offleft);
			$('#seek_iframe_'+i).css('top', offtop);
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