$('#buttonStart').click( function () {
  $('#startScreen').fadeOut(1050);
});
$('.popup-buttons a').click( function(){
    $('.hide').fadeOut(500);
    $( $(this).attr('href') ).fadeIn(750);
});
$('.btn-close').click(
  function(){
    $(this).closest('.content-box').fadeOut(500);
  }
);
