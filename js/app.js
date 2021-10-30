// Van a ir las clases


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

        ctx.font = "80px Impact"
        ctx.fillText = ("Te moriste mi rey!",250,200)

    }

}

class Flappy {
    constructor(x,y,w,h){
        this.x = x
        this. y = y
        this.width= w
        this.height = h
        this.vy = 2 // gravity
        this.userPull= 0; //gravity
        this.image= new Image()
        this.image.src = "../images/flappy.png"

    }
    
    // metodos
    draw(){
        // validad gravedad

        ctx.drawImage(this.image,
            this.x,
            this.y,
            this.width,
            this.height)



        //dibujar


    }
    
    collision(item){

        return(
            this.x < item.x + item.width &&
            this.x + this.width > item.x && 
            this.y < item.y + item.height &&
            this.y + this.height > item.y 

        )



    }
}