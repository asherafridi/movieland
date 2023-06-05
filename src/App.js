import React, { useEffect } from "react";
import './App.css';
import Card from "./Components/Card";

//f2ad7848

const API_URL= "https://www.omdbapi.com/?apikey=f2ad7848";


const movie1={
    "Title": "Main Tera Hero",
    "Year": "2014",
    "imdbID": "tt2762334",
    "Type": "movie",
    "Poster": "https://m.media-amazon.com/images/M/MV5BZjBiYWU0ZmMtZDE0NC00ZTUxLWE3OTQtY2YyNjVjMTRlOGJjXkEyXkFqcGdeQXVyODE5NzE3OTE@._V1_SX300.jpg"
};
const App = ()=>{

    const searchMovies= async ($title)=>{
        const response = await fetch(`${API_URL}&s=${$title}`);
        const data = await response.json();

        console.log(data.Search);
    };


    useEffect(()=>{
        searchMovies("Main Tera");
    },[]);
    return (
        <div className="app">
        <h1>Movie Land</h1>
        <div className="search">
            <input 
                placeholder="Search"
                value="Superman"
                onChange={()=>{}}
            />
            {/* <img src={} /> */}
        </div>
        <div className="container">
        <Card movie1={movie1}/>
        <Card movie1={movie1}/>
        <Card movie1={movie1}/>
        <Card movie1={movie1}/>
        <Card movie1={movie1}/>
        </div>
        </div>
    );
}

export default App;