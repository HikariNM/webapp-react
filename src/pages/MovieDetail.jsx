import { Link } from "react-router-dom"
import MovieDetailCard from "../layouts/MovieDetailCard";
import MovieReviewCard from "../layouts/MovieReviewCard";

export default function MovieDetail() {

    const sampleMovie =
    {
        id: 1,
        title: 'Movie Title',
        director: 'Director',
        genre: 'Genre 1',
        release_year: '2000',
        vote: 4.5,
        name: 'Reviewer Name',
        text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
        image: 'https://upload.wikimedia.org/wikipedia/commons/3/3f/Placeholder_view_vector.svg'
    };

    const sampleReview =
    {
        vote: 4.5,
        name: 'Reviewer Name',
        text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.'
    };

    const movie = [sampleMovie]
    const review = [sampleReview, sampleReview, sampleReview]

    return (
        <div className="mt-6">
            <div className="text-center">
                <Link to="/movies" className="text-indigo-500">Return to the Movie Archive</Link>
                <h1 className="text-3xl p-2">{sampleMovie.title} Detail Page</h1>
                <p>Explore the world of {sampleMovie.title}</p>
            </div>

            <div className="my-12">
                {movie.map(movie => <MovieDetailCard movie={movie} key={movie.id} />)}
            </div>
            <div>
                {review.map(review => <MovieReviewCard review={review} key={review.id} />)}

            </div>
        </div>
    )
}