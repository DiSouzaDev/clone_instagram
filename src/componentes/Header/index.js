import { AiOutlineSearch } from 'react-icons/ai'
import { RiMessengerLine } from 'react-icons/ri'
import { BsPlusSquare } from 'react-icons/bs'
import { MdOutlineExplore } from 'react-icons/md'
import { FiHeart } from 'react-icons/fi'
import user from './img/user.png'

import './style.css'
import { IconContext } from 'react-icons'

export function Header() {
    return (
        <header className="header">
            <div className="container">
                <img className="logoInsta" src="https://www.instagram.com/static/images/web/mobile_nav_type_logo.png/735145cfe0a4.png" />
                <div className="input-fake">
                    <IconContext.Provider value={{ color: '#8e8e8e' }}>
                        <AiOutlineSearch />
                    </IconContext.Provider>
                    <input placeholder='pesquisar' />
                </div>

                <div className='menuIcons'>
                    <IconContext.Provider value={{ size: '26px' }}>
                        <div>
                            <RiMessengerLine />
                        </div>
                        <div>
                            <BsPlusSquare />
                        </div>
                        <div>
                            <MdOutlineExplore />
                        </div>
                        <div>
                            <FiHeart />
                        </div>
                    </IconContext.Provider>
                    <img className='img-user' src={user} />
                </div>
            </div>
        </header>
    )
}