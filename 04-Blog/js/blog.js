$(document).ready(function() {
    
    $('.blog_paper3 >p').click(function () {
      $('.blog_paper3 >p').removeClass('nav_btn_active');
      $(this).addClass('nav_btn_active');
    });
    $('.blog_paper2 >p').click(function () {
      $('.blog_paper2 >p').removeClass('nav_btn_active');
      $(this).addClass('nav_btn_active');
    });
    $('.blog_bottom_btn p').click(function () {
      $('.blog_bottom_btn p').removeClass('btn_active');
      $(this).addClass('btn_active');
    });
  });