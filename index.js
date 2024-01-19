// const scroll1 = new LocomotiveScroll({
//     el: document.querySelector(''),
//     smooth: true
// });

var myVar;

function loaderClick(){
  
}

function myFunction(){
  myVar = setTimeout(onclick , 1000);
}

function onclick() {
  document.getElementById('loading').style.display = 'none';
  document.getElementById('all').style.display = 'block';
}

// document.addEventListener('DOMContentLoaded', () => {
//   const sections =document.querySelectorAll('section');

//   const handleIntersection =(entries) =>{
//     entries.map(entry =>{

//       const head = document.target.querySelectorAll(h1);

//       const tl = gsap.timeline();
//       tl.fromTo(head,{yPercent:150, opacity:0, duration:0.3 },{yPercent:0, opacity:1, duration:0.3 },0)

//       if(entries.isIntersecting){
//         tl.play()
//       }else{
//         tl.reverse(0)
//       }
//     })
//   }

//   const Observer = new IntersectionObserver(handleIntersection,{
//     threshold: 0.5
//   })

//   sections.forEach(element => Observer.observe(section))
// })

const h = document.getElementsByClassName(".ah");

// gsap.registerPlugin(ScrollTrigger);


// gsap.from(".ah",{
//   ScrollTrigger:".ah",
//   y:100,
//   opacity:0,
//   duration:8
// })

// gsap.to(".ah",{
//   ScrollTrigger:{
//     trigger:".ah",
//     start: "top center",
//     markers:true,
//     toggleActions:"restart none reverse none"
//   },
//   y: 0,
//   opacity:1,
//   delay:1,
//   duration:8
// })

// let tl = gsap.timeline({
//   scrollTrigger: {
//     trigger: '.ah',
//     start:'top center',
//     end: 'bottom center',
//     restart:true,
//     scrub: true,
//     markers:false
//   }
// })

// tl.fromTo('.ah',{yPercent:150, opacity:0, duration:1 },{yPercent:0, opacity:1, duration:1 },0)



// const lenis = new Lenis()

// lenis.on('scroll', (e) => {
//   console.log(e)
// })

// function raf(time) {
//   lenis.raf(time)
//   requestAnimationFrame(raf)
// }

// requestAnimationFrame(raf)

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

window.addEventListener('scroll', reveal1);

function reveal1(){
  var reveals1 = document.querySelectorAll('.reveal1');

  for(var i =0; i<reveals1.length; i++){
    var windowheight = window.innerHeight;
    var revealtop = reveals1[i].getBoundingClientRect().top;
    var revealpoint =150;

    if(revealtop < windowheight - revealpoint){
      reveals1[i].classList.add('active');
    }else{
      reveals1[i].classList.remove('active');
    }
  }
}