import './App.css';
import Home from './pages/Home';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Header from './component/header/Header';
import Content2 from './component/Content2';

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
       <Route path = "/contents" element = {<Content2/>}  />
      </Routes>
    </BrowserRouter>
  </> 
  );
}

export default App;
