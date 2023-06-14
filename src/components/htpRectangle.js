import React from 'react'
import '../Styles/HowToPlay.sass'

//Declaration of props
export const HtpRectangle = ({
        title = "",
        text = "",
        square = "",
    }) => {
    return(
        <div className='textContainer'>
            <div className='textHalf'>
                <h2 className='header'> {title} </h2>
                <p className='paragraph'> {text} </p>
            </div>

            <div className='squarehalf'>
                <div> {square} </div>
            </div>
        </div>
    )
}
