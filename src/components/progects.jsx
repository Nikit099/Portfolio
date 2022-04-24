import React from 'react'

function Progects() {
    return (
        <div className='projects'>
            <h2 className='txtProj'>PROJECTS</h2>
            <div className='sort' >
                <h3>All</h3>
                <h3>JS</h3>
                <h3>React</h3>
            </div>
            <div className='linkProj'>
            <img className='proj pr1' src={require('../img/todo.png')} alt="ToDo list" />

            <img className='proj pr2' src={require('../img/fast.png')} alt="fast-meet" />
            <img className='proj pr3' src={require('../img/pomo.png')} alt="pomodoro" />

            <img className='proj pr4' src={require('../img/fish.png')} alt="fish Food" />
            <img className='proj pr5' src={require('../img/password.png')}alt="password" />
            <img className='proj pr6' src={require('../img/donat.png')} alt="donats" />

            <img className='proj pr7' src={require('../img/rock.png')} alt="rock scissors paper" />
            <img className='proj pr8' src={require('../img/back.png')} alt="back Paks" />

            <img className='proj pr9' src={require('../img/text.png')} alt="Text fast" />
                <a  className='lkBtn1' href='' > Learn more </a>
                <a className='lkBtn2' href='' > Learn more </a>
                <a className='lkBtn3' href='' > Learn more </a>
                <a className='lkBtn4' href='' > Learn more </a>
                <a className='lkBtn5' href='' > Learn more </a>
                <a className='lkBtn6' href='' > Learn more </a>
                <a className='lkBtn7' href='' > Learn more </a>
                <a className='lkBtn8' href='' > Learn more </a>
                <a className='lkBtn9' href='' > Learn more </a>
            </div>
            
        </div>
    )
}

export default Progects
