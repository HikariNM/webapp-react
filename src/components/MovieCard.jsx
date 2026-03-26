import { Link } from "react-router-dom";

export default function MovieCard({ movie }) {

    const { id, title, director, genre, release_year, image } = movie;
    const assetsUrl = 'http://localhost:3000/static/cover';
    return (
        <div className="bg-gray-200 rounded-lg flex flex-col items-center p-3">
            <img src={`${assetsUrl}/${image}`} alt={title} className="h-64 object-cover rounded-lg mb-4" />
            <h2 className="text-2xl font-bold mb-2">{title}</h2>
            <p className="text-gray-600 mb-1">{genre}</p>
            <Link className="text-indigo-600" to={`/movies/${id}`}>Details</Link>
        </div>
    )
}