import { Link } from "react-router-dom"

export default function MovieDetail() {

    const sampleMovie =
    {
        id: 1,
        title: 'Movie Title',
        director: 'Director',
        genre: 'Genre 1',
        release_year: '2000',
        image: 'https://upload.wikimedia.org/wikipedia/commons/3/3f/Placeholder_view_vector.svg'
    };

    return (
        <div className="max-w-6xl mx-auto m-6">
            <div className="text-center">
                <h1 className="text-3xl pb-2">{sampleMovie.title} Detail Page</h1>
                <p>Explore the world of {sampleMovie.title}</p>
            </div>
        </div>
    )
}