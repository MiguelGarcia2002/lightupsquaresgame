import React, { forwardRef } from 'react'

const Gamebutton = forwardRef(({square, className ,onClick, text}, ref) =>(
    <button 
    square = {square}
    className={className} onClick={onClick} 
    ref = {ref}> {text}  </button>
    
) )
export default Gamebutton