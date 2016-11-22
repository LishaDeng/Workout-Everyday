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
    document.getElementById("mySidenav").style.width = "100%";
}

function closeNav() {
    document.getElementById("mySidenav").style.width = "0";
}


/*侧面出菜单*/



function alertSet(e) {
    document.getElementById("js-alert-box").style.display = "block",
    document.getElementById("js-alert-head").innerHTML = e;
    var t = 45,
    n = document.getElementById("js-sec-circle");
    document.getElementById("js-sec-text").innerHTML = t,
    setInterval(function() {
        if (0 == t){
      location.href="#";//#时间到后跳转地址
    }else {
            t -= 1,
            document.getElementById("js-sec-text").innerHTML = t;
            var e = Math.round(t / 45 * 735);
            n.style.strokeDashoffset = e - 735
        }
    },
    970);
}
alertSet('');
/*倒计时*/



function openGIFImage() {
    document.getElementById("myGIFImage").style.width = "100%";
}

function closeGIFImage() {
    document.getElementById("myGIFImage").style.width = "0";
}
/*打开图片*/

function openGIF() {
    document.getElementById("myGIF").style.width = "100%";
}

function closeGIF() {
    document.getElementById("myGIF").style.width = "0";
}
/*打开GIF*/