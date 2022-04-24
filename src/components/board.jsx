import React, { useEffect } from 'react';

const Board = () => {
    const squares = []
    const count = 1890
    const colors = [ 'rgb(170, 0, 0)', 'rgb(250, 0, 0)', 'rgb(255, 0, 81)', 'rgb(255, 0, 157)', 'rgb(255, 0, 195)']

    for(let i = 0; i < count; i++){
        squares.push(i)
    }
    // useEffect(() => {
    //     const timer = setInterval(()=> {

    //     }, 1000)   
    //     return () => clearInterval(timer)
    // })
    const setColor = (e) => {
        const cell = e.target.closest('.square')
        if(cell){
            const color = random()
            cell.style.backgroundColor = color
            cell.style.boxShadow = `0 0 2px ${color}, 0 0 10px ${color}`
        }
        
    }
    const remuveColor = (e) => {
        const elem = e.target
        elem.style.backgroundColor = '#1d1d1d'
        elem.style.boxShadow = `0 0 2px #000`
    }
    
    const random = () => colors[Math.floor(Math.random() * colors.length)]
    const randomSquaers = () => count[Math.floor(Math.random() * count.length)]
    return (
        <div className='canvas'>
            <div className="container" onMouseUp={setColor} onMouseOver={setColor} id="board">
            {squares.map(i => (
                <div id={i}  className='square'onMouseLeave={remuveColor} key={i}>

                </div>
            ))}
            </div>
        </div>
       
    );
};

export default Board;