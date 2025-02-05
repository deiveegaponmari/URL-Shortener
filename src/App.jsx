import React from 'react';
import './App.css';
import { Routes, Route } from "react-router-dom";
import Signup from './pages/Signup';
import Signin from './pages/Signin';
import Home from './pages/Home';
import Notfound from './pages/NotFound';
import EmailVerify from './pages/EmailVerify';
import ForgetPassword_Form from './pages/ForgetPassword_Form';
import UrlShort from './pages/UrlShort';
import UrlTable from './pages/UrlTable'
import { useData } from './context/data';

function App() {
  const { isLoggedIn } = useData();
  return (
    <>
      <div className='container'>
        <Routes>
          <Route Component={Home} path='/home'></Route>
          {!isLoggedIn && <>
            <Route Component={Signup} path='/'></Route>
            <Route Component={Signin} path='/login'></Route>
          </>
          }
          {
            isLoggedIn && <>
              <Route path='/urlshort'  Component={UrlShort} ></Route>
              <Route path='/showUrlTable' Component={UrlTable}></Route>
            </>
          }
          <Route Component={EmailVerify} path='/EmailVerify'></Route>
          <Route Component={ForgetPassword_Form} path='/ForgetPassword/:token'></Route>
          <Route path='*' Component={Notfound}></Route>
        </Routes>
      </div>
    </>
  )
}

export default App
/* import { useState } from 'react'

import './App.css'
import { Route, Routes } from 'react-router-dom'
import Home from './pages/Home'
import Signup from './pages/Signup'
import Signin from './pages/Signin'
import EmailVerify from './pages/EmailVerify'
import NotFound from './pages/NotFound'
import ForgetPassword from './pages/ForgetPassword'
import UrlShort from './pages/UrlShort'
import ShowUrl from './pages/ShowUrl'
import UrlTable from './pages/UrlTable'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
   <Routes>
    <Route Component={Home} path='/home'></Route>
    <Route Component={Signup} path='/'></Route>
    <Route Component={Signin} path='/signin'></Route>
    <Route Component={EmailVerify} path='/emailverify'></Route>
    <Route Component={ForgetPassword} path='/forgetpassword'></Route>
    <Route path='/urlshort'  Component={UrlShort} ></Route>
    <Route path='/showshorturl/:shortId' Component={ShowUrl}></Route>
    <Route path='/showUrlTable' Component={UrlTable}></Route>
    <Route Component={NotFound} path='*'></Route>
   </Routes>
    </>
  )
}

export default App
 */