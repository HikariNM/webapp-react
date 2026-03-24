import { Link } from "react-router-dom"
import MovieCard from "../layouts/MovieCard";

export default function MoviePage() {

    const sampleMovie =
    {
        id: 1,
        title: 'Title',
        director: 'Director',
        genre: 'Genre 1',
        release_year: '2000',
        image: 'https://upload.wikimedia.org/wikipedia/commons/3/3f/Placeholder_view_vector.svg'
    };

    const movies = [sampleMovie, sampleMovie, sampleMovie];

    return (
        <div className="max-w-6xl mx-auto m-6">
            <div className="text-center">
                <h1 className="text-3xl pb-2">Film Archive</h1>
                <p>Discover your next favorite cinematic experience</p>
            </div>

            <div className="m-8 grid grid-cols-3 gap-6">
                {movies.map(movie => <MovieCard movie={movie} key={movie.id} />)}
            </div>
        </div>

    )
}