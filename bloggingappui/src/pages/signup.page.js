import { useState } from "react"
import { Link, useNavigate } from "react-router-dom"
import { signup } from "../services/user.service"

const SignUpPage=(props)=>
{
//Keep Email address
const[username,setUsername]=useState('')
const[password,setPassword]=useState('')

//For navigation

const navigate =useNavigate()

const onSignup=async ()=>{
    if (username.length===0){
        alert('Please enter email')
    }
    else if (password.length===0){
        alert('Please Enter Password')
    }
    else{
        //Make the SignUp API Call
const result=await signup(username,password)
if (result){

    //go to sign in
    navigate('/signin')

}

    }

}

    return(
        

        
        <div>
            <div className="form">
    
    
     <div className="mb-3">
    <label  className="form-label">Username </label>
    <input onChange={(e)=>{
setUsername(e.target.value)
    }} 
type="text" className="form-control" />
    </div>

    <div className="mb-3">
    <label  className="form-label">Password</label>
    <input onChange={(e)=>{
setPassword(e.target.value)
    }} 
    type="password" className="form-control" />
    </div>


    <div className="mb-3">
   <div>
       Already Got an account ? Sign In
       <Link to="/signin">Here</Link>
    </div>
    </div>

    
    <div className="mb-3">
   <button onClick={onSignup} className="btn btn-outline-success">Sign Up</button>
    </div>
   



            </div>
        </div>
    
    )
}
export default SignUpPage
