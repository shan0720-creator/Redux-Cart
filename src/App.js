import logo from './logo.svg';
import './App.css';
import { BrowserRouter,Routes,Route } from 'react-router-dom';
import { Provider } from 'react-redux'
import Cart from './pages/Cart';
import Home from './pages/Home';
import Navbar from './components/Navbar';
import store from './store/store';
function App() {
  return (
    <div className="App">
     <Provider store={store}>
     <BrowserRouter>
     <Navbar/>
     <Routes>
      <Route path ='/' element={<Home/>}/>
      <Route path ='/cart' element={<Cart/>}/>
     </Routes>
     </BrowserRouter>
     </Provider>
    </div>
  );
}

export default App;
