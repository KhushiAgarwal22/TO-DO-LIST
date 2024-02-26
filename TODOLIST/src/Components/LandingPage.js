import React from 'react'
import './LandingPage.css'
import {Link} from 'react-router-dom'
export default function LandingPage() {
  return (
    <div className='container2'>
         <div className="picture">
              <img src="todo.gif" alt="TO-LIST"></img>
         </div>
         <div className="head">
           <h1 className='appName'>{"<<"} TO-DOM {">>"}</h1>
           <div className="about">
            <p>Your one stop solution to manage responsibilities.</p>           
                <p>☑ Add your task.</p>
                <p>☑ Swipe off on Completion</p>            
            <div className='btn-log'>
            <button className='loginsignup'><Link className="linkk" to='/login'>LOGIN</Link></button>
            <button className='loginsignup'><Link className="linkk" to='/signup'>SIGNUP</Link></button>
            </div>
           </div>
         </div>

    </div>
  )
}