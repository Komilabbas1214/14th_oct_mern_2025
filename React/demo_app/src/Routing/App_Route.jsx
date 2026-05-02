/*
Create React App doesn't include page routing.

React Router is the most popular solution.

Add React Router
To add React Router in your application, run this in the terminal from the root directory 
of the application:

npm i -D react-router-dom 

*/


import React from 'react'
import Index from './Pages/Index'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import About from './Pages/About'
import Blog from './Pages/Blog'
import Contact from './Pages/Contact'
import Header from './Component/Header'
import Footer from './Component/Footer'

function App_Route() {
  return (
    <div>
       <BrowserRouter>
            <Routes>
                <Route path="/" element={<><Header title="Home Page" /><Index/><Footer/></>}></Route>
                <Route path="/about" element={<><Header title="About Page"/><About/><Footer/></>}></Route>
                <Route path="/blog" element={<><Header title="Blog Page"/><Blog/><Footer/></>}></Route>
                <Route path="/contact" element={<Contact/>}></Route>
            </Routes>
       </BrowserRouter>
    </div>
  )
}

export default App_Route