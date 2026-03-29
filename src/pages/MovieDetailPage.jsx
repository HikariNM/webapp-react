import { Link, useParams } from "react-router-dom"
import { use, useEffect, useState } from "react";
import axios from "axios";
import MovieDetailCard from "../components/MovieDetailCard";
import MovieReviewCard from "../components/MovieReviewCard";
import ReviewForm from "../components/ReviewForm";

export default function MovieDetail() {

    const URL = 'http://localhost:3000/api/movies';
    const { id } = useParams();
    const [movie, setMovie] = useState({});

    useEffect(() => {
        axios.get(`${URL}/${id}`).then(res => {
            console.log(res.data);
            setMovie(res.data);
        }).catch(err => console.error('Oops!', err.message));
    }, [id])

    return (
        <div className="mt-6">
            <div className="text-center">
                <Link to="/movies" className="text-indigo-500">Return to the Movie Archive</Link>
                <h1 className="text-3xl p-2">{movie.title} Detail Page</h1>
                <p>Explore the world of {movie.title}</p>
            </div>

            <div className="flex justify-between mx-auto max-w-6xl">
                <Link to={`/movies/${Number(id) > 1 ? Number(id) - 1 : 1}`}>Previous Movie</Link>
                <Link to={`/movies/${Number(id) < movie.archiveLength ? Number(id) + 1 : movie.archiveLength}`}>Next Movie</Link>
            </div>

            <div className="my-12">
                {<MovieDetailCard movie={movie} key={movie.id} />}
            </div>

            <div>
                {movie.text?.map(review => <MovieReviewCard review={review} key={review.id} />)}
            </div>

            <div>
                {<ReviewForm movieId={movie.id} />}
            </div>


        </div>
    )
}