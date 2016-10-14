$(document).on('ready', function() {  
  var winHeight = $(window).height();
  var docHeight = $(".main-container").height();
  var progressBar = $('progress');

  var max = docHeight - winHeight;
  progressBar.attr('max', max);

  if (docHeight > (winHeight * 1.5)) {
    $(document).on('scroll', function() {
      var value = $(window).scrollTop();
      progressBar.attr('value', value);
    });
  }
});