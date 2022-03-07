import axios from "axios"
import { settings } from "../config"

export const getBlogs=async()=>{
    const url= settings.server+'/blog/'
    const token= sessionStorage['token']

    let response 
try{

    response= await axios.get(url,{
        headers:{
            Authorization:
            `Bearer ${token}`,
        },
    })

    response=response.data

}
catch(ex){
    console.log(ex)
}
return response
}



export const createBlog=async(title, description,tags)=>{
    const url= settings.server+'/blog/'
    const token= sessionStorage['token']

    let response 
try{

    response= await axios.post(url,{

        title,
        description,
        tags,


    },{
        headers:{
            Authorization:
            `Bearer ${token}`,
        },
    })

    response=response.data

}
catch(ex){
    console.log(ex)
}
return response
}