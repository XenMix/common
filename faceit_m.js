setTimeout(function() {
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
			$(plys[i]).children('div').first().append('<div style="overflow: hidden; position: absolute; width:50px; height:50px;"><iframe style="position: relative;left: 500px;height: -50px;" width="700px" height="512px" scrolling="no" src="https://www.faceit.com/players/'+str+'/csgo" class="level_ifrm"></iframe>');
		}
	}
}, 1000);