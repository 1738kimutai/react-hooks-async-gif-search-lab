import React, { useState }  from "react";

export default function GifSearch({onSubmit}){
    const [input,setInput]=useState("")
    const handleChange=(e)=>{
        setInput(e)
    }
    const Submit =(e)=>{
        e.preventDefault()
        onSubmit(input)
        
    }
return(
<div>

    <h1>Enter a Search Term :</h1>
    
    <input  className="form-control" onChange={e=>handleChange(e.target.value)} />
    <button  className="btn btn-success" onClick={Submit}>Find Gifs</button>
</div>
)
}
