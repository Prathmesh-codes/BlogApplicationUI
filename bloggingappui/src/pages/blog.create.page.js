import { useState } from "react"
import { Link, useNavigate } from "react-router-dom"
import { createBlog } from "../services/blog.service"

const CreateBlogPage=(props)=>{
    

  
    const[title,settitle]=useState('')
    const[description,setdescription]=useState('')
    const[tags,settags]=useState('')
    
    const cancel=()=>{

    

        //redirect to signIn
    
        navigate('/blog-list')
    
    }
 
    const navigate=useNavigate()
 
 
    const onCreateBlog=async()=>
    {
         if(title.length===0){
             alert('Please set title to the blog')
         }
         else if(description.length===0){
             alert('Please set description')
         }
         else
         {
             const result=await createBlog(title,description,tags)
             if(result){
              
                 navigate('/blog-list')
             }
          
         }
    }
    
    
    
     return(


        <><nav className="navbar navbar-expand-lg navbar-light bg-light">
             <div className="container-fluid">
               
                 <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
                     <span className="navbar-toggler-icon"></span>
                 </button>
                 <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
                     <div className="navbar-nav">
                         <a className="nav-link active" aria-current="page" href="./blog-list">Blog List Page</a>
                         <a className="nav-link" href="./signin">Logout</a>
                     </div>
                 </div>
             </div>
         </nav>
         
         <div>
                

                 <div className="form">


                     <div className="mb-3">
                         <label className="form-label">Title</label>
                         <input onChange={(e) => {
                             settitle(e.target.value)
                         } } type="text" className="form-control" />
                     </div>

                     <div className="mb-3">
                         <label className="form-label">Description</label>
                         <textarea onChange={(e) => {
                             setdescription(e.target.value)
                         } } rows={5} type="text" className="form-control">
                         </textarea>
                     </div>



                     <div className="mb-3">
                         <label className="form-label">Tags</label>
                         <input onChange={(e) => {
                             settags(e.target.value)
                         } } type="text" className="form-control" />
                     </div>


                     <div className="mb-3">
                         <button onClick={onCreateBlog} className="btn btn-outline-success">Create Blog</button>
                         <button onClick={cancel} style={{ float: 'right' }} className="btn btn-outline-danger">Cancel</button>



                     </div>





                 </div>
             </div></>
     )





}
export default CreateBlogPage