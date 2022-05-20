const titreSpans = document.querySelectorAll('h1 span');
const btn = document.querySelector('.btn-first');
const l1 = document.querySelector('.l1');
const l2 = document.querySelector('.l2');
const header = document.querySelector('h2');
const cont_canvas = document.querySelector('.anim_can')





window.addEventListener('load', () =>{
    const TL = gsap.timeline({paused:true});
    TL
    .staggerFrom(titreSpans, 1,{top:-50, opacity:0, ease:"power2.out"}, 0.3)
    .from(btn, 2,{left:-300, opacity:0, ease:"power2.out"}, '-=1')
    .from(l1, 2, {width: 0, ease:"power2.out"}, '-=2')
    .from(l2, 2, {width: 0, ease:"power2.out"}, '-=2')
    .staggerFrom(header, 2, {bottom: -100, opacity:0, ease:"power2.out"}, 0.3, '-=1');
    //.staggerFrom(cont_canvas, 1, {right:-50, ease:"power2.out"}, 0.3);
    


    TL.play();
}) 

var canvas = document.getElementById("canvas");
var ctx = canvas.getContext('2d');

canvas.width = 300;
canvas.height = 230;



var x = 75;
var z = 225;
var v = 3;


function anim(){
    requestAnimationFrame(anim);
    console.log("hello");
    ctx.clearRect(0,0,canvas.width,canvas.height);
    ctx.beginPath();
    ctx.arc(x,100,30,0,2*Math.PI);
    ctx.fillStyle = '#f1f1f1';
    ctx.strokeStyle = '#f1f1f1';    
    ctx.fill();
    ctx.stroke();


    ctx.clearRect(500,500, canvas.width,canvas.height);
    ctx.beginPath();
    ctx.arc(z,175,30,0,2*Math.PI);
    ctx.fillStyle = '#f1f1f1';
    ctx.strokeStyle = '#f1f1f1';    
    ctx.fill(); 
    ctx.stroke();


    if ((x + 30 > canvas.width ||x - 30 < 0) && (z + 10 < canvas.width || z - 30 > 0)) {
      v = -v;        
    }

    x+=v;
    z-=v;

   

}
anim();
