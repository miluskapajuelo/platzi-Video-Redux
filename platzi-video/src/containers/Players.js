import React from 'react'

function Players() {
    return (
        <div className='player'>
            <video constrols autoPlay>
                <source src="" type='video/mp4'/>
            </video>
            <div className='player-back'>
                <button className='button'>
                    Regresar
                </button>
            </div>
            
        </div>
    )
}

export default Players
