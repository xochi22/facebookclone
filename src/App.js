import React from 'react';
import './App.css';
import { BrowserRouter,Routes,Route} from 'react-router-dom';
import LoginPage from './LoginPage/LoginPage';
import HeaderArea from './HeaderArea/HeaderArea';


function App() {
  return (
  
    <div className="App">
     <BrowserRouter>
     <Routes>
      <Route index element ={<LoginPage/>}/>
      <Route path='/LoginPage' element={<LoginPage/>}/>
      <Route path='/HeaderArea' element={<HeaderArea/>}/>
      </Routes>
     </BrowserRouter>
    </div>
  );
}

export default App;
