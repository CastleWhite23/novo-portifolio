import './Button.css'

const Button = ({text, variant, style}) => {
    return (
        <>
          <div className={`btn-${variant}`}>
            {text}
          </div>
        </>
    )
}

export { Button }
