import { useState } from "react"
import { Link, useNavigate } from "react-router-dom"
import { signin } from "../services/user.service"


const SignInPage=(props)=>{
   
   const[username,setUsername]=useState('')
   const[password,setPassword]=useState('')

   const navigate=useNavigate()


   const onSignin=async()=>
   {
        if(username.length===0){
            alert('Please set username')
        }
        else if(password.length===0){
            alert('Please set password')
        }
        else
        {
            const result=await signin(username,password)
            if(result){
                alert('Success')
                const{token}=result

                //sessionStorage

                sessionStorage['token']=token
                sessionStorage['username']=username

                navigate('/blog-list')
            }
            else{
                alert('Invalid username or password')
            }
        }
   }
   
   
   
    return(
        <div>
           

            <div className="form">
    
    
     <div className="mb-3">
    <label  className="form-label">Username</label>
    <input onChange={(e)=>{
        setUsername(e.target.value)
    }
    } type="text" className="form-control" />
    </div>

    <div className="mb-3">
    <label  className="form-label">Password</label>
    <input onChange={(e)=>{
        setPassword(e.target.value)
    } }type="password" className="form-control" />
    </div>


    <div className="mb-3">
   <div>
       Don't Have an account ? Sign Up
       <Link to="/signup">Here</Link>
    </div>
    </div>

    
    <div className="mb-3">
   <button onClick={onSignin} className="btn btn-outline-success">Sign In</button>
    </div>
   



            </div>
        </div>
    )
}
export default SignInPage
