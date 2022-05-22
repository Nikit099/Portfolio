import React from 'react'
import telegram from "../img/imgSVG/telegram.svg"
import vk from "../img/imgSVG/vk.svg"
import git from "../img/imgSVG/github.svg"
function Contacts() {
    
    return (
        <div className='contacts' id='contacts' >
            <h1 className='element-animationOpasiti'>CONTACTS</h1>
            <div className='links element-animationOpasiti'>
           
                <a target="_blank" href="https://t.me/Nikitalsa" > <img src={telegram} className='logoSvg'  alt="logo" /></a>
                <a target="_blank" href="https://vk.com/nikitalsa"><img src={vk} className='logoSvg'   alt="logo" /></a>
                <a target="_blank" href="https://github.com/Nikit099?tab=overview&from=2022-04-01&to=2022-04-24"> <img src={git} className='logoSvg'   alt="logo" /> </a>
            </div>
            <p> @{new Date().getFullYear()} - <a  target="_blank" href="https://t.me/Nikitalsa">Contact</a> Nikita Nechitailov</p>
        </div>
    )
}

export default Contacts
