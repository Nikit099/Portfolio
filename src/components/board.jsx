import React, { useState } from 'react';

const Board = () => {
    const [choiceNomber, setCoiceNomber] = useState(0)
    const color = ['ellow', 'green', 'blue', 'red']
    const choice = [ 
    ['rgb(251, 255, 0)', 'rgb(255, 128, 0)', 'rgb(255, 191, 0)', 'rgb(237, 255, 0)', 'rgb(255, 161, 0)' ],
    ['rgba(0, 255, 171)', 'rgba(0, 255, 21)', 'rgb(0, 255, 221)', 'rgb(10, 148, 0)', 'rgb(108, 255, 45)'],
    ['#5a28ff', '#285eff', '#283aff', '#6128ff', '#2f28ff'],
    [ 'rgb(170, 0, 0)', 'rgb(250, 0, 0)', 'rgb(255, 0, 81)', 'rgb(255, 0, 157)', 'rgb(255, 0, 195)']
    ]
    let count = ''
 
    const squares = []
    if(window.innerWidth >= 1600){
        count = 1890
    }
    if(window.innerWidth < 1600 && window.innerWidth >= 1200){
        count = 1500
    }
    if(window.innerWidth < 1200 && window.innerWidth >= 782){
        count = 1000
    }
    if(window.innerWidth < 782 ){
        count = 690
    }

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
            color.map((i, index) => {
                around.id === i && setCoiceNomber(index)
            })
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
            <div className="container" onMouseDown={(e) => setColor(e, choice[choiceNomber])} onMouseOver={(e) => setColor(e, choice[choiceNomber])} id="board" >
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