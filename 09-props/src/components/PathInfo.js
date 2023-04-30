function PathInfo({type, age}){
   
    // const {type, age} = props 
    //Можно и так деструктурировать свойства (объект)

    return(
        <div>
            <h1>my {type} is {age} years old</h1>
        </div>
    )
}

export default PathInfo