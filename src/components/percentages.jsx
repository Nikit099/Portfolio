import React from 'react'

function Percentages() {
    return (
        <div>
        <div className='columns'>
            <div className='percent html'><div className='fool eight'></div></div>
            <div className='percent css'><div className='fool eight'></div></div>
            <div className='percent js'><div className='fool nine'></div></div>
            <div className='percent react'><div className='fool nine'></div></div>
            <div className='percent Design'><div className='fool five'></div></div>
            <div className='percent Node'><div className='fool three'></div></div>
        </div>
        <div className='tools'>
            <div className='tool'>JS</div>
            <div className='tool re'>React</div>
            <div className='tool'>HTML</div>
            <div className='tool'>CSS</div>
            <div className='tool'>Design</div>
            <div className='tool no'>NodeJS</div>
        </div>
        <div className='counts'>
            <div className='count'>8</div>
            <div className='count'>8</div>
            <div className='count'>9</div>
            <div className='count'>9</div>
            <div className='count'>5</div>
            <div className='count'>3</div>
        </div>
        </div>
      
    )
}

export default Percentages
