import axios from "axios";
import { useEffect, useState } from "react";
import { apiKey } from "../ApiKey";


const Popular = () => {
    const [popular,setPopular]=useState([])
    const [next, setNext]=useState(1)
    function readPopular(){
        axios (
            `https://api.themoviedb.org/3/movie/popular?api_key=${apiKey}&language=en-US&page=${next}`
        ).then(res=>{
            console.log(res);
            setPopular(res.data.results)

        })
    }
    console.log(popular);
    useEffect (()=>{
        readPopular()
    },[next])


    return (
       <section id="movie">
        <div className="container">
        <center><h2>The popular films</h2></center>
            <div className="movie">
             
            {popular.map(el => {
    return (
        <div className="movie-block" key={el.id}>
          
             <div className="movie-card">
             <img 
                  src={`https://media.themoviedb.org/t/p/w220_and_h330_face${el.poster_path}`}
  
                  alt={el.title}
              />
              <h3>{el.title.length > 100 ? "<br/>" : el.title}</h3>
             </div>
        </div> 
    );
})}
            </div>
            <div className="next-back">
            <button style={{display: next===1?'none':'block'}}
              onClick={()=>{
                if (next>1)(
                    setNext(next-1)
                )
             }}>back</button>

             <h3 style={{display: next===1?'none':'block'}}>{next}</h3>

            <button onClick={()=>{
                setNext(next+1)
             }
             }>next</button>
            
            </div>
        </div>
       </section>
    );
};

export default Popular;