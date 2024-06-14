import React from "react";
//import "./SignUp.css";
import { Link ,useNavigate} from "react-router-dom";
// import {getDatabase} from 'firebase/database';
import {signInWithEmailAndPassword} from'firebase/auth';
//import { doc, getDoc} from "firebase/firestore";
import {auth} from '../firebaseConfig';
// const database = getDatabase(app);
// const auth=getAuth(app);

export default function LogIn() {
  const navigate=useNavigate();
  const userAuth= (e)=>{
    e.preventDefault();
      const email=e.target.email.value;
      const pass=e.target.pass.value;
     signInWithEmailAndPassword(auth,email,pass)
      .then((userCred)=>{
        alert("SuccessFully logged In succesfully ");
        navigate('/todo');
      })
      .catch((error)=>{
        alert(error);
      })
  }
  return (
    <div className="bodysignup">
    <form  onSubmit={(e)=>userAuth(e)}>
      <h1 className="heading2">LOGIN INTO ACCOUNT</h1>
      <div className="container3">
          <div className="row">
            <input className="inp" type="email" id="email" name="email" placeholder="example@mail.com" />
          </div>
          <div className="row">
            <input className="inp" type="password" id="password" name="pass" placeholder="Password" />
          </div>
          <button className="sub">LogIn</button>
          <div className="row">
            <span id="t1">
              New user? <Link to="/signup"> SignUp here!</Link>
            </span>
          </div>
      </div>
    </form>
    </div>
  );
}