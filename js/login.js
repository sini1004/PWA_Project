"use strict";


const $loginId = document.getElementById('LOGIN_ID');
const $loginPw = document.getElementById('LOGIN_PW');
const $loginBtn = document.getElementById('LOGIN_BTN');


// $loginId.addEventListener('keyup', color);
$loginPw.addEventListener('keyup', color);
$loginBtn.addEventListener('click',moveToMain);


function color() {
  if(($loginId.value.length>0 && $loginId.value.indexOf("@")!==-1) 
    && $loginPw.value.length>=5){
    $loginBtn.style.backgroundColor = "#4498f2";
    $loginBtn.disabled = false;
  }else{
    $loginBtn.style.backgroundColor = "#4498f2";
    $loginBtn.disabled = true;
  }
}

function moveToMain(){
  location.replace("./main.html");
}


function onChange(e){
  localStorage.setItem('username', $loginId.value);
}
