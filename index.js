var myVar;
var click;

function loaderClick() {
  click = document.getElementById("loading");
  click.addEventListener("click", myFunction);
}

function myFunction() {
 
  click.classList.add('fade-out');


  setTimeout(function() {
    click.style.display = 'none';
    document.getElementById('all').style.display = 'block';
  }, 1700);
}


window.addEventListener('scroll', reveal);

function reveal(){
  var reveals = document.querySelectorAll('.reveal');

  for(var i =0; i<reveals.length; i++){
    var windowheight = window.innerHeight;
    var revealtop = reveals[i].getBoundingClientRect().top;
    var revealpoint =150;

    if(revealtop < windowheight - revealpoint){
      reveals[i].classList.add('active');
    }else{
      reveals[i].classList.remove('active');
    }
  }
}

