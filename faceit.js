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
			$(plys[i]).find('div').append('<div style="position: absolute; width:50px; height:50px;"><iframe width="50px" height="50px" scrolling="no" src="https://www.faceit.com/players/'+str[1]+'/csgo" class="level_ifrm"></iframe>');
		}
	}
}, 1000);