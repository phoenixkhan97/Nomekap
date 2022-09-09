const canvas = document.getElementById("canvas")
const c = canvas.getContext('2d')
canvas.width = 1024
canvas.height = 576


c.fillStyle = "white"
c.fillRect(0,0,canvas.width,canvas.height)

const background = new Image()
background.src = ""

const player = new Image()
player.src = ""

image.onload = () => {
    c.drawImage(background)
    //cropping and actual location of sprite
    c.drawImage(player, 0,
                        0,
                        player.width / 4,
                        player.height,
                        canvas.width / 2 - player.width / 4 / 2,
                        canvas.height /2 - player.height / 2,
                        player.width / 4,
                        player.height
                        
)
} 

window.addEventListener('keydown',()=>{
    
})
