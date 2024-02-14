import axios from "axios";
import { apiKey } from "../ApiKey";
import { useEffect, useState } from "react";



const MovieSearch = () => {
    const [search, setSearch]=useState
    const movieName = 'Название фильма'
    function getMovieSearch(){
        axios(
            `https://api.themoviedb.org/3/search/movie?api_key=${apiKey}&query=batman`
        )
        .then((res)=>{
            setSearch(res.data.result)
        })
    }
    useEffect(()=>{
        
        getMovieSearch()
    },[])
    return (
       <div id="movie">
        <div className="container">
            <h2 ></h2>
            <div className="movie">
            {search.map(el => {
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
        </div>
       </div>
    );
};

export default MovieSearch;