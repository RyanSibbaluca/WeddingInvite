$('.tabs a').click(function(e){
  e.preventDefault();

  var className = $(this).attr('rel');
  $('.tabs-content .active').removeClass('active');
  $('.tabs-content .' + className).addClass('active');


  $('.tabs .active').removeClass('active');
  $('.tabs .' + className).addClass('active');
});
