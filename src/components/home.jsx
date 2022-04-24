import React from 'react'
function Home() {
    return (
       
            <div className='home' >
            <div className='mainText'>
            <h1 className='hi'>Hi, I'm <span className='name'>Nikita</span>.</h1>
            <h1>I'm a Front-end Developer.</h1>
            </div>
            <button className='lookWork'>View my work <img src={require('../img/arrow.png')} className='arrow' alt="arrow" /></button>
            </div>
        
    )
}

export default Home
