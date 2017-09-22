$('.tabs a').click(function(e){
  e.preventDefault();

  var className = $(this).attr('rel');
  var other = className === 'bridesmaid' ? 'groomsmen' : 'bridesmaid';


  $('.tabs-content .' + other + ' .person').each(function(i) {
    setTimeout(function(){
      $('.tabs-content .' + other + ' .person').eq(i).removeClass('enter');
      // $('.tabs-content .' + other + ' .person').eq(i).addClass('exit');
    }, 200 * (i+1));
  });

  $('.tabs-content .active').removeClass('active');
  $('.tabs-content .' + className).addClass('active');

  $('.tabs-content .' + className + ' .person').each(function(i) {
    setTimeout(function(){
      // $('.tabs-content .' + className + ' .person').eq(i).removeClass('exit');
      $('.tabs-content .' + className + ' .person').eq(i).addClass('enter');
    }, 200 * (i+1));
  });


  $('.tabs .active').removeClass('active');
  $('.tabs .' + className).addClass('active');
});


$(window).scroll(function(){
  var wScroll = $(this).scrollTop();

  // entourage enter frame
  if(wScroll > $('#entourage').offset().top - $(window).height() / 1.2) {
    console.log('enter entourage');
    $('.tabs-content .active .person').each(function(i) {
      setTimeout(function(){
        $('.tabs-content .active .person').eq(i).addClass('enter');
      }, 200 * (i+1));
    });
  }

  // registries enter frame
  if(wScroll > $('.registries').offset().top - $(window).height() / 1.2) {
    $('.registries .column').each(function(i) {

      setTimeout(function(){
        $('.registries .column').eq(i).addClass('enter');
      }, 200 * (i+1));
    });

    // $('.registries .column').css({
    //   'transform': 'translate(0px, ' + wScroll/2 + '%)'
    // });
  }
});
