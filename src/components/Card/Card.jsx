
import './Card.css'
const Card = ({width, height, variant, titulo, style}) =>{

    const cardStyle = {
        width: width,
        height: height,
        ...style
    }
    return(
        <>
            <div className={`card ${variant}`} style={cardStyle}>
                <h2>{titulo}</h2>
            </div>
        </>
    )
}


export {Card}