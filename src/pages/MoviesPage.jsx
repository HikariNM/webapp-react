import { Link } from "react-router-dom"
import { useEffect, useState } from "react";
import axios from "axios";
import MovieCard from "../components/MovieCard";

export default function MoviePage() {

    const [movies, setMovies] = useState([]);

    useEffect(() => {
        axios.get('http://localhost:3000/api/movies').then(res => {
            console.log(res.data);
            setMovies(res.data);
        }).catch(err => console.error('Oops!', err.message));
    }, [])

    return (
        <div className="max-w-6xl mx-auto m-6">
            <div className="text-center">
                <h1 className="text-3xl pb-2">Film Archive</h1>
                <p>Discover your next favorite cinematic experience</p>
            </div>

            <div className="m-8 grid grid-cols-1 md:grid-cols-3 gap-6">
                {movies.map(movie => <MovieCard movie={movie} key={movie.id} />)}
            </div>
        </div>

    )
}