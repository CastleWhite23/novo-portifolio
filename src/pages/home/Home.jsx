import './Home.css'
import { Button } from '../../components/Button/Button'

const Home = () => {
    return (
        <>
            <div className="home">
                <div className="logo">whitecastle</div>
                <div className="apresentacao">
                    <h1>Pedro Castelo</h1>
                    <p>Sou designer web e desenvolvedor freelancer, seja bem vindo ao meu portifólio :)</p>
                    <Button text='contato' variant='contato'/>
                </div>
                <div className="sidebar">
                    <div className="bg"></div>
                    <div className="sidebar-itens">
                        <div className="sidebar-item">Destaques</div>
                        <div className="sidebar-item">Habilidades</div>
                        <div className="sidebar-item">Sobre mim</div>
                        <div className="sidebar-item">Contatos</div>
                    </div>
                </div>
            </div>
        </>
    )
}

export { Home }
