import './AllProjetos.css'
import { Card } from '../../components/Card/Card'
import cbImg from '../../assets/imgs/cbImg.png'
import todo from '../../assets/imgs/todo.png'
import pokedex from '../../assets/imgs/pokedex.png'
import desenvolvendo from '../../assets/imgs/desenvolvendo.png'

const AllProjetos = () => {
    return (
        <>
            <div className="all-projetos" id='projetos'>
                <h1>Projetos</h1>
                <div className="projetos">
                    <div className="projeto-5">
                        <Card
                            titulo={'CBPATIO'}
                            variant={'all'}
                            bgImage={cbImg}
                            site={'https://cbpatio.com'}
                            github={'https://github.com/CastleWhite23/cbpatio_client/'} />
                    </div>
                    <div className="projeto-1">
                        <Card
                            titulo={'Pokedex'}
                            variant={'all'}
                            bgImage={pokedex}
                            site={'https://pokedex-vert-seven.vercel.app'}
                            github={'https://github.com/CastleWhite23/cbpatio_client/'}
                        />
                    </div>
                    <div className="projeto-2">
                        <Card
                            titulo={'TodoList'}
                            variant={'all'}
                            site={'https://todo-list-react-lake.vercel.app'}
                            bgImage={todo}
                        />
                    </div>
                    <div className="projeto-3">
                        <Card
                            titulo={'Em Desenvolvimento'}
                            variant={'all'}
                            bgImage={desenvolvendo}/>
                    </div>
                    <div className="projeto-4">
                        <Card
                            titulo={'Em Desenvolvimento'}
                            variant={'all'}
                            bgImage={desenvolvendo}/>
                    </div>


                </div>
            </div>
        </>
    )
}


export { AllProjetos }