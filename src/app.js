import { useEffect, useState } from "react";
import './app.css';
import SearchIcon from './search.svg';
import MovieCard from "./MovieCard";

const API_URL = "https://www.omdbapi.com?apikey=51812d2e";

const App = () => {
    const [movies, setMovies] = useState([]);
    const [searchTerm, setSearchTerm] = useState('');

    const searchMovies = async (title) => {
        try {
            const response = await fetch(`${API_URL}&s=${title}`);
            if (!response.ok) {
                throw new Error('Network response was not ok');
            }
            const data = await response.json();
            setMovies(data.Search || []); // Ensure default value is an empty array
        } catch (error) {
            console.error('Error fetching movies:', error);
            setMovies([]); // Clear movies in case of error
        }
    };

    useEffect(() => {
        searchMovies('Batman');
    }, []);

    return (
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
            {movies.length > 0 ? (
                <div className="container">
                    {movies.map((movie) => (
                        <MovieCard key={movie.imdbID} movie={movie} />
                    ))}
                </div>
            ) : (
                <div className="empty">
                    <h2>No movies found</h2>
                </div>
            )}
        </div>
    );
}

export default App;
