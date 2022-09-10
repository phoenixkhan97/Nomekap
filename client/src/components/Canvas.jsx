
// import React from 'react'
// import PropTypes from 'prop-types'

// const Canvas = ({draw, height, width}) => {
    
//   const canvas = React.useRef()

//   React.useEffect(() => {


//   const canvasAct = document.querySelector('canvas')
//   const c = canvas.current.getContext('2d')

//     c.fillRect(0, 0, width, height) 
//     c.drawImage(canvasAct, 0, 0, width, height)

//     const backgroundImage = new Image()
//     backgroundImage.src =
//       "https://i.imgur.com/j2sxTnH.png"

//     backgroundImage.onload = () => {
//       c.drawImage(backgroundImage, 0, 0)
//     }


//      draw(c);
//   }, [draw, height, width])
// return (
//     <canvas ref={canvas}  />
//   );
// };
// Canvas.propTypes = {
//   draw: PropTypes.func.isRequired,
//   height: PropTypes.number.isRequired,
//   width: PropTypes.number.isRequired,
// };
// export default Canvas


const canvas = document.querySelector('canvas')
const c = canvas.getContext('2d')

canvas.width = 700
canvas.height = 500


c.fillRect(0,0, canvas.width, canvas.height)

const image = new Image()
image.src = 'https://trello.com/1/cards/6311783a9ba65701ec2f5e68/attachments/631cc701edb36c00d3c10cdc/download/map.png' 
console.log(image)

const playerImage = new Image()
playerImage.src = 'https://trello.com/1/cards/631178477dd4e701bff9b9a1/attachments/631c04ab1454ea02068b2475/download/runspriteDown.png'


image.onload = () => {
    c.drawImage(image,0,0, canvas.width, canvas.height)
    c.drawImage(playerImage,
        0,
        0,
        playerImage.width / 4,
        playerImage.height,
        70 ,
        450,
        playerImage.width / 4,
        playerImage.height)
}









