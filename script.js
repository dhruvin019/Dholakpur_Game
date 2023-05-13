/*obstacleani*/
let flag = true;     
let score = 0;

audio = new Audio('music.mp3');
audiogo = new Audio('gameover.mp3');
  
setTimeout(() => {
    audio.play();
}, 100);

document.onkeydown = function(e){
    console.log(e.key);
    if(e.key=="ArrowUp")
    {
        bheem = document.querySelector('.bheem');
        bheem.classList.add('animatebheem');
        setTimeout(() =>{
            bheem.classList.remove('animatebheem')
        }, 1000);
    }
    else if(e.key=="ArrowRight")
    {
        bheem = document.querySelector('.bheem');
        dx = parseInt(window.getComputedStyle(bheem,null).getPropertyValue('left'));
        bheem.style.left = dx + 112+"px";
    }
    else if(e.key=="ArrowLeft")
    {
        bheem = document.querySelector('.bheem');
        dx = parseInt(window.getComputedStyle(bheem,null).getPropertyValue('left'));
        bheem.style.left = dx - 112+"px";
    }
}

setInterval(() =>{
    bheem = document.querySelector('.bheem');
    buffalow = document.querySelector('.buffalow');
    gameover = document.querySelector('.gameover');
    yourscore = document.querySelector('.yourscore');

    dx = parseInt(window.getComputedStyle(bheem,null).getPropertyValue('left'));
    dy = parseInt(window.getComputedStyle(bheem,null).getPropertyValue('top'));
    
    ox = parseInt(window.getComputedStyle(buffalow,null).getPropertyValue('left'));
    oy = parseInt(window.getComputedStyle(buffalow,null).getPropertyValue('top'));

    distancex = Math.abs(dx-ox);
    distancey = Math.abs(dy-oy);

    if(distancex<93 && distancey<52)
    {
        buffalow.classList.remove('buffalowani');
        gameover.innerHTML = "Game Over"
        audiogo.play();
        setTimeout(() => {
            audiogo.pause();
            audio.pause();
        }, 1000);
    }
    else if((distancex< 145) && flag){
        flag = false;
        score+=1;
        yourscore.innerHTML = "Your Score: " + score
        setTimeout(() => {
           flag=true; 
        }, 1000);        
    }
},100);         /*500*/
