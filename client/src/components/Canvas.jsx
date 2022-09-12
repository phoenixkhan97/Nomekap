
const canvas = document.querySelector('canvas')
const c = canvas.getContext('2d')


canvas.width = 700
canvas.height = 550


c.fillRect(0,0, canvas.width, canvas.height)

const image = new Image()
image.src = 'https://trello.com/1/cards/6311783a9ba65701ec2f5e68/attachments/631cea8d5b2acc025f6ad7bc/download/map.png' 
console.log(image)

const playerImage = new Image()
playerImage.src = 'https://trello.com/1/cards/631178477dd4e701bff9b9a1/attachments/631c04ab1454ea02068b2475/download/runspriteDown.png'
console.log(playerImage)

class Character{
    constructor({position,velocity,image,frame = {max:1}}){
        this.position = position
        this.velocity = velocity
        this.image = image
        this.frame = {...frame,value:0}
    }

    draw(){
        c.drawImage(this.image,this.position.x,this.position.y)
    }
}

const background = new Character({
    position:{
        x:-200,
        y:-2320,
    },
    image: image
})

const key = {
    w:{
        pressed:false
    },
    a:{
        pressed:false
    },
    s:{
        pressed:false
    },
    d:{
        pressed:false
    }
}
const animation = ()=>{
    window.requestAnimationFrame(animation)
    background.draw()
    c.drawImage(playerImage,
        40,
        0,
        playerImage.width / 4,
        playerImage.height,
        200,
        250,
        playerImage.width / 4,
        playerImage.height)

 if (key.w.pressed)
    background.position.y = background.position.y += 5
    else if (key.a.pressed)
    background.position.x = background.position.x += 5
    else if (key.s.pressed)
    background.position.y = background.position.y -= 5
    else if (key.d.pressed)
    background.position.x = background.position.x -= 5
 
    
}
animation()

window.addEventListener("keydown",(e)=>{
  switch(e.key){
     case "w":
           key.w.pressed = true
        break
        case "a":
            key.a.pressed = true
        break
        case "s":
            key.s.pressed = true
        break
        case "d":
            key.d.pressed = true
        break
  }
  console.log(key)
})

window.addEventListener("keyup",(e)=>{
    switch(e.key){
       case "w":
             key.w.pressed = false
          break
          case "a":
              key.a.pressed = false
          break
          case "s":
              key.s.pressed = false
          break
          case "d":
              key.d.pressed = false
          break
    }
    console.log(key)
  })






