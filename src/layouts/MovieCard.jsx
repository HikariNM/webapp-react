import { Link } from "react-router-dom";

export default function MovieCard({ movie }) {

    const { id, title, director, genre, release_year, image } = movie;
    return (
        <div>
            <img src={movie.image} alt={movie.title} className="h-64 object-cover rounded-lg mb-4" />
            <h2 className="text-2xl font-bold mb-2">{movie.title}</h2>
            <p className="text-gray-600 mb-1">Genre: {movie.genre}</p>
            <Link to={`/movies/${movie.id}`}>Details</Link>
        </div>
    )
}