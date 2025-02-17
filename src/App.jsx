
import NavBar from "./components/NavBar";
import ItemListContainer from "./components/ItemListContainer";
import LogoNike from "./img/logo-nike.png";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import ItemDetailContainer from "./components/ItemDetailContainer";

function App() {

  return (
    <>
      <BrowserRouter>
        <NavBar imgBrand={LogoNike} />
        <Routes>
          <Route path="/" element={<ItemListContainer greeting="Bienvenidos a la tienda de Nike" />} />
          <Route path="/genero/:generoId" element={<ItemListContainer />} />
          <Route path="/item/:itemId" element={<ItemDetailContainer />}/>
        </Routes>
      </BrowserRouter>

      {/* <ItemListContainer  /> */}
      {/* <Card /> */}
    </>
  )
}

export default App;




