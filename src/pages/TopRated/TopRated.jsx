import React, { useEffect, useState } from 'react';
import { apiKey } from '../ApiKey';
import axios from 'axios';

const TopRated = () => {
    const [topRated,setTopRated]=useState([])
    const [next, setNext]=useState(1)
    function readTopRated(){
        window.scroll(0, 0)
        axios (
            `https://api.themoviedb.org/3/movie/top_rated?api_key=${apiKey}&language=en-US&page=${next}`
        ).then(res=>{
            console.log(res);
            setTopRated(res.data.results)

        })
    }
    useEffect (()=>{
        readTopRated()
    },[next])


    return (
       <section id="movie">
        <div className="container">
        <center><h2 >The Top Rated films</h2></center>
            <div className="movie">
             
            {topRated.map(el => {
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
             <h2 style={{display: next===1?'none':'block'}}> {next}</h2>

            <button onClick={()=>{
                setNext(next+1 )
                
             }
             }>next</button>
            
            </div>
        </div>
       </section>
    );
};

export default TopRated;