import Home from "./comprnents/Home";
import Edit from "./comprnents/Edit";
import PageNotFound from "./comprnents/PageNotFound";
import Header from "./comprnents/Header";
import Info from "./comprnents/Info";
import '../src/css/home.css';
import {BrowserRouter, Routes, Route} from 'react-router-dom';
import { auth } from "./firebase_config";
import { signInWithPopup, GoogleAuthProvider, signOut } from "firebase/auth";
import { useState,useEffect } from "react";

function App() {

  const [userInfo,setUserInfo] = useState(null);

  useEffect(function() {
    auth.onAuthStateChanged(function(user){
      if(user){//login
        setUserInfo(user);
      }else{//user=null => Logout
        setUserInfo(null);
      }
    })
  } ,[]);

  function login() {
    const provider = new GoogleAuthProvider();
    auth.languageCode = 'th';
    signInWithPopup(auth, provider)
    .then(result =>{})
    .catch(eror =>{alert(eror)});
    }
  
    function logout(){
      signOut(auth)
      .then(result =>{})
      .catch(eror =>{alert(eror)});
    }

  return (
    <div id="H" className="text-warning bg-black " >            
    <div className="container">
      <h1 className="text-center text-white bg-info">Firestore DB</h1>
      <BrowserRouter>
      <Header user={userInfo} login={login} logout={logout}/>
      <Routes>
        <Route path="/" element={<Info user={userInfo}/>} />
        <Route path="/Home" element={<Home/>} /> 
        <Route path="/Header" element={<Header/>} /> 
        <Route path="/edit" element={<Edit/>} />
        <Route path="/*" element={<PageNotFound/>} />
      </Routes>
      </BrowserRouter>
    </div>
    </div>
  );
}

export default App;
