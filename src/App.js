import logo from './logo.svg';
import './App.css';
import 'bootstrap/dist/css/bootstrap.css';
import { Header } from './Header/Header.js';
import { Footer } from './Footer/Footer';
import { Menu } from './Menu/Menu';
import { createBrowserRouter,RouterProvider,Navigate } from 'react-router-dom';
import Home from './Home';
import About from './About';
import Contact from './Contact';

function App() {
  const router=createBrowserRouter([
    {
      path:'home',
      element:<Home />
    },
    {
      path:'about',
      element:<About />
    },
    {
      path:'contact',
      element:<Contact />
    },
    {
      path:'*',
      element:<Navigate to='home' />
    }
  ])

  return (
    <div className="App">
       <Header />  
       <Menu />
       <RouterProvider router={router} />
       <Footer />
    </div>
  );
}

export default App;
