import ferias from './img/ferias.png'
import user from './img/user.png'
import './style.css'
import { FiMoreHorizontal } from 'react-icons/fi'
import { IoMdHeartEmpty } from 'react-icons/io'
import { BsChat, BsBookmark, BsEmojiSmile } from 'react-icons/bs'
import { FiSend } from 'react-icons/fi'
import { IconContext } from 'react-icons'

export function Post5() {
    return (
        <>
            <div className='tudo-post' >
                <header className='header-posts'>
                    <div className="infos-post">
                        <img className='img-user' src={user} />
                        <p>1meiberg</p>
                    </div>
                    <FiMoreHorizontal />
                </header>

                <div className='img-post'>
                    <img className='img-user-post' src={ferias} />
                </div>
                <div className='conteudo-post'>
                    <IconContext.Provider value={{ size: '30px' }}>
                        <section className='icons-post'>
                            <div className='icons-1'>
                                <div className='icons'><IoMdHeartEmpty /></div>
                                <div className='icons'><BsChat /></div>
                                <div className='icons'><FiSend /></div>
                            </div>
                            <div className='icons'><BsBookmark /></div>
                        </section>
                    </IconContext.Provider>

                    <section className='like'>
                        <span>251 curtidas</span>
                    </section>

                    <div className='legend'>
                        <p>
                            <span className='span'>1meiberg</span> Odeio segunda feira...
                        </p>
                    </div>

                    <div className='horas'>
                        <time>Há 1 hora</time>
                    </div>

                    <div className='coment'>
                        <div className='fake-coment'>

                            <IconContext.Provider value={{ size: '25px' }}>
                                <div className='icons'><BsEmojiSmile /></div>
                            </IconContext.Provider>

                            <input placeholder='Adicione um comentário...' />
                        </div>
                        <button className='publicar'>Publicar</button>
                    </div>
                </div>
            </div>
        </>
    )
}