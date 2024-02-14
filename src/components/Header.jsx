import React from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { Navigate } from 'react-router-dom';
// import ('https://fonts.googleapis.com/css2?family=Protest+Revolution&display=swap');


const Header = ({setValue}) => {
    const nav = useNavigate
    function navigate(){
        nav('/search')
    }
    return (
        <header>
        <div className="container">
            <div className="header">
                <h1>Tolobekoff</h1>
                <input onChange={(e)=>{
                    setValue(e.target.value)
                }}
                
                type="text" placeholder="Write here..." name="text" class="input"></input>
                <button onClick={()=>{
                    navigate()
                }}>search</button>
                <nav>
                <Link to="/">Home</Link>
                <Link to="/popular">Popular</Link>
                <Link to="/top">Top Rated</Link>
                <Link to="/contact">Contact</Link>


                </nav>
            </div>
        </div>
       </header>
    );
};

export default Header;