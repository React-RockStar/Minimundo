$(document).ready(function() {
    
    $('.post_content_paper2 >p').click(function () {
      $('.post_content_paper2 >p').removeClass('nav_btn_active');
      $(this).addClass('nav_btn_active');
    });
    $('.post_content_paper3 >p').click(function () {
      $('.post_content_paper3 >p').removeClass('nav_btn_active');
      $(this).addClass('nav_btn_active');
    });
  });