import './Button.css'

const Button = ({text, variant, style}) => {
    return (
        <>
          <div className={`btn-${variant}`} style={style || {}}>
            {text}
          </div>
        </>
    )
}

export { Button }
