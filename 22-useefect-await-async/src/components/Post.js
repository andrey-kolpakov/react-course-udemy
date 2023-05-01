function Post({title, body, id}){
    

    return(

        <div className="card">
            <p>{id}</p>
            <h2>{title}</h2>
            <p>{body}</p>
        </div>
        
    )
}

export default Post