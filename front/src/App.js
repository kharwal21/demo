
import './App.css';
import Navbar from './compo/Navbar';
import { BrowserRouter ,Route ,Routes } from 'react-router-dom';
import Footer from './compo/Footer';
import Signup from './compo/Signup';
import Privatecomp from './compo/Privatecom';
import Login from './compo/Login';
import Add from './compo/Add';
import Products from './compo/Products';
import Update from './compo/Update';
import Home from './compo/Home';
function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Navbar />
          <Routes>
            <Route element={<Privatecomp />}>
              <Route path="/" element={<Home/>} />
              <Route path="/Products" element={<Products/>} />
              <Route path="/Add" element={<Add/>} />
              <Route path="/Update/:id" element={<Update/>} />
              <Route path="/Logout" element={<h1>jedgyf</h1>} />
              </Route>
              <Route path="/Signup" element={<Signup/>} />
              <Route path="/Login" element={<Login/>} />
          </Routes>
          <Footer />
     </BrowserRouter>
    </div>
  );
}

export default App;
