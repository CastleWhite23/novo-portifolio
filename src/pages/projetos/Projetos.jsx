import './Projetos.css'
import { Card } from '../../components/Card/Card'
import cbImg from '../../assets/imgs/cbImg.png'
import pokedex from '../../assets/imgs/pokedex.png'
import todo from '../../assets/imgs/todo.png'



const Projetos = () => {




  return (
    <>
      <div className="projetos" id='destaques'>
        <h1 className='titulo-pagina'>Trabalhos principais</h1>
        <div className="cards-principais">


          <Card
            titulo={'Pokedex'}
            width={'380px'}
            height={'350px'}
            variant={'home'}
            position={'first'}
            bgImage={pokedex}
            site={'https://pokedex-vert-seven.vercel.app'}
            github={'https://github.com/CastleWhite23/cbpatio_client/'}
          />
          <Card
            titulo={'CBPATIO'}
            width={'380px'}
            height={'350px'}
            variant={'home'}
            bgImage={cbImg}
            position={'second'}
            site={'https://cbpatio.com'}
            github={'https://github.com/CastleWhite23/cbpatio_client/'}
            style={{
              marginTop: '-100px'
            }} />

          <Card
            titulo={'TodoList'}
            width={'380px'}
            height={'350px'}
            position={'third'}
            variant={'home'}
            site={'https://todo-list-react-lake.vercel.app'}
            bgImage={todo}
            style={{
              marginTop: '-200px'
            }}
          />
        </div>
      </div>


    </>
  )
}

export { Projetos }
