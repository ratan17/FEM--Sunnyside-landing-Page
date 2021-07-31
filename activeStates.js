var navbarButton = document.querySelectorAll("nav.navbar ul.navbar-nav li.nav-item>a[type=button]")[0];

// applying click event for all LEARN MORE LINKS inside features section
for (var i = 0 ; i < 2; i++){
  document.querySelectorAll(".features-link")[i].addEventListener("click", underlineActiveState);
}

function underlineActiveState(){
  if (this.parentElement.classList.contains("transform-text")){
    document.querySelectorAll(".transform-text .underline")[0].style.backgroundColor = "hsl(51, 100%, 49%)";
    setTimeout( function (){document.querySelectorAll(".transform-text .underline")[0].style.backgroundColor = "hsl(51, 100%, 80%)"}, 200 );
  } else { document.querySelectorAll(".stand-out-text .underline")[0].style.backgroundColor = "hsl(7, 99%, 70%)";
            setTimeout(function (){document.querySelectorAll(".stand-out-text .underline")[0].style.backgroundColor = "hsl(7, 99%, 90%)"}, 200 );                                                                            }
}

// applying click event for all social media icons inside footer
for (var i = 0; i <= 3; i++){
  document.querySelectorAll("footer .social-media-icons svg")[i].addEventListener("click",socialIconsActiveState);
}

function socialIconsActiveState(){
  this.querySelectorAll("path[fill]")[0].setAttribute('fill','#fff');
}
