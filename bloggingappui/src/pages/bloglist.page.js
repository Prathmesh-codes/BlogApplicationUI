import { useEffect, useState } from "react"
import { Link, useNavigate } from "react-router-dom"
import Blog from "../components/blog.component"
import { getBlogs } from "../services/blog.service"

const BlogListPage=(props)=>{
    const [blogs, setBlogs]=useState([])
    const navigate=useNavigate()

useEffect(()=>{
getAllBlogs()
},[])


//Load TAsks By calling Get API
const getAllBlogs=async()=>{
   const result= await getBlogs()

if(result){
    setBlogs(result)
}

     
   
}


//LogOut

const logout=()=>{
    sessionStorage.removeItem('token')
    sessionStorage.removeItem('username')

    //redirect to signIn

    navigate('/signin')

}

const createblog=()=>{
    

    //redirect to signIn

    navigate('/blog-create')

}
    return(


        <><nav className="navbar navbar-expand-lg navbar-light bg-light">
            <div className="container-fluid">
               
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
                    <div className="navbar-nav">
                        <a className="nav-link active" aria-current="page" href="./blog-create">Create blog</a>
                        <a className="nav-link" href="./signin">Logout</a>
                      
                       
                    </div>
                </div>
            </div>
        </nav>
        
        <div>

     


                {blogs.map(blog => {
                    const { id, title, description, tags } = blog
                    return <div>

                        <Blog id={id} title={title} description={description} tags={tags} />

                    </div>
                })}
                {/* <div>
        <button onClick={logout} style={{float: 'right'}} className="btn btn-outline-danger">Logout</button>
    </div>

    <div>

    <button onClick={createblog} style={{float: 'left' }} className="btn btn-outline-success"> Create New Blog</button>

    </div> */}




            </div></>
        
    )
}
export default BlogListPage
