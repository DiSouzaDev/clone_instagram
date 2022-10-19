import './style.css'
import user from './img/user.png'
import { useEffect, useState } from 'react'

export function Story() {

    const [story, setStory] = useState([])

    const [limite, setLimite] = useState(5)

    const slice = story.slice(0, limite)


    useEffect(() => {
        fetch(`https://api.github.com/users/Diogo-Javax888/followers`)
            .then((response) => {
                return response.json()
            })
            .then((result) => {
                setStory(result)
            })

            .catch((err) => {
                throw new Error(err)
            })

    }, [])

    return (
        <div className='every'>
            {slice.map((story, key) => (
                <div className='container' key={key}>

                    <div className='user-element'>
                        <div>
                            <img className='image-user-story' src={`https://github.com/${story.login}.png`} />
                        </div>
                        <span>{story.login}</span>
                    </div>

                </div>
            ))}
        </div>
    )
}