import React from "react";
import "./SignUp.css";
import { Link, useNavigate } from "react-router-dom";
//import {ref,set} from 'firebase/database';
import { createUserWithEmailAndPassword } from "firebase/auth";
import { auth, db } from "../firebaseConfig";
import { doc, setDoc } from "firebase/firestore";
// const database = getDatabase(app);
// const auth=getAuth(app);
export default function SignUp() {
  const navigate = useNavigate();
  const userAuth = async (e) => {
    e.preventDefault();
    const fname = e.target.fname.value;
    const lname = e.target.lname.value;
    const email = e.target.email.value;
    const pass = e.target.pass.value;
    // const phone=e.target.phone.value;
    //console.log(fname+lname+email+pass);
    // const dob=e.target.dob.value;
    try {
      const userCred = await createUserWithEmailAndPassword(auth, email, pass);
      alert("Succesfully signed up as " + fname + " " + lname);
      const user = userCred.user;
      console.log("New user created with credentials : ", user);
      const docRef = doc(db, "todos", user.uid);
      setDoc(
        docRef,
        {
          firstname: fname,
          lastname: lname,
          email: email,
          todo: [],
        },
        { merge: true }
      );
      navigate("/login");
    } catch (message) {
      alert(message);
    }
  };
  return (
    <div className="bodysignup2">
      <h2 className="signuphead">REGISTRATION</h2>
      <br></br>
      <form action="/" onSubmit={(e) => userAuth(e)}>
        <div className="container3">
          <div className="row">
            <input
              type="text"
              id="fname"
              name="fname"
              className="inp"
              placeholder="First Name"
            />
          </div>
          <div className="row">
            <input
              type="text"
              id="lname"
              name="lname"
              className="inp"
              placeholder="Last Name"
            />
          </div>
          <div className="row">
            <input
              type="email"
              id="email"
              name="email"
              className="inp"
              placeholder="example@gmail.com"
            />
          </div>
          <div className="row">
            <input
              type="password"
              id="password"
              name="pass"
              className="inp"
              placeholder="Password"
            />
          </div>
          <button className="sub" type="submit">
            SignUp
          </button>
          <div className="row">
            <span id="t1">
              Already a user? <Link to="/login"> Login here!</Link>
            </span>
          </div>
        </div>
      </form>
    </div>
  );
}
