import React, { useEffect, useState }  from "react";
import GifList from "./GifList";
import GifSearch from "./GifSearch";

function GifListContainer(){
const [data,setData]=useState([])   
const [query, setQuery] = useState("dolphins");

useEffect(()=>{
 
    let key='1sqy9hbuRPHcA9xw9dfoPaeYVInG6NCi'
fetch(`https://api.giphy.com/v1/gifs/search?q=${query}&api_key=${key}`).then(data=>data.json())
.then(({data})=>
   {
     
const gifs=data.map(gif=>({url:gif.images.original.url}))
 
   setData(gifs)  }
    )
},[query])




    return(


<div style={{display:"flex"}}>

<GifList data={data}/>
<GifSearch onSubmit ={setQuery} />

</div>
)
}
export default GifListContainer;