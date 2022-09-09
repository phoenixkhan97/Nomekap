import React from "react"
import PropTypes from "prop-types"



const Canvas = ({draw, height, width}) =>{
    const canvas = React.useRef()
    React.useEffect(()=>{
        const context = canvas.current.getContext("2d")
        context.fillStyle = "white"
        context.fillRect(0,0, canvas.width, canvas.height)
        draw(context)
    })

 
    return(
        <canvas ref={canvas} height = {height} width = {width}/>
    )
}

Canvas.PropTypes = {
    draw: PropTypes.func.isRequired,
    height: PropTypes.number.isRequired,
    width: PropTypes.number.isRequired
}

export default Canvas