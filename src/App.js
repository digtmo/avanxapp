
import './App.css';
import Api from './Components/Api';
import { BrowserRouter, Route, Routes } from "react-router-dom";

function App() {
  return (
 
    <BrowserRouter>
    <Routes>
      <Route path='/Api'element={<Api/>}></Route>
    </Routes>
    </BrowserRouter>
 

  );
}

export default App;
