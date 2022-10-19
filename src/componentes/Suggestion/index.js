import './style.css'
import user from './img/user.png'
import { useEffect, useState } from 'react'

export function Suggestion() {

    const [suggestions, setSuggestions] = useState([])

    const [limite, setLimit] = useState(5)

    const slice = suggestions.slice(0, limite)

    useEffect(() => {
        fetch(`https://api.github.com/users/Diogo-Javax888/followers`)
            .then((response) => {
                return response.json()
            })
            .then((result) => {
                setSuggestions(result)
            })

            .catch((err) => {
                throw new Error(err)
            })

    }, [])

    return (
        <div className='every'>
            <div className='container-sugg'>
                <div className="header-suggestion-every">
                    <img className='img-mud' src={user} />

                    <div className="user-infos">
                        <div className="info">
                            <span>diogoSouzaBarbosa</span>
                            <p>Diogo de Souza</p>
                        </div>

                        <button className='mudar'>Mudar</button>

                    </div>
                </div>

                <div className='header-main'>
                    <p>Sugestões para você</p>
                    <span>Ver tudo</span>
                </div>

                {slice.map((suggestions, key) => (
                    <div className='header-suggestion-peoples' key={key}>
                        <img className='img-sug' src={`https://github.com/${suggestions.login}.png`} />

                        <div className='users-info'>
                            <div className="info">
                                <span>{suggestions.login}</span>
                                <p>Seguido por Diogo-Javax888</p>
                            </div>
                        </div>

                        <button className='seguir'>Seguir</button>
                    </div>
                ))}

                <footer className='footer-suggestion'>
                    <p>Sobre &bull; Ajuda &bull; Imprensa &bull; API &bull; Carreiras &bull; Privacidade &bull; Termos &bull; Localizações &bull; Principais contas &bull; Hashtags &bull; idioma</p>

                    <p>&copy; 2021 INSTAGRAM FROM META</p>
                </footer>
            </div>
        </div>
    )
}