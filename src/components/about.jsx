import React from 'react'
import Percentages from './percentages'

function About() {
    return (
        <div className='about'>
            <h1 className='txtAbout'>ABOUT</h1>
            
            <div className='informMe'>
                <img className='meFoto' src={require('../img/Group 1.png')} alt="this is me" />
                <h3>Who is this person?</h3>
                <p >I am studying in Rostov, I plan to develop seriously in IT, I am looking for a Frontend developer vacancy, <a href="">contact me</a>.</p>
            </div>
            <Percentages/>
            <h1 className='txtFun'>Web is fun</h1>
            <h1 className='txtFunExp'>EXPERIMENTS & OPEN SOURCE</h1>
            <div className='webFun' >
                <div className='fun ' ><img className='webElem1' src={require('../img/album.gif')} alt="albumGif" /></div>
                <div className='fun ' ><img className='webElem2' src={require('../img/slider.gif')} alt="slider" /></div>
                <div className='fun ' ><img className='webElem3' src={require('../img/3Dsquaer.gif')} alt="3Dsquaer" /></div>
                <div className='fun ' ><img className='webElem4' src={require('../img/glassCards.gif')} alt="glassCards" /></div>
            </div>
        </div>
    )
}

export default About
