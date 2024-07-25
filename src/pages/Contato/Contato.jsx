import './Contato.css'
import { Button } from '../../components/Button/Button'

const Contato = () => {
    return (
        <>
            <div className="contato">
                <h1>Contato</h1>
                <div className="content">
                    <div className="links">
                        <div className="avisos">
                            <h2>Fale conosco</h2>
                            <p>Resta alguma dúvida? Preencha os campos a seguir com os seguintes dados que em breve entraremos em contato.</p>
                            <h2>Ligue <br /> para nós</h2>
                            <p>+55  (15)99790-6791</p>
                        </div>
                        <div className="redes-sociais">
                            <h3>Redes sociais</h3>
                            <div className="redes">
                                <div className="link">a</div>
                                <div className="link">a</div>
                                <div className="link">a</div>
                            </div>

                        </div>
                    </div>
                    <div className="form">
                        <div className="box">
                            <input type="text" id='#nome' placeholder=' ' />
                            <label for="nome">Nome:</label>

                        </div>
                        <div className="box">
                            <input type="text" id='#tel' placeholder=' ' />
                            <label for="tel">Telefone:</label>

                        </div>
                        <div className="box">
                            <input type="text" id='#assunto' placeholder=' ' />
                            <label for="assunto">Assunto:</label>

                        </div>
                        <div className="box">
                            <input type="text" id='#email' placeholder=' ' />
                            <label for="email">Email:</label>
                        </div>
                        <div className="box ">
                            <textarea type="text" id='#mensagem' placeholder='' />
                            <label htmlFor="mensagem">Sua Mensagem:</label>

                        </div>
                        <Button
                            text={'Enviar'}
                            variant={'card'}
                            style={{
                                padding: '1.5rem', width: '100%',
                                backgroundColor: '#217176',
                                color: '#fff'
                            }} />
                    </div>
                </div>

            </div>
        </>
    )
}

export { Contato }