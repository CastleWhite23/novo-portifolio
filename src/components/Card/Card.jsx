
import './Card.css'
import { Button } from '../Button/Button'
import { useState } from 'react'

const Card = ({ width, height, variant, titulo, style, children, bgImage, site, github, position }) => {

    const cardStyle = {
        width: width,
        height: height,
        ...style
    }
    let bgImageStyle = {}
    variant == 'all' ?

        bgImageStyle = {
            position: 'absolute',
            backgroundImage: `url(${bgImage})`,
            backgroundPosition: 'center',
            width: '100%',
            height: '100%',
            backgroundSize: 'cover',
            
        }
        :
        bgImageStyle = {

            backgroundImage: `url(${bgImage})`,
            backgroundPosition: 'center',
            width: '100%',
            height: '100%',
            backgroundSize: 'cover',
            borderRadius: '8px 8px 0px 0px',
        }

    const [hidden, setHidden] = useState(false);

    return (
        <>
            <div className={`card ${variant} ${position}`} style={cardStyle} onMouseEnter={() => setHidden(true)}
                    onMouseLeave={() => setHidden(false)} >
                <div style={bgImage && { ...bgImageStyle }}></div>
                <div className={`mascara `}
                    ></div>

                <div className={`info ${!hidden ? '' : 'esconder'}`}>
                    <h2>{titulo}</h2>
                    {children}

                    {
                        variant != "journey" && (
                            <div className="btns none" >
                                <a href={site} target='_blank'><Button text={'site'} variant={'card'} /></a>
                                <a href={github} target='_blank'><Button text={'github'} variant={'card'} /></a>
                                {/* <Button text={'mais'} variant={'card'} /> */}
                            </div>
                        )
                    }
                </div>

            </div>
        </>
    )
}


export { Card }