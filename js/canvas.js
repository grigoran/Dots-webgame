let canvas=document.querySelector(".canvas");
let context=canvas.getContext('2d');
let lastTime=Date.now();
let deltaTime=0;

requestAnimationFrame(redraw);

function redraw(){
    deltaTime=Date.now()-lastTime;
    lastTime=Date.now();
    context.clearRect(0, 0, canvas.width, canvas.height);
    
    requestAnimationFrame(redraw);
}