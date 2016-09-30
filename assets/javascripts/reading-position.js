$(document).on('ready', function() {  
  var winHeight = $(window).height(), 
  docHeight = $(".main-container").height(),
  progressBar = $('progress'),
  max, value;

  /* Set the max scrollable area */
  max = docHeight - winHeight;
  progressBar.attr('max', max);

  if(docHeight > (winHeight * 1.5)){
    $(document).on('scroll', function(){
    value = $(window).scrollTop();
    progressBar.attr('value', value);
    });
  }
});