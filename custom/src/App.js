import './App.css';
import Login from './pages/Login';
import {MainProvider} from "./Context/MainContext";
import {BrowserRouter, Route,  Routes} from "react-router-dom";
import Home from "./pages/Home";
import PrivateRoute from "./middleware/PrivateRoute";
import Contact from "./pages/Contact";
import About from "./pages/About";
import Services from "./pages/Services";

function App() {
  return (
      <><BrowserRouter>
              <MainProvider>
                  <Routes>
                      <Route element={
                          <PrivateRoute >
                              <Home/>
                          </PrivateRoute>
                      }  path="/"  />
                      <Route path="/login" element={<Login/>}/>
                      <Route path="/contact" element={<Contact/>}/>
                      <Route path="/about" element={<About/>}/>
                      <Route path="/services" element={<Services/>}/>
                  </Routes>
              </MainProvider>
      </BrowserRouter>
    </>
  )
}

export default App;
