import user from './img/user.png'
import './style.css'
import { FiMoreHorizontal } from 'react-icons/fi'
import { IoMdHeartEmpty } from 'react-icons/io'
import { BsChat, BsBookmark, BsEmojiSmile } from 'react-icons/bs'
import { FiSend } from 'react-icons/fi'
import { IconContext } from 'react-icons'

export function Post() {
    return (
        <>
            <div className='tudo-post' >
                <header className='header-posts'>
                    <div className="infos-post">
                        <img className='img-user' src={user} />
                        <p>diogoSouzaBarbosa</p>
                    </div>
                    <FiMoreHorizontal />
                </header>

                <div className='img-post'>
                    <img className='img-user-post' src={user} />
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
                            <span>diogoSouzaBarbosa</span> Moletom novo :)
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

// import user from './img/user.png'
// import './style.css'
// import { FiMoreHorizontal } from 'react-icons/fi'
// import { IoMdHeartEmpty } from 'react-icons/io'
// import { BsChat, BsBookmark, BsEmojiSmile } from 'react-icons/bs'
// import { FiSend } from 'react-icons/fi'
// import { IconContext } from 'react-icons'
// import { useEffect, useState } from 'react'
// import { Story } from '../Story'

// export function Post() {

//     const [post, setPost] = useState([])

//     const [limite, setLimit] = useState(20)

//     const slice = post.slice(0, limite)

//     useEffect(() => {
//         fetch(`https://api.github.com/users/Diogo-Javax888/followers`)
//             .then((response) => {
//                 return response.json()
//             })
//             .then((result) => {
//                 setPost(result)
//             })

//             .catch((err) => {
//                 throw new Error(err)
//             })

//     }, [])

//     return (
//         <>
//             {slice.map((post, key) => (
//                 <div className='tudo-post' key={key}>
//                     <header className='header-posts'>
//                         <div className="infos-post">
//                             <img className='img-user' src={`https://github.com/${post.login}.png`} />
//                             <p>{post.login}</p>
//                         </div>
//                         <FiMoreHorizontal />
//                     </header>

//                     <div className='img-post'>
//                         <img className='img-user-post' src={`https://github.com/${post.login}.png`} />
//                     </div>
//                     <div className='conteudo-post'>
//                         <IconContext.Provider value={{ size: '30px' }}>
//                             <section className='icons-post'>
//                                 <div className='icons-1'>
//                                     <div className='icons'><IoMdHeartEmpty /></div>
//                                     <div className='icons'><BsChat /></div>
//                                     <div className='icons'><FiSend /></div>
//                                 </div>
//                                 <div className='icons'><BsBookmark /></div>
//                             </section>
//                         </IconContext.Provider>

//                         <section className='like'>
//                             <span>251 curtidas</span>
//                         </section>

//                         <div className='legend'>
//                             <p>
//                                 <span>{post.login}</span> Esse é meu github, me segue lá: {post.html_url}
//                             </p>
//                         </div>

//                         <div className='horas'>
//                             <time>Há 1 hora</time>
//                         </div>

//                         <div className='coment'>
//                             <div className='fake-coment'>

//                                 <IconContext.Provider value={{ size: '25px' }}>
//                                     <div className='icons'><BsEmojiSmile /></div>
//                                 </IconContext.Provider>

//                                 <input placeholder='Adicione um comentário...' />
//                             </div>
//                             <button className='publicar'>Publicar</button>
//                         </div>
//                     </div>
//                 </div>
//             ))}
//         </>
//     )
// }