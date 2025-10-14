import 'bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter, Navigate, Route, Routes } from 'react-router-dom';
import { BarraNav } from './componentes/BarraNav/BarraNav.jsx';
import ItemListContainer from './componentes/ItemListContainer/ItemListContainer.jsx';
import ItemDetailContainer from './componentes/ItemDetailContainer/ItemDetailContainer.jsx';
import BotonesInicio from './componentes/BotonesInicio/BotonesInicio.jsx';
import Footer from './componentes/Footer/Footer.jsx';


function App() {
  return (

    <BrowserRouter>
      <BarraNav></BarraNav>
      <Routes>
        <Route path='/' element={<BotonesInicio />} />
        <Route path='/productos/:categoryId' element={<ItemListContainer />} />
        <Route path='/detail/:itemId' element={<ItemDetailContainer />} />
        <Route path='*' element={<Navigate to={"/"} />} />
      </Routes>
      <Footer></Footer>
    </BrowserRouter>

  )
}

export default App;
