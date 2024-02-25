import { Home } from "./pages/home/Home"
import { Projetos } from "./pages/projetos/Projetos"
import { Navbar } from "./components/navbar/Navbar"
import { PageComponent } from "./pages/PageComponent/PageComponent"

function App() {
  return (
    <>
        {/* <Home/>  */}
        <Navbar/>
        <PageComponent>
          <Projetos />

        </PageComponent>
       
    </>
  )
}

export default App
