import {useEffect, useState} from "react"
import axios from "axios";
export const Groceries = ()=>{
    const [text, setText] =useState("");
     const [groceries,setGroceries] =useState([]);
    const [page,setpage] =useState(1);
   
    useEffect(()=>{
        getData()
    },[page]);
    const getData=()=>{

        axios.get(`http://localhost:3001/list?_limit=2&_page=${page}`).then(res =>{
            setGroceries(res.data)
           });
           
    }

    return (
        <div>             
            <input type="text" onChange ={(e)=> setText(e.target.value)}/>
            <button onClick={()=>{
                fetch("http://localhost:3001/groceries",{
                method: "POST",
                body: JSON.stringify({title:text,purchase:false}),
                headers: {
                    "content-type" : "application/json"
                }
                }) 
            }} >Save Grocery</button>
           {groceries.map((g)=>(<div key={g.id}>{g.title}</div>))}
<button onClick={()=>{
    setpage(page-1)
}}>prev</button>
<button onClick={()=>{
    setpage(page+1);
}}>next</button>
        </div>
    );
} ;

