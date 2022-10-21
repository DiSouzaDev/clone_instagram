import './style.css'
import { Story } from '../Story'
import { Post } from '../Post'
import { Suggestion } from '../Suggestion'
import { Post2 } from '../Post2'
import { Post3 } from '../Post3'
import { Post4 } from '../Post4'
import { Post5 } from '../Post5'

export function Layout() {

    return (
        <>
        
            <div className="MainGrid" >

                <div className="first-column" style={{ gridArea: "firstColumn" }}>
                    <div className="box" >
                        <Story />
                    </div>

                    <div className="box" style={{ margin: "30px 0" }} >
                        <Post />
                    </div>
                    
                    <div className="box" style={{ margin: "30px 0" }} >
                        <Post2 />
                    </div>

                    <div className="box" style={{ margin: "30px 0" }} >
                        <Post3 />
                    </div>

                    <div className="box" style={{ margin: "30px 0" }} >
                        <Post4 />
                    </div>

                    <div className="box" style={{ margin: "30px 0" }} >
                        <Post5 />
                    </div>
                </div>

                <div style={{ gridArea: "secondColumn" }} >
                    <div className="suggestionBox" >
                        <Suggestion />
                    </div>
                </div>

            </div>

        </>
    )

}