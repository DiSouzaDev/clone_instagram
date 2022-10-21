import './style.css'
import user from './img/user.png'
import proa from './img/PROA.png'
import pan from './img/bancoPan.png'
import google from './img/google.png'
import spoti from './img/spotify.png'

export function Story() {

    return (
        <div className='every'>
                <div className='container'>
                    <div className='user-element'>
                        <div><img id='green' className='seu-story' src={user} /></div>
                        <span>Seu_Story</span>
                    </div>

                    <div className='user-element'>
                        <div><img className='image-user-story' src={proa} /></div>
                        <span>InstPROA</span>
                    </div>

                    <div className='user-element'>
                        <div>
                            <img className='image-user-story' src={pan} />
                        </div>
                        <span>BancoPAN</span>
                    </div>

                    <div className='user-element'>
                        <div>
                            <img className='image-user-story' src={google} />
                        </div>
                        <span>Google</span>
                    </div>

                    <div className='user-element'>
                        <div>
                            <img className='image-user-story' src={spoti} />
                        </div>
                        <span>Spotify</span>
                    </div>
                </div>
        </div>
    )
}