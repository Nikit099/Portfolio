import React, { useState } from 'react';

const Board = () => {
    const [choiceNomber, setCoiceNomber] = useState(0)
    const color = ['ellow', 'green', 'blue', 'red']
    const choice = [ 
    ['rgb(251, 255, 0)', 'rgb(255, 128, 0)', 'rgb(255, 191, 0)', 'rgb(237, 255, 0)', 'rgb(255, 161, 0)' ],
    ['rgba(0, 255, 171)', 'rgba(0, 255, 21)', 'rgb(0, 255, 221)', 'rgb(10, 148, 0)', 'rgb(108, 255, 45)'],
    ['rgb(0, 4, 255)', 'rgb(132, 0, 255)', 'rgb(0, 106, 255)', 'rgb(85, 0, 255)', 'rgb(132, 0, 255)'],
    [ 'rgb(170, 0, 0)', 'rgb(250, 0, 0)', 'rgb(255, 0, 81)', 'rgb(255, 0, 157)', 'rgb(255, 0, 195)']
    ]
    
    const squares = []
    const count = 1890

    for(let i = 0; i < count; i++){
        squares.push(i)
    }
    const setColor = (e, colors) => {
        const cell = e.target.closest('.square')
        
        if(cell){
            const color = random(colors)
            cell.style.backgroundColor = color
            cell.style.boxShadow = `0 0 10px ${color}, 0 0 50px ${color}`
        }
        
    }
    const setChiceNomber = (e) => {
        const around = e.target.closest('.around')
        if(around){
            if(around.id === 'ellow'){
                setCoiceNomber(0)
            } else if(around.id === 'green'){
                setCoiceNomber(1)
            } else if(around.id === 'blue'){
                setCoiceNomber(2)
            } else if(around.id === 'red'){
                setCoiceNomber(3)
            }
        }
    }
    const remuveColor = (e) => {
        const elem = e.target
        elem.style.backgroundColor = '#1d1d1d'
        elem.style.boxShadow = `0 0 2px #000`
    }
    
    const random = (colors) => colors[Math.floor(Math.random() * colors.length)]
   
    return (
        <div className='canvas' id='top'>
            <div className="container" onMouseUp={(e) => setColor(e, choice[choiceNomber])} onMouseOver={(e) => setColor(e, choice[choiceNomber])} id="board" >
            {squares.map(i => (
                <div id={i}  className='square'onMouseLeave={remuveColor} key={i}>

                </div>
            ))}
            </div>
            
            <div className='choise' onClick={setChiceNomber}>
            {color.map((i, index )=> (
                <div className={'around ' + i + (index === choiceNomber ? ' br' : '') } id={i} key={i} ></div>
            ))}
              
            </div>
        </div>
       
    );
};

export default Board;