import React, { useState } from 'react';

const Head = () => {
    const smoothScroll = (e) => {
        e.preventDefault()
        const anchor = e.target.closest('.anc')
        if(anchor){
            const blockID = anchor.getAttribute('href')
            document.querySelector('' + blockID).scrollIntoView({
                behavior: "smooth",
                block: "start"
            })
        }
    }
    
    return (
        <div onClick={smoothScroll} className='head'>
            <a className='anc' href="#top">Home</a>
            <a className='anc' href="#about">About</a>
            <a className='anc' href="#projects">Projects</a>
           
        </div>
    );
};

export default Head;