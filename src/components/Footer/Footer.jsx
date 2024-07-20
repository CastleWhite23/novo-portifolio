import './Footer.css'

const Footer = () => {
    return (
        <>
            <div className="footer">
                <div className='footer-content'>
                    
                    <div className="titulo">

                        <h1>
                            <span>Nos Planos</span> de <span>Deus</span> e  <br /> no <span>Trabalho</span>
                            do <span>Homem!</span>
                        </h1>

                    </div>

                    <div className="final">
                        {/* <p className='links'>
                            <a  href='https://instagram.com/cbpatio' target='_blank'></a>
                            <a href='https://discord.gg/DqYZEaGGx6' target='_blank'></a>
                            <a  href='https://x.com/CBPatio?t=kX6GjoXKngWj0PpKdi_HlQ&s=09' target='_blank'></a>
                        </p> */}
                        <div className="politicas">
                            <a hrefLang='#'> Políticas de privacidade</a>
                            <a hrefLang='#'>Termos de uso</a>
                            <a hrefLang='#'>Termos de acessibilidade</a>
                            <a hrefLang='#'>Políticas de software</a>
                        </div>


                        <p>
                            &copy;2024 - Todos os direitos reservados!
                        </p>

                    </div>
                </div>
            </div>
        </>
    )
}

export { Footer }