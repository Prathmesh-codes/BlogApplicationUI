import { Link } from "react-router-dom"

const SignUpPage=(props)=>
{
    return(
        <div>
            <h1 className="header">Sign Up page</h1>

            <div className="form">
    
    
     <div class="mb-3">
    <label  class="form-label">Email address</label>
    <input type="email" class="form-control" />
    </div>

    <div class="mb-3">
    <label  class="form-label">Password</label>
    <input type="password" class="form-control" />
    </div>


    <div class="mb-3">
   <div>
       Already Got an account ? Sign In
       <Link to="/signin">Here</Link>
    </div>
    </div>

    
    <div class="mb-3">
   <button className="btn btn-success">Sign Up</button>
    </div>
   



            </div>
        </div>
    )
}
export default SignUpPage