import './Navbar.css'
import { Button } from '../Button/Button'

const Navbar = () => {
    return (
        <>
            <header>
                <div className="logo">whiteCastle</div>
                <nav>
                    <ul>
                        <li>Destaques</li>
                        <li>Sobre mim</li>
                        <li>Projetos</li>
                        <li>Habilidades</li>
                        <li><Button text={'contato'} variant={'contato-nav'} /></li>
                    </ul>
                </nav>
            </header>
        </>
    )
}


export { Navbar }