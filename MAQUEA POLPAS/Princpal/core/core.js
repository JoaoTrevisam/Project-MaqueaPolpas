function Get_Cookie(a) {
	var e = document.cookie.split(";"),
		o = "",
		l = "",
		t = "";
	for (t = 0; t < e.length; t++) {
		if (o = e[t].split("="), o[0].replace(/^\s+|\s+$/g, "") == a) return !0, o.length > 1 && (l = decodeURI(o[1].replace(/^\s+|\s+$/g, ""))), l;
		o = null, ""
	}
	return null
}

function Set_Cookie(a, e, o, l, t, i) {
	var d = new Date;
	d.setTime(d.getTime()), o && (o = 1e3 * o * 60 * 60 * 24);
	var r = new Date(d.getTime() + o);
	document.cookie = a + "=" + encodeURI(e) + (o ? ";expires=" + r.toGMTString() : "") + (l ? ";path=" + l : "") + (t ? ";domain=" + t : "") + (i ? ";secure" : "")
}

function Delete_Cookie(a, e, o) {
	Get_Cookie(a) && (document.cookie = a + "=" + (e ? ";path=" + e : "") + (o ? ";domain=" + o : "") + ";expires=Thu, 01-Jan-1970 00:00:01 GMT")
}

function __box(){
	var func = "";
	var args = new Array("","","","","","");
	for (var i = 0; i < arguments.length; i++) {
		if(i == 0){
			func = "__" + arguments[i];
		} else if(i == 1){
			var args = arguments[i];
		} else {
			args[i] = arguments[i];
		}
	}
	if(typeof window[func] !== 'undefined' && $.isFunction(window[func])){
		window[func](args);
	}
}


jQuery.loadScript = function(a, e) {
	var o = document.createElement("script");
	o.src = a, o.onload = e, document.head.appendChild(o);
};
var obMediaAd = "", obMediaLeg = "", modeMediaAd = "";