import React from 'react'
import Percentages from './percentages'

function About() {
   
   

    return (
        <div className='about ' id='about'>
            <h1 className='txtAbout element-animationOpasiti'>ABOUT</h1>
            
            <div className='informMe element-animationLeft'>
                <img className='meFoto' src={require('../img/Group 1.png')} alt="this is me" />
                <h3>Who is this person?</h3>
                <p >I am studying in Rostov, I plan to develop seriously in IT, I am looking for a Frontend developer vacancy, <a  target="_blank" href="https://t.me/Nikitalsa">contact me</a>.</p>
            </div>
            <Percentages/>
            <h1 className='txtFun element-animationOpasiti'>Web is fun</h1>
            <h1 className='txtFunExp element-animationOpasiti'>EXPERIMENTS & OPEN SOURCE</h1>
            <div className='webFun element-animationOpasiti' >
                <div className='fun ' ><a target="_blank" href="https://nikit099.github.io/album/"><img className='webElem1' src={require('../img/album.gif')} alt="albumGif" /></a> </div>
                <div className='fun ' > <a target="_blank" href="https://nikit099.github.io/slider/"> <img className='webElem2' src={require('../img/slider.gif')} alt="slider" /></a></div>
                <div className='fun ' > <a target="_blank" href="https://nikit099.github.io/3Dsquares/"><img className='webElem3' src={require('../img/3Dsquaer.gif')} alt="3Dsquaer" /></a></div>
                <div className='fun ' > <a  target="_blank" href="https://nikit099.github.io/glassCards/"><img className='webElem4' src={require('../img/glassCards.gif')} alt="glassCards" /></a></div>
            </div>
        </div>
    )
}

export default About
