setInterval(function() {

	var iframes = document.getElementsByClassName('level_ifrm');
	if (typeof iframes[0] == "undefined" )
	{
		var plys = document.getElementsByClassName('player-content');
		var us = ["XenMix", "DE4THROW", "ZAKtw"];
		var side = 0;

		if (document.location.href.toString().indexOf("room") != -1)
		{
			for (var i = 0 ; i < 5 ; i++) {
				var str = $(plys[i]).data('nickname');
				if( jQuery.inArray(str, us) != -1 )
				{
					side = 5;
					break;
				}
			}
			for (var i = side ; i < 5 + side ; i++) {
				var plys = document.getElementsByClassName('player-content');
				var str = $(plys[i]).data('nickname');
				var offleft = parseInt($(plys[i]).offset().left) + 10; 
				$('body').append('<div style="z-index: 999;overflow: hidden; position: absolute; width:50px; height:50px; left:'+offleft+'px; top:'+ $(plys[i]).offset().top +'px"><iframe style="position: relative;left: -595px;bottom:405px;height: 550px;" width="700px" height="512px" scrolling="no" src="https://www.faceit.com/players/'+str+'/csgo" class="level_ifrm"></iframe>');
			}
		}
	}
	else if ((document.location.href.toString().indexOf("room") != -1 && typeof $('.badge').first().attr('src') != "undefined") || document.location.href.toString().indexOf("room") == -1)
	{
		for (var i = 0 ; i < iframes.lenght ; i++) {
			$(iframes[i]).remove();
		}
	}
}, 1000);