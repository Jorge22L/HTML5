window.addEventListener('load', init);

function init()
{
    var canvas = document.getElementById('c');

    var ctx = canvas.getContext('2d');
   /*  ctx.fillStyle='rgb(200,50,50)';
    ctx.fillRect(100,100,200,200);
    ctx.strokeRect(300,300,200,200); */

    ctx.beginPath();
    ctx.arc(400,400,100,0,7);
    ctx.fill();
    console.log(ctx);
}