// Van a ir las clases
const canvas = document.getElementById("canvas")
const ctx = canvas.getContext("2d")


class Background{
    // constructor 
    constructor(w,h){

        this.x = 0
        this. y = 0
        this.width= w
        this.height = h
        this.image= new Image()
        this.image.src= "../imsges/bg.png"//./ es en el mismo nivel ../ salte 1 nivel

    }

    // metodos
    draw(){
        //para que el background se mueva

        if(this.x<-canvas.width){
            this.x = 0
        }
        this.x --;
        


        //dibujar la imagen
        ctx.drawImage(this.image,this.x,this.y,this.width,this.height)
        ctx.drawImage(this.image,
            this.x + this.width, 
            this.y,
            this.width,
            this.height)

    }

    gameOver (){

    }

}