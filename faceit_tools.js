setInterval(function() {

	var iframes = document.getElementsByClassName('level_ifrm');
	if (typeof iframes[0] == "undefined")
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
				$('body').('<div style="z-index: 999;overflow: hidden; position: absolute; width:50px; height:50px; left:'+$(plys[i]).offset().left+'px; top:'+ (parseInt($(plys[i]).offset().top) + 10) +'px"><iframe style="position: relative;left: -586px;bottom:405px;height: 550px;" width="700px" height="512px" scrolling="no" src="https://www.faceit.com/players/'+str+'/csgo" class="level_ifrm"></iframe>');
			}
		}
	}
}, 5000);