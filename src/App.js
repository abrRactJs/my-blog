
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.css';
import Footer from './Component/Footer/Footer';
import Header from './Component/Header/Header';
import Home from './Component/Home/Home';
import HomePage from './Component/HomePage/HomePage';
import More from './Component/More/More';
import NotFound from './Component/NotFound/NotFound';
import ReadMore from './Component/ReadMore/ReadMore';

function App() {
  return (
    <div className="App">
       <Header></Header>
       <BrowserRouter>
          <Routes>
             <Route path='/home' element={ <HomePage/> } />
             <Route path='/' element={ <HomePage/> } />
             <Route path='blog' element={ <Home/> } />
             <Route path='/Blog/:id' element={ <ReadMore/> } />
             <Route path='/more' element={<More/>} />
             <Route path="/*" element={ <NotFound/> } />
          </Routes>
       </BrowserRouter>
       <Footer></Footer>
    </div>
  );
}

export default App;
