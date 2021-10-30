window.onload = function() {

  //llamar mis clases
  const bg = new Background(canvas.width,canvas.height)
  const flappy = new Flappy(20,40,30,30)

  document.getElementById("start-button").onclick = function() {
    startGame();
  };

  function startGame() {
    requestId = requestAnimationFrame(update)
  }

  function gameOver(){}

  function update(){
    frames ++;
    // limpiar el canvas
    ctx.clearRect (0,0, canvas.width,canvas.height)
    bg.draw()
    flappy.draw()
  
    if (requestId){
      requestId = requestAnimationFrame(update)
      
    }
  }

};
