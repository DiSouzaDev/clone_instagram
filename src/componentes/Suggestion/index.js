import './style.css'
import user from './img/user.png'

export function Suggestion() {
    return (
        <>
            <div className="header-suggestion-every">
                <img className='img-mud' src={user} />

                <div className="user-infos">
                    <div className="info">
                        <span>gabrielBarbosa</span>
                        <p>Gabriel</p>
                    </div>

                    <button className='mudar'>Mudar</button>

                </div>
            </div>

            <div className='header-main'>
                <p>Sugestões para você</p>
                <span>Ver tudo</span>
            </div>

            <div className='header-suggestion-peoples'>
                <img className='img-sug' src={user} />

                <div className='users-info'>
                    <div className="info">
                        <span>amandinhaDirceu</span>
                        <p>Amanda Dos Santos</p>
                    </div>
                </div>

                <button className='seguir'>Seguir</button>
            </div>

            <div className='header-suggestion-peoples'>
                <img className='img-sug' src={user} />

                <div className='users-info'>
                    <div className="info">
                        <span>amandinhaDirceu</span>
                        <p>Amanda Dos Santos</p>
                    </div>
                </div>

                <button className='seguir'>Seguir</button>
            </div>

            <div className='header-suggestion-peoples'>
                <img className='img-sug' src={user} />

                <div className='users-info'>
                    <div className="info">
                        <span>amandinhaDirceu</span>
                        <p>Amanda Dos Santos</p>
                    </div>
                </div>

                <button className='seguir'>Seguir</button>
            </div>

            <div className='header-suggestion-peoples'>
                <img className='img-sug' src={user} />

                <div className='users-info'>
                    <div className="info">
                        <span>amandinhaDirceu</span>
                        <p>Amanda Dos Santos</p>
                    </div>
                </div>

                <button className='seguir'>Seguir</button>
            </div>

            <div className='header-suggestion-peoples'>
                <img className='img-sug' src={user} />

                <div className='users-info'>
                    <div className="info">
                        <span>amandinhaDirceu</span>
                        <p>Amanda Dos Santos</p>
                    </div>
                </div>

                <button className='seguir'>Seguir</button>
            </div>

            <div className='header-suggestion-peoples'>
                <img className='img-sug' src={user} />

                <div className='users-info'>
                    <div className="info">
                        <span>amandinhaDirceu</span>
                        <p>Amanda Dos Santos</p>
                    </div>
                </div>

                <button className='seguir'>Seguir</button>
            </div>
        </>
    )
}