"use strict";

  // gnb가 왼쪽에서 나옴
  $('.gnb_btn').click(function(){
    $('#gnb').animate({right : 0}, 500, 'swing');
    $('.dark').css({'display': 'block'});
  });
  
  //gnb사라짐
  $('.dark').click(function(){
    $('.dark').css({'display': 'none'});
    $('#gnb').animate({right : -243}, 500, 'swing');
    $('.login_popup').hide();
  });
  
  
  // gnb에서 서브메뉴 슬라이드
  $('.btn_sub').click(function(){
    $(this).find('span').toggleClass('on');
    $(this).siblings('.list_sub_wrap').slideToggle(1000);
  });
  

  
  const $user = document.querySelector('.info_login u');
  const $gnb_btn = document.querySelector('.gnb_btn');
  
  const $username = localStorage.getItem('username');
  const $userid = $username.split('@');
  
  $gnb_btn.addEventListener('click', function(e){
    $user.innerText = $userid[0];
  });

  const $logout = document.querySelector('.login a');
  $logout.addEventListener('click', ()=>{
    localStorage.removeItem('username');
  })