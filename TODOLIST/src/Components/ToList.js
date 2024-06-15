import React, { useState, useEffect } from "react";
import { db } from "../firebaseConfig";
import "./ToList.css";
import Todo from "./Todo";
import { doc, getDoc, setDoc } from "firebase/firestore";
import { auth } from "../firebaseConfig";
import { onAuthStateChanged} from "firebase/auth";
import { useNavigate } from "react-router-dom";
import Modal from "./Modal";
// import { useNavigate } from 'react-router-dom';
// import LandingPage from './LandingPage';
export default function ToList() {
  const navi = useNavigate();
  const [user, setUser] = useState(null);
  useEffect(() => {
    onAuthStateChanged(auth, (user) => {
      if (user) {
        console.log("hi ", user);
        setUser(user);
      } else {
        console.log("no user");
        setUser(null);
        navi("/");
      }
    });
  }, []);
  //console.log(user);
  const [todo, setTodo] = useState("");
  const [list, setList] = useState([]);
  const [name, setName] = useState("");
  const [lname, setLname] = useState("");
  const [email,setEmail]=useState("");
  const [prof, setProf] = useState("userprofile");
  //console.log(username);
  if (user === null) {
    return <h1>Loadingg...............</h1>;
  }
  async function listUpdate() {
    const docRef = await getDoc(doc(db, "todos", user.uid));
    //console.log(docRef.data().todo);
    setList(docRef.data().todo);
    setName(docRef.data().firstname);
    setLname(docRef.data().lastname);
    setEmail(docRef.data().email);
  }
  listUpdate();
  async function addListItem() {
    if (todo.trim() === "") setTodo("");
    else {
      const updatedList = [...list, todo];
      setTodo("");
      const docRef = await getDoc(doc(db, "todos", user.uid));
      const docdata = docRef.data();
      setList(updatedList);
      await setDoc(doc(db, "todos", user.uid), {
        firstname: docdata.firstname,
        lastname: docdata.lastname,
        email: docdata.email,
        todo: updatedList,
      });
      //console.log(updatedList);}
    }
  }
  // function chnge(e) {
  //   console.log(e);
  //   setPic(e.target.files[0]);
  // }
  function showprof() {
    // const ref=document.querySelectorAll(".userprofile");
    // console.log(ref);
    // //ref.style.display='block';
    if (prof === "userprofile") {
      setProf("userprofileshow");
    } else {
      setProf("userprofile");
    }
  }
  return (
    <div className="mainpage">
      <div className="container">
        <h1 className="heading">
          <span className="namee">{name.toUpperCase()}'S</span> TO-DO LIST
        </h1>
        <div className="search">
          <input
            type="text"
            placeholder="Enter here"
            className="text1"
            value={todo}
            onChange={(e) => {
              setTodo(e.target.value);
            }}
          />
          <button onClick={addListItem} className="add">
            +
          </button>
        </div>
        {list.map((elem, index) => (
          <Todo
            key={index}
            keys={index}
            todo={elem.charAt(0).toUpperCase() + elem.slice(1)}
            updatelist={setList}
            list={list}
            user={user}
          />
        ))}
        <p className="count">You have {list.length} todos.</p>
      </div> 
      <Modal firstname={name} lastname={lname} email={email} /> 
    </div>
  );
}
