import './style.css'
import user from './img/user.png'
import { useState } from 'react'

export function Story() {

    // const [story, setStory] = useState([])

    return (
        <div className='container'>

            <div className='user-element'>
                <div>
                    <img className='image-user-story' src={user} />
                </div>
                <span>
                    DiogoSo
                </span>
            </div>

            <div className='user-element'>
                <div>
                    <img className='image-user-story' src={user} />
                </div>
                <span>
                    DiogoSo
                </span>
            </div>

            <div className='user-element'>
                <div>
                    <img className='image-user-story' src={user} />
                </div>
                <span>
                    DiogoSo
                </span>
            </div>

        </div>
    )
}