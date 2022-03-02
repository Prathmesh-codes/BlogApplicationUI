import { Link } from "react-router-dom"

const SignInPage=(props)=>{
    return(
        <div>
            <h1 className="header">Sign In page</h1>

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
       Don't Have an account ? Sign Up
       <Link to="/signup">Here</Link>
    </div>
    </div>

    
    <div class="mb-3">
   <button className="btn btn-success">Sign In</button>
    </div>
   



            </div>
        </div>
    )
}
export default SignInPage