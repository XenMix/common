
var us = ["XenMix", "DE4THROW", "ZAKtw"];
var side = 0;

if (typeof jQuery != 'undefined'){
    console.log("jQuery library is loaded!");
} else
{
    console.log("jQuery library is not found!");
}

if (document.location.href.toString().indexOf("room") != -1)
{
	for (var i = 0 ; i < 5 ; i++) {
		var plys = document.getElementsByClassName('player-content');
		var str = plys[i].innerHTML;
		console.log('oki');
		str = str.split("</a>");
		str = str[0].split(">");
		if( jQuery.inArray(str[1], us) != -1 )
		{
			side = 5;
			break;
		}
	}
	for (var i = side ; i < 5 + side ; i++) {
		var plys = document.getElementsByClassName('player-content');
		var str = $(plys[i]).find(".nickname").html();
		str = str.split("</a>");
		str = str[0].split(">");
		$(plys[i]).find(".clearfix").append('<div style="position: relative;width: 50px;height: 50px"><iframe scrolling="no" src="https://www.faceit.com/players/'+str[1]+'/csgo" class="level_ifrm"></iframe>');
	}
}