var plys = document.getElementsByClassName('player-content');
var us = ["XenMix", "DE4THROW", "ZAKtw"];
var side = 0;

if (typeof jQuery != 'undefined') {
 
    alert("jQuery library is loaded!");
 
}else{
 
    alert("jQuery library is not found!");
 
function LevelIframe(id, name)
{
	$(id).find(".clearfix").append('<div style="level_ifrm_base"><iframe scrolling="no" src="https://www.faceit.com/players/'+name+'/csgo" class="level_ifrm"></iframe>');
}

if (document.location.href.toString().indexOf("room") != -1)
{
	for (var i = 0 ; i < 5 ; i++) {
		var str = $(plys[i]).find(".nickname").html();
		str = str.split("</a>");
		str = str[0].split(">");
		if( jQuery.inArray(str[1], us) != -1 )
		{
			side = 5;
			break;
		}
	}
	for (var i = side ; i < 5 + side ; i++) {
		var str = $(plys[i]).find(".nickname").html();
		str = str.split("</a>");
		str = str[0].split(">");
		LevelIframe(plys[i],str[1]);
	}
}
