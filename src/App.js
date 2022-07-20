import './App.css'; 
import {useState} from 'react'
import {BrowserRouter,Routes,Route,} from "react-router-dom";
import Login from './pages/Login'
import CreatePost from './pages/CreatePost'
import MyGallery from './pages/MyGallery'
import Nav from './Nav'
import Home from './pages/Home'
function App() {
const[isAuth,setIsAuth]=useState(localStorage.getItem("isAuth"))

  return (
   <BrowserRouter>
      <div className='App' >
        <Nav isAuth={isAuth}setIsAuth={setIsAuth}/>
         <Routes>
          <Route path="/" element={<Home isAuth={isAuth} />} />
          <Route path="Login" element={<Login setIsAuth={setIsAuth}/>} />
          <Route path="CreatePost" element={<CreatePost  isAuth={isAuth}/>} />
          <Route path="MyGallery" element={<MyGallery/>} />


        </Routes>
      </div>
    </BrowserRouter>

  );
}

export default App;
