let timerID ;
const play = document.querySelector('.play');
const stopBtn = document.querySelector('.stop');

play.addEventListener('click', function() {
    document.querySelector('#player').play();
    play.style.pointerEvents = 'none';
    timerID = setInterval(calculateTime, 1000);
})

stopBtn.addEventListener('click', function(){
    stopTimer();
    document.querySelector('#player').pause();
})   

const timer = 4;
let amountTime = timer * 60 + 9;

function calculateTime() {
    const startTime = document.querySelector('.startTime');
    let min = Math.floor(amountTime / 60);
    let sec = amountTime % 60;
    if(sec < 10) {
        sec = "0" + sec;
    }
    if(amountTime <= 246){
        document.querySelector('.text').textContent = "ГОТОВИМСЯ...";
    }
   

    if(amountTime <= 240){
        document.querySelector('.text').textContent = "ОТЖИМАНИЯ";
        document.querySelector('#box').style.backgroundColor = 'rgb(6, 70, 53, 0.9)';
        document.querySelector('#box').classList.add('color');
        document.querySelector('.display').innerHTML = "<span>01 /</span>  8";
    }

  if(amountTime <= 220){
        document.querySelector('.text').textContent = "ОТДЫХАЕМ";
        document.querySelector('#box').style.backgroundColor = 'rgb(223, 46, 46, 0.9)';
        document.querySelector('.display').innerHTML = "<span>01 /</span>  8";
    }

   if(amountTime <= 210){
        document.querySelector('.text').textContent = "ПРИСЕДАНИЯ";
        document.querySelector('#box').style.backgroundColor = 'rgb(6, 70, 53, 0.9)';
        document.querySelector('.display').innerHTML = "<span>02 /</span>  8";
     
    }

     if(amountTime <= 190){
        document.querySelector('.text').textContent = "ОТДЫХАЕМ";
        document.querySelector('#box').style.backgroundColor = 'rgb(223, 46, 46, 0.9)';
        document.querySelector('.display').innerHTML = "<span>02 /</span>  8";

    }

   if(amountTime <= 180){
        document.querySelector('.text').textContent = "ПОДТЯГИВАНИЕ УЗКИМ ХВАТОМ";
        document.querySelector('.display').innerHTML = "<span>03 /</span>  8";
        document.querySelector('#box').style.backgroundColor = 'rgb(6, 70, 53, 0.9)';

    }

   if(amountTime <= 160){
        document.querySelector('.text').textContent = "ОТДЫХАЕМ";
        document.querySelector('.display').innerHTML = "<span>03 /</span>  8";
        document.querySelector('#box').style.backgroundColor = 'rgb(223, 46, 46, 0.9)';
    }
    if(amountTime <= 150){
        document.querySelector('.text').textContent = "БЕГ С ВЫСОКОПОДНЯТЫМИ КОЛЕНКАМИ";
        document.querySelector('.display').innerHTML = "<span>04 /</span>  8";
        document.querySelector('#box').style.backgroundColor = 'rgb(6, 70, 53, 0.9)';
    }

    if(amountTime <= 130){
        document.querySelector('.text').textContent = "ОТДЫХАЕМ";
        document.querySelector('.display').innerHTML = "<span>04 /</span>  8";
        document.querySelector('#box').style.backgroundColor = 'rgb(223, 46, 46, 0.9)';
    }
     if(amountTime <= 120){
        document.querySelector('.text').textContent = "БЕРПИ С ОТЖИМАНИЕМ";
        document.querySelector('.display').innerHTML = "<span>05 /</span>  8";
        document.querySelector('#box').style.backgroundColor = 'rgb(6, 70, 53, 0.9)';
    }

    if(amountTime <= 100){
        document.querySelector('.text').textContent = "ОТДЫХАЕМ";
        document.querySelector('.display').innerHTML = "<span>05 /</span>  8";
        document.querySelector('#box').style.backgroundColor = 'rgb(223, 46, 46, 0.9)';
    }
    if(amountTime <= 90){
        document.querySelector('.text').textContent = "ПРИСЕДАНИЯ + ПРЫЖКИ";
        document.querySelector('.display').innerHTML = "<span>06 /</span>  8";
        document.querySelector('#box').style.backgroundColor = 'rgb(6, 70, 53, 0.9)';

    }

    if(amountTime <= 70){
        document.querySelector('.text').textContent = "ОТДЫХАЕМ";
        document.querySelector('.display').innerHTML = "<span>06 /</span>  8";
        document.querySelector('#box').style.backgroundColor = 'rgb(223, 46, 46, 0.9)';
    }
      if(amountTime <= 60){
        document.querySelector('.text').textContent = "ПЛАНКА-ПАУК";
        document.querySelector('.display').innerHTML = "<span>07 /</span>  8";
        document.querySelector('#box').style.backgroundColor = 'rgb(6, 70, 53, 0.9)';
    }

      if(amountTime <= 40){
        document.querySelector('.text').textContent = "ОТДЫХАЕМ";
        document.querySelector('.display').innerHTML = "<span>07 /</span>  8";
        document.querySelector('#box').style.backgroundColor = 'rgb(223, 46, 46, 0.9)';
    }
      if(amountTime <= 30){
        document.querySelector('.text').textContent = "ВЫПАДЫ";
        document.querySelector('.display').innerHTML = "<span>08 /</span>  8";
        document.querySelector('#box').style.backgroundColor = 'rgb(6, 70, 53, 0.9)';
    }

      if(amountTime <= 10){
        document.querySelector('.text').textContent = "ОТДЫХАЕМ";
        document.querySelector('.display').innerHTML = "<span>08 /</span>  8";
        document.querySelector('#box').style.backgroundColor = 'rgb(223, 46, 46, 0.9)';
    }
   

    else {
        sec = sec;
      }

    startTime.textContent = `${min} : ${sec}`;
    amountTime--; 

    if(amountTime < 0) {
        amountTime = 0;
    }
    else{
        amountTime = amountTime;
    }
}
function stopTimer() {
    clearInterval(timerID);
 }

  //animation
  gsap.from('#box', {
    opacity: 0,
    delay: .5,
    duration: 1,
    x: -500
})
gsap.from(".text, .startTime, .random, .display", {
    opacity: 0,
    delay: .9,
    duration: 1,
    x: 500,
    stagger:0.5
})

let move = 40;
gsap.from('.anim', {
    opacity:0,
    duration:1.5,
    delay:2.7,
    y: function(i) {
        if(i%2 === 1)
        return -move
        else
        return move
    }
})
