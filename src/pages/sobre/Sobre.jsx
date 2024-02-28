import './Sobre.css'
import { Card } from '../../components/Card/Card'



const Sobre = () => {




  return (
    <>
      <div className="sobre">
        <div className="quem">
          <div className="apresentacao">
            <h2> Quem sou eu?</h2>
            <p>
              Meu nome é Pedro Castelo, tenho 17 anos e sou desenvolvedor de sistemas e programador freelancer. Sou focado no Back-end.
            </p>
          </div>
          <div className="img">
            <img src="" alt="" />
          </div>
        </div>

        <div className="jornada">
          <h2>Minha jornada</h2>
          <div className="journeyCards">

            <Card
              width={"244px"}
              height={"190px"}
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
              width={"244px"}
              height={"190px"}
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
              width={"244px"}
              height={"190px"}
              variant={"journey"}
              titulo={"HOJE EM DIA..."}
              style={{
              }}

            >
              <p>
              Com tudo que eu estudei e aprendi sobre em relação a programação, começei a colocar tudo em prática e ir procurar empregos e projetos freelancers. E isso mudou minha vida totalmente
              </p>

            </Card>
          </div>
        </div>
      </div>


    </>
  )
}

export { Sobre }
