import React from 'react'
import './Todo.css'
import {db} from '../firebaseConfig'
import { doc, getDoc,setDoc } from 'firebase/firestore';
export default function Todo({keys,todo,updatelist,list,user}) {
    async function deleteItem()
    {
        //console.log("key is" + keys);
        const updatedlist=list;
        updatedlist.splice(keys,1);
        //console.log(updatedlist);
        const docRef= await getDoc(doc(db,"todos",user.uid));
        const docdata=docRef.data();
        updatelist(updatedlist);
        setDoc(doc(db,"todos",user.uid),{
         firstname:docdata.firstname,
         lastname:docdata.lastname,
         email:docdata.email,
         todo:updatedlist,
     });
    }
  return (
    <div className='todos'>
         <span className='point'>➱</span><p className='text'>{todo}</p>
         <button onClick={deleteItem} className='delete'>⌫</button>
    </div>
  )
}
