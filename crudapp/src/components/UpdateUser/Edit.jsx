 import React, { useEffect, useState } from 'react'
import { Link, Navigate, useNavigate, useParams } from 'react-router-dom'
import "./Edit.css"
import axios from 'axios'
import toast from 'react-hot-toast'
import User from '../getUser/User'
 
 const Edit = () => {

    const users = {
        fname:"",
        lname:"",
        email:""
    }
    
    const {id} = useParams();
    const navigate = useNavigate();
    const [user, setUser] = useState();


    const inputChangeHandler = (e) =>{
        const {name,value} = e.target;
        setUser({...user, [name]:value});
        console.log(user);
     }

     useEffect(() =>{                                                                       ///for fetching data axios is used
        axios.get(`http://localhost:3005/api/getone/${id}`)
        .then((reasponse) =>{
                setUser(reasponse.data);
        }).catch((error) => {
            console.error(error);
        })
     },[id])

     const submitForm = async (e) =>{
        e.preventDefault();
        await axios.put( `http://localhost:3005/api/update/${id}`,user)
        .then((response)=>{
             toast.success(response.data.msg,{position:"top-right"})
             navigate("/")
        }).catch(error => console.log(error))
     }



    
   return (
    <div className="AddUser">
     <Link to={"/"}>Back</Link>
   <h3>Update User</h3>
    <form className="addUserForm" onSubmit={submitForm} >
   <div className="inputGroup">
       <label htmlFor="fname">First Name</label>
       <input type='text'  onChange={inputChangeHandler} id="fname"   name='fname' autoComplete='off' placeholder='First Name'></input>
   </div>
   <div className="inputGroup">
       <label htmlFor="lname">Last Name</label>
       <input type='text'   onChange={inputChangeHandler} id='lname'  name='lname' autoComplete='off' placeholder='Last Name'></input>
   </div>
   <div className="inputGroup">
       <label htmlFor="email">Email Address</label>
       <input type='email'   onChange={inputChangeHandler} id='email'   name='email' autoComplete='off' placeholder='Email address'></input>
   </div>
    
   <div className="inputGroup">
       <button type='submit'> Update User</button>
   </div>
   </form>
   </div>
   )
 }
 
 export default Edit