import React, { useState } from "react";
import { auth } from "../firebaseConfig";
import { signOut } from "firebase/auth";
import "./Modal.css";
export default function Modal({ firstname, lastname, email }) {
  const [modal, setModal] = useState(false);

  const toggleModal = () => {
    setModal(!modal);
  };

  if (modal) {
    document.body.classList.add("active-modal");
  } else {
    document.body.classList.remove("active-modal");
  }

  return (
    <>
      <button onClick={toggleModal} className="btn-modal">
        {/* Open */}
      </button>

      {modal && (
        <div className="modal">
          <div onClick={toggleModal} className="overlay"></div>
          <div className="modal-content">
            <h2>
              Hello {firstname} 
            </h2>
            <p>
              FULL NAME: {firstname} {lastname}
            </p>
            <p>EMAIL: {email}</p>
            
            <div className="btn">
             <div className="logout"> <button onClick={() => signOut(auth)}>LOGOUT</button></div>
              <button className="close-modal" onClick={toggleModal}>
                CLOSE
              </button>
            </div>
          </div>
        </div>
      )}
    </>
  );
}
