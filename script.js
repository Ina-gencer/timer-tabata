const tabata = document.querySelector('h4');
tabata.addEventListener('mouseover', function() {
    document.querySelector('.info').style.display = 'block';
})

gsap.from('h1', {
    y: -400,
    opacity:0,
    duration:2,
    delay: 0.7
})
gsap.from('h3', {
    opacity:0,
    duration:5,
    delay:1.9
})
gsap.from('h2', {
    opacity:0,
    duration:5,
    delay:2.9
})
 gsap.from('.container', {
     opacity:0,
     duration:1,
     delay:0.7
 })
let move = 100;
gsap.from('.anim', {
    opacity:0,
    duration:1.5,
    delay:3.7,
    x: function(i) {
        if(i%2 === 1)
        return -move
        else
        return move
    }
})
gsap.from('h4', {
    opacity:0,
    y: 300,
    delay:4.4,
    duration:2
})
