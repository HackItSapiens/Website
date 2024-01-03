const scroll = new LocomotiveScroll({
    el: document.querySelector('#main'),
    smooth: true
});

console.log("helloo")

let lt = document.getElementById('lt');
let lm = document.getElementById('lm');
let dt = document.getElementById('dt');
let dm = document.getElementById('dm');
let dd = document.getElementById('dd');
let ddt = document.getElementById("ddt");
let lg = document.getElementById("logo");

window.addEventListener('scroll', function(){
    let value = window.scrollY;
    lt.style.top = value * 0.25 + 'py';
    dd.style.top = value * 1.25 + 'px';
    lg.stylle.top = value*1.25 +'py';
})

function footMouseFollower(){
    window.addEventListener('mousemove', function(){
        this.document.querySelector('#fim').style.transform = `translate(${dets.clientX}px , ${dets.clientY}px)`;
    })
}