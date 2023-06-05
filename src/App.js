import React, { useEffect, useState } from "react";
import './App.css';
import Card from "./Components/Card";
import SearchIcon from "./search.png";

//f2ad7848

const API_URL= "https://www.omdbapi.com/?apikey=f2ad7848";


const App = ()=>{
    const [movies,setMovies] = useState([]);
    const [search,setSearch] = useState("Spider");

    const searchMovies= async ($title)=>{
        const response = await fetch(`${API_URL}&s=${$title}`);
        const data = await response.json();

        setMovies(data.Search);
    };


    useEffect(()=>{
        searchMovies(search);
    },[]);
    return (
        <div className="app">
        <h1>Movie Land</h1>
        <div className="search">
            <input 
                placeholder="Search"
                value={search}
                onChange={event => setSearch(event.target.value)}
            />
            <img src={SearchIcon} 
            onClick={()=>{ searchMovies(search)}}
            />
        </div>
        <div className="container">
            {
                movies?.length > 0 ? 
                (
                    <div className="container">
                        {
                            movies.map((movie)=>(
                                <Card movie1={movie}/>
                            ))
                        }
                    </div>
                ) : (
                    <div className="empty">
                        <h2>Empty</h2>
                    </div>
                )
            }
        </div>
        </div>
    );
}

export default App;