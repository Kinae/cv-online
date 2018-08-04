Date.prototype.toLocaleFormat = Date.prototype.toLocaleFormat || function(pattern) {
  return pattern.replace(/%Y/g, this.getFullYear()).replace(/%m/g, (this.getMonth() + 1)).replace(/%d/g, this.getDate());
};

var lowOpacity = 0.4;
var highOpacity = 0.8;



$(document).ready(function(){
  var date = new Date(document.lastModified);
  var lang = navigator.language;

  $('.progress-bar[data-toggle="tooltip"]').tooltip({
    animated: 'fade',
    placement: 'bottom'
  });

  if (lang == "hu"){
    $("#language-hu").css("opacity", highOpacity);
    $("#language-en").css("opacity", lowOpacity);
    $("#lastupdate").html(date.toLocaleFormat('%Y-%m-%d'));
  }else{
    $("#language-hu").css("opacity", lowOpacity);
    $("#language-en").css("opacity", highOpacity);
    $("#lastupdate").html(date.toLocaleFormat('%m-%d-%Y'));
  }

  $("#language-en").click(function(){
    lang = "en-US";
    document.l10n.requestLocales('en-US');
    $("#language-hu").css("opacity", lowOpacity);
    $("#language-en").css("opacity", highOpacity);
    $("#lastupdate").html(date.toLocaleFormat('%m-%d-%Y'));
  });

  $("#language-hu").click(function(){
    lang = "hu";
    document.l10n.requestLocales('hu');
    $("#language-hu").css("opacity", highOpacity);
    $("#language-en").css("opacity", lowOpacity);
    $("#lastupdate").html(date.toLocaleFormat('%Y-%m-%d'));
  });
});
