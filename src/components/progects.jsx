import React from 'react'

function Progects() {
    return (
        <div className='projects' id='projects'>
            <h2 className='txtProj element-animationOpasiti'>PROJECTS</h2>
            
            <div className='linkProj'>
                <div className='boxProj1 box' >
                    <div className='imgBox' ><img className='proj pr1' src={require('../img/todo.png')} alt="ToDo list" /> </div>
                 <div className='linkBox'><a className='lkBtn1' target="_blank" href='https://nikit099.github.io/Todo-beautiful/' > Learn more </a></div>
                </div>
                <div className="boxProj2 box">
                    <div className='imgBox' >
                    <div className='boxProj' > <img className='proj pr2' src={require('../img/fast.png')} alt="fast-meet" /></div>
                    </div>
                    <div className="linkBox">
                <a className='lkBtn2' target="_blank" href='https://nikit099.github.io/fast-company/' > Learn more </a>
                    </div>
                </div>
                  <div className="boxProj3 box">
                    <div className='imgBox' >
                    <div className='boxProj' > <img className='proj pr3' src={require('../img/pomo.png')} alt="pomodoro" /></div>

                    </div>
                    <div className="linkBox ">
                <a className='lkBtn3' target="_blank" href='https://nikit099.github.io/somePreProject/' > Learn more </a>
                        
                    </div>
                </div>
                {/* <div className="boxProj4 box">
                    <div className='imgBox' >
                    <div className='boxProj' ><img className='proj pr4' src={require('../img/fish.png')} alt="fish Food" /></div>

                    </div>
                    <div className="linkBox">
                <a className='lkBtn4' target="_blank" href='' > Learn more </a>
                        
                    </div>
                </div> */}
                <div className="boxProj5 box">
                    <div className='imgBox' >
                    <div className='boxProj' ><img className='proj pr5' src={require('../img/password.png')}alt="password" /></div>

                    </div>
                    <div className="linkBox">
                <a className='lkBtn5' target="_blank" href='https://nikit099.github.io/somePreProject/' > Learn more </a>
                        
                    </div>
                </div>
                {/* <div className="boxProj6 box">
                    <div className='imgBox' >
                    <div className='boxProj' ><img className='proj pr6' src={require('../img/donat.png')} alt="donats" /></div>

                    </div>
                    <div className="linkBox">
                <a className='lkBtn6' target="_blank" href='' > Learn more </a>
                        
                    </div>
                </div> */}
                <div className="boxProj7 box">
                    <div className='imgBox' >
                    <div className='boxProj' >  <img className='proj pr7' src={require('../img/rock.png')} alt="rock scissors paper" /></div>

                    </div>
                    <div className="linkBox">
                <a className='lkBtn7' target="_blank" href='https://nikit099.github.io/Rock-paper-scissors/' > Learn more </a>
                        
                    </div>
                </div>
                {/* <div className="boxProj8 box">
                    <div className='imgBox' >
                    <div className='boxProj' ><img className='proj pr8' src={require('../img/back.png')} alt="back Paks" /></div>

                    </div>
                    <div className="linkBox">
                <a className='lkBtn8' target="_blank" href='' > Learn more </a>
                        
                    </div>
                </div> */}
                
                <div className="boxProj9 box">
                    <div className='imgBox' >
                    <div className='boxProj' ><img className='proj pr9' src={require('../img/text.png')} alt="Text fast" /></div>

                    </div>
                    <div className="linkBox">
                <a className='lkBtn9' target="_blank" href='https://nikit099.github.io/somePreProject/' > Learn more </a>
                        
                    </div>
                </div>
                
            </div>
            
        </div>
    )
}

export default Progects
