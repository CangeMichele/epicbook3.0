//----- CSS bootstrap
import 'bootstrap/dist/css/bootstrap.min.css';
//----- CSS
import './App.css';

//----- Componenti react
import { useState, React } from "react";
//----- Componenti react-bootstrap
import { Container } from 'react-bootstrap';
//----- Componenti react-router-dom
import { BrowserRouter, Routes, Route } from 'react-router-dom';


//----- Componenti app
import MyNavbar from './Components/MyNavbar';
import Welcome from './Components/Welcome';
// import Categorys from './Components/Categorys';
import MyFooter from './Components/MyFooter';

//----- Pages
import HomePage from './pages/HomePage';
import BookDetails from './pages/BookDetails';
import NotFound from './pages/NotFound';

//----- Context 
import { Theme, BookCategory } from './modules/Context';





//----- App.js -----
function App() {

  const [search, setSearch] = useState("");
  const handleSearch = (e) => setSearch(e.target.value); //metto la funzione nella variabile per passarla come parametro

  const [theme, setTheme] = useState('dark');
  const [category, setCategory] = useState('fantasy');

  return (
    <BrowserRouter basename='/'>

      <Theme.Provider value={[theme, setTheme]} >
        <BookCategory.Provider value={[category, setCategory]} >

          <MyNavbar search={search} handleSearch={handleSearch} />

          <Container className='myContainer'>

            <Welcome />

            <Routes>
              <Route index element={<HomePage search={search} />} />
              <Route path="*" element={<NotFound />} />
              <Route path="/details/:asin" element={<BookDetails />} />
            </Routes>

          </Container>

          <MyFooter />
        </BookCategory.Provider>
      </Theme.Provider>

    </BrowserRouter>
  );
}

export default App;
