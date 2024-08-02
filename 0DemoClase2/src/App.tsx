import './App.css'
import Saludos from './Components/Saludos'
import Producto from './Components/Producto'
import ListUseExample from './Components/ListUseExample/ListUseExample'

function App() {
  

  return (
    <>
    <Saludos name="Felipe Hernández"><p>Hola soy el children</p></Saludos>
    <Producto name="Peine" description="Muy funcional" price={50} />
    <ListUseExample />
    </>
  )
}

export default App
