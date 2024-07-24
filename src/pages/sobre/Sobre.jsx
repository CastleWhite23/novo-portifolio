import './Sobre.css'
import { Card } from '../../components/Card/Card'
import img from '../../assets/imgs/me.jfif'



const Sobre = () => {




  return (
    <>
      <div className="sobre" id='sobre'>
        <div className="quem">
          <div className="apresentacao">
            <h2> Quem sou eu?</h2>
            <p>
              Meu nome é Pedro Castelo, tenho 17 anos e sou desenvolvedor de sistemas e programador freelancer.
            </p>
          </div>
          <div className="img">
            <img src={img} alt="" />
          </div>
        </div>

        <div className="jornada">
          <h2>Minha jornada</h2>
          <div className="journeyCards">

            <Card

              variant={"journey"}
              titulo={"13 anos..."}
              style={{
              }}

            >
              <p>
                Começei a descobrir o que realmente gostava de fazer quando tinha 13 anos, assitindo os vídeos do Gustavo Guanabara e praticando python.
              </p>

            </Card>
            <Card
  

              variant={"journey"}
              titulo={"ETEC FP"}
              style={{
              }}

            >
              <p>
              Quando fui para o ensino médio na ETEC Fernando Prestes, também fiz um curso técnico em Desenvolvimento de Sistemas, onde aprendi muito mais sobre esse mundo de programação
              </p>

            </Card>
            <Card

              variant={"journey"}
              titulo={"HOJE EM DIA..."}
              style={{
              }}

            >
              <p>
              Com tudo que eu estudei e aprendi sobre em relação a programação, começei a colocar tudo em prática e ir procurar empregos e projetos freelancers.
              </p>

            </Card>
          </div>
        </div>
      </div>


    </>
  )
}

export { Sobre }
