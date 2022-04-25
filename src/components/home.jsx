import React from 'react'
function Home() {
    const smoothScroll = (e) => {
            e.preventDefault()
            const blockID = e.target.getAttribute('href')
            document.querySelector('' + blockID).scrollIntoView({
                behavior: "smooth",
                block: "start"
            })
    }
    return (
       
            <div className='home element-animationOpasiti'  >
            <div className='mainText '>
            <h1 className='hi'>Hi, I'm <span className='name'>Nikita</span>.</h1>
            <h1>I'm a Front-end Developer.</h1>
            </div>
            <a href='#about' onClick={smoothScroll} className='lookWork' >View my work <img src={require('../img/arrow.png')} className='arrow' alt="arrow" /></a>  
            </div>
        
    )
}

export default Home
