import {useEffect,useState} from "react";
import './app.css';
import SearchIcon from './search.svg';
import MovieCard from "./MovieCard";

const API_URL = "http://www.omdbapi.com?apikey=51812d2e";

// const movie1 = {
//     "Title": "Fighting, Flying and Driving: The Stunts of Spiderman 3",
//     "Year": "2007",
//     "imdbID": "tt1132238",
//     "Type": "movie",
//     "Poster": "https://m.media-amazon.com/images/M/MV5BNTI3NDE1ZmEtMTRiMS00YTY4LTk0OGItNjY4YmI0MDM4OGM4XkEyXkFqcGdeQXVyODE2NDgwMzM@._V1_SX300.jpg"
//   }

const App = () => {

    const[movies, setMovies] = useState([]);
    const[searchTerm,setSearchTerm] = useState('');

    const searchMovies = async (title) => {
        const response = await fetch(`${API_URL}&s=${title}`);
        const data = await response.json();

        setMovies(data.Search);
    }

    useEffect(() => {
        searchMovies('Batman');
    },[])

    return(
        <div className="app">
            <h1>MovieMart</h1>

            <div className="search">
                <input
                    placeholder="Search for movies..."
                    value={searchTerm}
                    onChange={(e) => setSearchTerm(e.target.value)}
                />
                <img
                    src={SearchIcon}
                    alt="Search"
                    onClick={() => searchMovies(searchTerm)}
                />
            </div>


            {
                movies?.length > 0
                ? (
                    <div className="container">
                     {movies.map((movie) =>(
                        <MovieCard movie={movie}/>
                     ))}

                    </div>
                ) : (
                    <div className="empty">
                        <h2>No movies found</h2>
                    </div>
                )
            }

{/* 
            <div className="container">
                <MovieCard movie1={movies[0]}/>
            </div> */}
        </div>
    );
}

export default App;