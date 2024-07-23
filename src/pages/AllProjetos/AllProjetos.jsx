import './AllProjetos.css'
import { Card } from '../../components/Card/Card'
import cbImg from '../../assets/imgs/cbImg.png'


const AllProjetos = () => {
    return (
        <>
            <div className="all-projetos">
                <h1>Projetos</h1>
                <div className="projetos">
                    <Card
                        titulo={'CBPATIO'}
                        variant={'all'}
                        bgImage={cbImg}
                        site={'https://cbpatio.com'}
                        github={'https://github.com/CastleWhite23/cbpatio_client/'}/>
                     <Card
                        titulo={'CBPATIO'}
                        variant={'all'}
                        site={'https://cbpatio.com'}
                        github={'https://github.com/CastleWhite23/cbpatio_client/'}/>
                     <Card
                        titulo={'CBPATIO'}
                        variant={'all'}
                        site={'https://cbpatio.com'}
                        github={'https://github.com/CastleWhite23/cbpatio_client/'}/>
                     <Card
                        titulo={'CBPATIO'}
                        variant={'all'}
                        site={'https://cbpatio.com'}
                        github={'https://github.com/CastleWhite23/cbpatio_client/'}/>
                        
                </div>
            </div>
        </>
    )
}


export { AllProjetos }