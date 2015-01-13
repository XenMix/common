setTimeout(function() {

	var us = ["XenMix", "DE4THROW", "ZAKtw"];
	var side = 0;
	
	console.log('Loaded');

	if (document.location.href.toString().indexOf("room") != -1)
	{
		for (var i = 0 ; i < 5 ; i++) {
			var plys = document.getElementsByClassName('player-content');
			console.log('ok('+i+'): ' + plys[i]);
			var str = plys[i].innerHTML;
			str = str.split("pushstate");
			str = str[0].split(">");
			str = str[1].split("<");
			if( jQuery.inArray(str[0], us) != -1 )
			{
				side = 5;
				break;
			}
		}
		for (var i = side ; i < 5 + side ; i++) {
			var plys = document.getElementsByClassName('player-content');
			var str = plys[i].innerHTML;
			str = str.split("pushstate");
			str = str[0].split(">");
			str = str[1].split("<")
			$(plys[i]).find(".clearfix").append('<div style="position: relative;width: 50px;height: 50px"><iframe scrolling="no" src="https://www.faceit.com/players/'+str[1]+'/csgo" class="level_ifrm"></iframe>');
		}
	}
}, 1000);