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
    c.drawImage(player, 0,0)
} 