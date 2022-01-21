import './App.css';
import Home from './pages/Home';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Header from './component/header/Header';
import Data from './component/Data';
import Data2 from './component/Data2';
import Data3 from './component/Data3';

function App() {

  const Layout = ({ children }) => {
    return (
      <>
       
        {children}

      </>
    )
  }
  return (
    <>
     <Header/>
    <BrowserRouter>
      <Routes>
        <Route path='/' element={  <Home/> }  />
       <Route path = "/contents" element = {<Data/>}  />
       <Route path = "/contents2" element = {<Data2/>}  />
       <Route path = "/contents3" element = {<Data3/>}  />
      </Routes>
    </BrowserRouter>
  </> 
  );
}

export default App;
