//The higher value, the slower display speed.
//This value must be larger than 0.
const TYPING_SLOWNESS_RATE = 15;

$(function(){
  var $tsArea = $("#type-scroller-area");
  var $tsMessage = $("#type-scroller-message");
  var prompt = "<span id='prompt'>\> </span>";
  var cursor = "<span id='cursor' />";

  $tsArea.html(prompt + cursor);
  $tsArea.css({
    "position": "fixed",
    "width": "100%"
  })

  $(window).scroll(function(){
    var charactersNum = Math.round($(this).scrollTop() / TYPING_SLOWNESS_RATE);
    $tsArea.html(prompt + $tsMessage.text().substring(0, charactersNum) + cursor);
    $tsMessage.css("visibility", "visible");
  });
});
