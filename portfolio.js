let menu = document.querySelector('#menu-btn');
let header = document.querySelector('.header');

menu.onclick = () =>{
    menu.classList.toggle('fa-times');
    header.classList.toggle('active');
}
        var typed = new Typed(.typedText, {
                    strings: [ "Frontend Freelancer", "Blogger", "Content Creator" ],
                    typeSpeed: 150,
                    reverseSpeed: 150,
                    loop: true
        });


let themeToggler = document.querySelector('#theme-toggler');

themeToggler.onclick = () =>{
    themeToggler.classList.toggle('fa-sun');
  if(themeToggler.classList.contains('fa-sun')){
  document.body.classList.add('active');
   }else{
     document.body.classList.remove('active');
   }
}
