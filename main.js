$(window).mousemove(function (event) {
  $("#two").css({
    "margin-left": -(event.pageX * 0.05),
    "margin-right": +(event.pageX * 0.05),
    "margin-top": -(event.pageY * 0.05),
    "margin-bottom": +(event.pageY * 0.05),
  });
});
