function limit(element)
{
    var max_chars = 4;

    if(element.value.length > max_chars) {
        element.value = element.value.substr(0, max_chars);
    }
}
/*限制4位数字输入*/



$.fn.center = function () {
  this.css("position","absolute");
  this.css("top", Math.max(0, (
    ($(window).height() - $(this).outerHeight()) / 2) + 
     $(window).scrollTop()) + "px"
  );
  this.css("left", Math.max(0, (
    ($(window).width() - $(this).outerWidth()) / 2) + 
     $(window).scrollLeft()) + "px"
  );
  return this;
}

$("#overlay").show();
$("#overlay-content").show().center();

setTimeout(function(){    
  $("#overlay").fadeOut();
}, 5000);
/*开机画面停留*/



function openNav() {
    document.getElementById("mySidenav").style.width = "250px";
}

function closeNav() {
    document.getElementById("mySidenav").style.width = "0";
}


/*侧面出菜单*/