/*var globalId;

function loop(){
  var div = document.createElement('div');
  div.setAttribute("id", "frame");
  document.querySelector('#container').appendChild(div)
  globalId = requestAnimationFrame(loop);
}

var start = document.querySelector('#start')
start.addEventListener('click',function(){
    globalId = requestAnimationFrame(loop);
});

var stop = document.querySelector('#stop')
stop.addEventListener('click',function(){
    cancelAnimationFrame(globalId);
});*/

var box = document.querySelector('#box');
box.addEventListener('click',function(){
    box.style.transform = 'translateX(100px)';
    
});