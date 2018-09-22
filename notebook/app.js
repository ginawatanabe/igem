$(document).ready(function(){
  let textCont = $('.notebook-content_text-container')
  let scrollCont = $('.notebook_content-container');
  let weekTitles = $('.notebook-entry_intro h1');
  let positions = [];

  //Show the first entry.
  textCont.first().css('display', 'flex');

  let listItem = $('.notebook_side-container li');

  weekTitles.each(function(){
    let pos = $(this).offset().top - 530;
    positions.push(pos);
  })

  listItem.click(function(event){

    $('body, html').animate({
      scrollTop: "500px"
    },800,);

    scrollCont.animate({
      scrollTop: positions[$(this).index('.notebook_side-container li')] + "px"
    })

    listItem.css('font-weight','normal');
    listItem.css('background-color', 'white');

    $(this).css('font-weight','bold');
    $(this).css('background-color', 'rgb(220,220,220)');
  })

  //If in Viewport, return TRUE
  $.fn.isInViewport = function() {
    var elementTop = $(this).offset().top;
    var elementBottom = elementTop + $(this).outerHeight();
    var viewportTop = $(window).scrollTop();
    var viewportBottom = viewportTop + $(window).height();
    return elementBottom > viewportTop && elementTop < viewportBottom;
  };

  scrollCont.scroll(function() {
    console.log(scrollCont.scrollTop());
    $('.notebook-entry_intro h1').each(function(){
      if($(this).isInViewport()) {

        listItem.css('font-weight','normal');
        listItem.css('background-color', 'white');

        listItem.eq($(this).index('.notebook-entry_intro h1')).css('font-weight','bold');
        listItem.eq($(this).index('.notebook-entry_intro h1')).css('background-color', 'rgb(220,220,220)');
      }
    })
  });
})
