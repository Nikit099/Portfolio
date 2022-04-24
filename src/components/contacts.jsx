import React from 'react'

function Contacts() {
    return (
        <div className='contacts'>
            <h1>CONTACTS</h1>
            <div className='links'>
                <a href="https://t.me/Nikitalsa" ><img src={require('../img/linksIMG/telegram.png')} alt="" /></a>
                <a href="https://vk.com/nikitalsa"><img src={require('../img/linksIMG/vk.png')}  alt="" /></a>
                <a href="https://github.com/Nikit099?tab=overview&from=2022-04-01&to=2022-04-24"><img src={require('../img/linksIMG/github.png')}  alt="" /></a>
                <a href="https://mail.google.com/mail/u/0/#inbox"><img src={require('../img/linksIMG/mail.png')}  alt="" /></a>
            </div>
            <p> @{new Date().getFullYear()} - <a href="">Contact</a> Nikita Nechitailov</p>
        </div>
    )
}

export default Contacts
