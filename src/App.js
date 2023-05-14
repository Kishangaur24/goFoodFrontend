
import './App.css';
import HomePage from './Page/Homepage/HomePage';
import 'bootstrap/dist/css/bootstrap.min.css';
import {BrowserRouter, Route, Routes} from 'react-router-dom'
import Login from './Page/Login/Login';
import Navigationbar from './component/Navigationbar';
import SignUp from './Page/SignUp/SignUp';
import { CartProvider } from './component/ContextReducer';
import MyOrder from './Page/MyOrder';


function App() {
  return (
    <div >
      <CartProvider>
      <BrowserRouter>
      <Navigationbar/>
      <Routes>
        
       <Route  path='/' element={<HomePage/>}/>
       <Route  path='/login' element={<Login/>}/>
       <Route  path='/createuser' element={<SignUp/>}/>
       <Route  path='/myOrder' element={<MyOrder/>}/>
      </Routes>
      </BrowserRouter>
      </CartProvider>
    </div>
  );
}

export default App;
