import './Navbar.css'
import { Button } from '../Button/Button'

const Navbar = () => {
    return (
        <>
            <header>
                <div className="logo">whiteCastle</div>
                <nav>
                    <ul>
                        <a href="#destaques"><li>Destaques</li></a>
                        <a href="#sobre"><li>Sobre Mim</li></a>
                        <a href="#projetos"><li>Projetos</li></a>
                        {/* <a href="#"><li>Habilidades</li></a> */}
                        <li><Button text={'contato'} variant={'contato-nav'} /></li>
                    </ul>
                </nav>
            </header>
        </>
    )
}


export { Navbar }