import { Home } from "./pages/home/Home"
import { Projetos } from "./pages/projetos/Projetos"
import { Navbar } from "./components/navbar/Navbar"
import { PageComponent } from "./pages/PageComponent/PageComponent"
import { Sobre } from "./pages/sobre/Sobre"
import { Footer } from "./components/Footer/Footer"
import { AllProjetos } from "./pages/AllProjetos/AllProjetos"

function App() {
  return (
    <>
      {/* <Home/>  */}
      <Navbar />
      <PageComponent>
        <Projetos />
        <Sobre />
        <AllProjetos />
      </PageComponent>
      <Footer />
      
      

    </>
  )
}

export default App
