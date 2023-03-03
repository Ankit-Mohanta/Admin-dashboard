import React, { useState } from 'react'
import "./New.scss"
import { Navbar } from '../../Components/Navbar/Navbar'
import { Sidebar } from '../../Components/Sidebar/Sidebar'
import DriveFolderUploadOutlinedIcon from '@mui/icons-material/DriveFolderUploadOutlined'
import { doc, serverTimestamp, setDoc } from "firebase/firestore"; 
import { db,auth } from '../../firebase'
import { createUserWithEmailAndPassword } from 'firebase/auth';


export const New = ({input,title}) => {

  const [file,setFile] = useState("");
  const [data,setData] = useState({});

  const handleInput =(e)=>{
    const id=e.target.id;
    const value=e.target.value;
    setData({...data,[id]:value});
  }

  const handleAdd=async(e)=>{
    e.preventDefault();
    try {
      const res = await createUserWithEmailAndPassword(auth,data.email,data.password);
      // Add a new document in collection "cities"
      await setDoc(doc(db, "users",res.user.uid), {
      ...data,
      timeatamp: serverTimestamp()
      });
    } catch (error) {
      console.log(error);
    }
  }

  return (
    <div className='new'>
      <Sidebar/>
      <div className="newContainer">
        <Navbar/>
        <div className="top">
          <h1>{title}</h1>
        </div>
        <div className="bottom">
          <div className="left">
            <img src={file?URL.createObjectURL(file):"https://cdn.pixabay.com/photo/2021/11/30/08/24/strawberries-6834750_960_720.jpg"} alt="" />
          </div>
          <div className="right">
            <form onSubmit={handleAdd}>
              <div className="formInput">
                <label htmlFor="file">
                  image: <DriveFolderUploadOutlinedIcon className='icon'/>
                </label>
                <input type="file" id='file' onChange={e=>setFile(e.target.files[0])} style={{display:"none"}}/>
              </div>
              {input.map(input=>(
              <div className="formInput" key={input.id}>
                <label htmlFor="">{input.label}</label>
                <input type={input.type} placeholder={input.placeholder} onChange={handleInput}/>
              </div>    
              ))}
              <button type="submit">send</button>
            </form>
          </div>
        </div>
      </div>
    </div>
  )
}
