import React from 'react'
import DoughnutChart from './DoughnutChart'
// import Percentages from './percentages'

function About() {
   
   

    return (
        <div className='about ' id='about'>
            <h1 className='txtAbout element-animationOpasiti'>ABOUT</h1>
            <div className="flexContainer">

            
            <div className='gridAbout'>
            <div className='informMe test element-animationLeft'>
                <div className="meFoto">
                <img src={require('../img/Group 1.png')} alt="this is me" />

                </div>
                <h3>Who is this person?</h3>
                <p >I am studying in Rostov, I plan to develop seriously in IT, I am looking for a Frontend developer vacancy, <a  target="_blank" href="https://t.me/Nikitalsa">contact me</a>.</p>
            </div>
            <div className="test columnFoto element-animationRight">
            {/* <img src={require('../img/columns.png')} alt="" /> */}
            <DoughnutChart/>
            </div>
            </div>
            </div>
            <h1 className='txtFunExp element-animationOpasiti'>EXPERIMENTS & OPEN SOURCE</h1>
           
            <h1 className='txtAbout element-animationOpasiti'>Web is fun</h1>
            <div className="webContainer">

            
            <div className='webFun element-animationOpasiti' >
            <div className="webFun1">
            <div className='fun ' ><a target="_blank" href="https://nikit099.github.io/album/"><img className='webE webElem1' src={require('../img/album.gif')} alt="albumGif" /></a> </div>
                <div className='fun ' > <a target="_blank" href="https://nikit099.github.io/slider/"> <img className='webE webElem2' src={require('../img/slider.gif')} alt="slider" /></a></div>
               
            </div>
              <div className="webFun2">
              <div className='fun ' > <a target="_blank" href="https://nikit099.github.io/3Dsquares/"><img className='webE webElem3' src={require('../img/3Dsquaer.gif')} alt="3Dsquaer" /></a></div>
                <div className='fun ' > <a  target="_blank" href="https://nikit099.github.io/glassCards/"><img className='webE webElem4' src={require('../img/glassCards.gif')} alt="glassCards" /></a></div>
            
             </div>
           </div>
        </div>
        </div>
    )
}

export default About
