function set_lgpd(){
    var d = new Date();
    d.setTime(d.getTime() + (365 * 24 * 60 * 60 * 1000));
    var expires = "expires=" + d.toUTCString();
    var paths = "/";
    // document.cookie = "__lgpd=" + d + "; " + expires + ";path=" + paths + ";SameSite=None;Secure";
    document.cookie = "__lgpd=" + d + "; " + expires + ";path=" + paths + ";";
    jQuery("#cookie-banner-lgpd").addClass("cookie-banner-lgpd-hidden");
}