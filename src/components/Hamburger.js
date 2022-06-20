import React from 'react'

const Hamburger = ( { color, text, onClick} ) => {
    return (
        <div className='btnDiv'>
            <button
                onClick={onClick}
                style={{backgroundColor: color}}
                className='btn'
            >
                {text}    
            </button>
        </div>
    )
}

Hamburger.defaultProps = {
    color: 'steelblue',
    text: 'WAWAWAWEEWA',
}

export default Hamburger
