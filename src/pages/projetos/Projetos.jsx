import './Projetos.css'
import { Card } from '../../components/Card/Card'



const Projetos = () => {
  return (
    <>
        <div className="projetos">
          <h1 className='titulo-pagina'>Trabalhos principais</h1>
          <div className="cards-principais">
            <Card titulo={'Projeto X'} width={'380px'} height={'350px'} variant={'home'} />
            <Card titulo={'Projeto X'} width={'380px'} height={'350px'} variant={'home'}
              style={{
                marginTop: '-100px'
              }} />
            <Card titulo={'Projeto X'} width={'380px'} height={'350px'} variant={'home'}
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
