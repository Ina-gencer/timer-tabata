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

let timerID ;
const play = document.querySelector('.play');
const stopBtn = document.querySelector('.stop');

play.addEventListener('click', function() {
    document.querySelector('#player').play();
    play.style.pointerEvents = 'none';   //делает кнопку неактивной
    timerID = setInterval(calculateTime, 1000);
})

stopBtn.addEventListener('click', function(){
    stopTimer();
    document.querySelector('#player').pause();
})   

const timer = 4;
let amountTime = timer * 60 + 10;

function calculateTime() {
    const startTime = document.querySelector('.startTime');
    let min = Math.floor(amountTime / 60);
    let sec = amountTime % 60;
    if(sec < 10) {
        sec = "0" + sec;
    }
    if(amountTime <= 250){
        document.querySelector('.text').textContent = "ГОТОВИМСЯ...";
    }
    if(amountTime <= 243){
        document.querySelector('.text').textContent = "НАЧИНАЕМ ЧЕРЕЗ 3...";

    }
    if(amountTime <= 242){
        document.querySelector('.text').textContent = "НАЧИНАЕМ ЧЕРЕЗ 2...";

    }
    if(amountTime <= 241){
        document.querySelector('.text').textContent = "НАЧИНАЕМ ЧЕРЕЗ 1...";

    }

    if(amountTime <= 240){
        document.querySelector('.text').textContent = "ПРИСЕДАНИЯ";
        document.querySelector('.text').classList.add('green');
        document.querySelector('.display').innerHTML = "<span>01 /</span>  8";
    }

  if(amountTime <= 220){
        document.querySelector('.text').textContent = "ОТДЫХАЕМ";
        document.querySelector('.text').classList.remove('green');
        document.querySelector('.text').classList.add('red');
        document.querySelector('.display').innerHTML = "<span>01 /</span>  8";
      
    }

   if(amountTime <= 210){
        document.querySelector('.text').textContent = "ОТЖИМАНИЯ";
        document.querySelector('.text').classList.remove('red');
        document.querySelector('.text').classList.add('green');
        document.querySelector('.display').innerHTML = "<span>02 /</span>  8";
    }

     if(amountTime <= 190){
        document.querySelector('.text').textContent = "ОТДЫХАЕМ";
        //document.querySelector('#box').style.backgroundColor = '#F90716';
        document.querySelector('.text').classList.remove('green');
        document.querySelector('.text').classList.add('red');
        document.querySelector('.display').innerHTML = "<span>02 /</span>  8";

    }

   if(amountTime <= 180){
        document.querySelector('.text').textContent = "ПОДНИМАНИЕ НОГ ЛЁЖА";
        document.querySelector('.display').innerHTML = "<span>03 /</span>  8";
        document.querySelector('.text').classList.remove('red');
        document.querySelector('.text').classList.add('green');

    }

   if(amountTime <= 160){
        document.querySelector('.text').textContent = "ОТДЫХАЕМ";
        document.querySelector('.display').innerHTML = "<span>03 /</span>  8";
        document.querySelector('.text').classList.remove('green');
        document.querySelector('.text').classList.add('red');
    }
    if(amountTime <= 150){
        document.querySelector('.text').textContent = "БЕГ С ВЫСОКОПОДНЯТЫМИ КОЛЕНКАМИ";
        document.querySelector('.display').innerHTML = "<span>04 /</span>  8";
        document.querySelector('.text').classList.remove('red');
        document.querySelector('.text').classList.add('green');
    }

    if(amountTime <= 130){
        document.querySelector('.text').textContent = "ОТДЫХАЕМ";
        document.querySelector('.display').innerHTML = "<span>04 /</span>  8";
        document.querySelector('.text').classList.remove('green');
        document.querySelector('.text').classList.add('red');
    }
     if(amountTime <= 120){
        document.querySelector('.text').textContent = "ВЕЛОСИПЕД";
        document.querySelector('.display').innerHTML = "<span>05 /</span>  8";
        document.querySelector('.text').classList.remove('red');
        document.querySelector('.text').classList.add('green');
    }

    if(amountTime <= 100){
        document.querySelector('.text').textContent = "ОТДЫХАЕМ";
        document.querySelector('.display').innerHTML = "<span>05 /</span>  8";
        document.querySelector('.text').classList.remove('green');
        document.querySelector('.text').classList.add('red');
    }
    if(amountTime <= 90){
        document.querySelector('.text').textContent = "ПРИСЕДАНИЯ + ПРЫЖКИ";
        document.querySelector('.display').innerHTML = "<span>06 /</span>  8";
        document.querySelector('.text').classList.remove('red');
        document.querySelector('.text').classList.add('green');

    }

    if(amountTime <= 70){
        document.querySelector('.text').textContent = "ОТДЫХАЕМ";
        document.querySelector('.display').innerHTML = "<span>06 /</span>  8";
        document.querySelector('.text').classList.remove('green');
        document.querySelector('.text').classList.add('red');

    }
      if(amountTime <= 60){
        document.querySelector('.text').textContent = "ПРЫЖКИ В ПЛАНКЕ С РАЗВЕДЕНИЕМ НОГ";
        document.querySelector('.display').innerHTML = "<span>07 /</span>  8";
        document.querySelector('.text').classList.remove('red');
        document.querySelector('.text').classList.add('green');
    }

      if(amountTime <= 40){
        document.querySelector('.text').textContent = "ОТДЫХАЕМ";
        document.querySelector('.display').innerHTML = "<span>07 /</span>  8";
        document.querySelector('.text').classList.remove('green');
        document.querySelector('.text').classList.add('red');
    }
      if(amountTime <= 30){
        document.querySelector('.text').textContent = "ОБРАТНЫЕ ОТЖИМАНИЯ ";
        document.querySelector('.display').innerHTML = "<span>08 /</span>  8";
        document.querySelector('.text').classList.remove('red');
        document.querySelector('.text').classList.add('green');
    }

      if(amountTime <= 10){
        document.querySelector('.text').textContent = "ОТДЫХАЕМ";
        document.querySelector('.display').innerHTML = "<span>08 /</span>  8";
        document.querySelector('.text').classList.remove('green');
        document.querySelector('.text').classList.add('red');
    }
    // else if(amountTime <= 10){
    //     document.querySelector('.text').textContent = "планка-паук";
    // }

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

 
