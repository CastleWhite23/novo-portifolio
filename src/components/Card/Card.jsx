
import './Card.css'
import { Button } from '../Button/Button'

const Card = ({ width, height, variant, titulo, style, onMouseEnter, onMouseLeave, children }) => {

    const cardStyle = {
        width: width,
        height: height,
        ...style
    }



    return (
        <>
            <div className={`card ${variant}`} style={cardStyle} onMouseEnter={onMouseEnter} onMouseLeave={onMouseLeave}>
                <h2>{titulo}</h2>

                {children}

                {
                    variant != "journey" && (
                        <div className="btns none" >
                            <Button text={'site'} variant={'card'} />
                            <Button text={'github'} variant={'card'} />
                            <Button text={'mais'} variant={'card'} />
                        </div>
                    )
                }
                
            </div>
        </>
    )
}


export { Card }