var flag = true;
  function select() {
    var x = document.getElementById("header_img1");
    var y = document.getElementById("header_img2");
    if(flag==true){
      x.style.display = "none";
      y.style.display = "block";
    }
    else{
      y.style.display = "none";
      x.style.display = "block";
    }
    flag=!flag;
  }
  function highlight_cart(){
    cart.src = "images/cart_hover.png";
  }
  function unhighlight_cart(){
    cart.src = "images/cart.png";
  }
  function highlight_ticket(){
    ticket.src = "images/ticket_hover.png";
  }
  function unhighlight_ticket(){
    ticket.src = "images/ticket.png";
  }
  function highlight_mobile(){
    mobile_ticket.src = "images/ticket_hover.png";
  }
  function unhighlight_mobile(){
    mobile_ticket.src = "images/red_ticket.png";
  }

console.log(window.innerWidth);


function changeImageSrc() {
  if( window.innerWidth < 768 ) {
    header_img1.src = "./images/header_img1.png";
    title_line.src = "./images/titleLine.png";
    bottom_line.src = "./images/accross_line.png";
    first_icon.src = "./images/appstore_icon.png";
    second_icon.src = "./images/googleplay_icon.png";
    document.getElementById("content1").style.backgroundImage = "url('./images/adventure_tower_1.png')";
    document.getElementById("content2").style.backgroundImage = "url('./images/blog_tower_1.png')";
    document.getElementById("content3").style.backgroundImage = "url('./images/content3_1.png')";
    // document.getElementById("myDiv").style.backgroundImage = "url('img_tree.png')";
    // document.getElementById("myDiv").style.backgroundImage = "url('img_tree.png')";
  }
  else{
    first_icon.src = "./images/googleplay_icon.png";
    second_icon.src = "./images/appstore_icon.png";
    header_img1.src = "./images/header_background1.png";
    title_line.src = "./images/title_line.png";
    bottom_line.src = "./images/adventure_bottomline.png";
    document.getElementById("content1").style.backgroundImage = "url('./images/adventure_tower.png')";
    document.getElementById("content2").style.backgroundImage = "url('./images/blog_tower.png')";
    document.getElementById("content3").style.backgroundImage = "url('./images/content3.png')";
  }
}

window.onresize = changeImageSrc;


$(document).ready(function(){
  $('.owl-carousel').owlCarousel({
    loop:true,
    margin:10,
    nav:true,
    navText: ["<img src='./images/back_btn.png'>","<img src='./images/next_btn.png'>"],
    autoWidth:true,
    responsive:{
        0:{
            items:1
        },
        600:{
            items:1
        },
        1000:{
            items:1
        }
    }
  });

    $(window).scroll( function(){
      var cindex = 0;
      $('.gradual_fadein').each( function(i){
          var bottom_of_object = $(this).offset().top + $(this).outerHeight();
          var bottom_of_window = $(window).scrollTop() + $(window).height();
          if( bottom_of_window > bottom_of_object ){            
              cindex++;
              var $this = $(this);
              setTimeout(function(){ 
                $this.animate({'opacity':'1'},500);
              }, 300 * cindex);
          }
      });
      $('.general_fadein').each( function(i){
        var bottom_of_object = $(this).offset().top + $(this).outerHeight();
        var bottom_of_window = $(window).scrollTop() + $(window).height();
        if( bottom_of_window > bottom_of_object ){            
              $(this).animate({'opacity':'1'},1000);
        }
    }); 
    });
    
  // $('.mobile_navmenu').click(function (e) {
  //   if (e.target == this) {
  //     $('.nav-button').click();
  //   }    
  // });
  $('.fa-close').click(function (e) {
      $('.nav-button').click();
  });
});
var i=0;
function showMenu(){
  i++;
  if(i%2==1){
  }
  else{
    document.getElementById('header_menu').setAttribute("style","width:unset;border-radius: 0px 0px 8px 8px;margin-left:unset");
    document.getElementById('header_logo').setAttribute("style","display:block !important");
  }
}
$(document).ready(function() {
  $('.blog_btn').click(function () {
      $('.blog_btn').removeClass('btn_active');
      $(this).addClass('btn_active');
  });
  $('.blog_footer_btn').click(function () {
    $('.blog_footer_btn').removeClass('btn_active');
    $(this).addClass('btn_active');
  });
  $('.adventure_btn').click(function () {
    $('.adventure_btn').removeClass('btn_active');
    $(this).addClass('btn_active');
  });
  $('.emailbox_btn').click(function () {
    $('.emailbox_btn').removeClass('btn_active');
    $(this).addClass('btn_active');
  });
  $('.nav a').click(function () {
    $('.nav a').removeClass('nav_btn_active');
    $(this).addClass('nav_btn_active');
  });
  $('.footer_link').click(function () {
    $('.footer_link').removeClass('nav_btn_active');
    $(this).addClass('nav_btn_active');
  });
  $('.social_icon').click(function () {
    $('.social_icon').removeClass('nav_btn_active');
    $(this).addClass('nav_btn_active');
  });
});