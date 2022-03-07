const Blog=(props)=>{
    const{id,title,description,tags}=props
    
    return <div className="card" style={{width:'25rem', display: 'inline-block', margin:'10px', height:'250px'}} >
        <div className="card-body">
    <h5 className="card-title">{title}</h5>
    <p className="card-text">{description}</p>
    <p className="card-text">{tags}</p>
 
  </div>
    
    
    
    
    </div>
}
export default Blog