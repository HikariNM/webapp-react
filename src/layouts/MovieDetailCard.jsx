export default function MovieDetailCard({ movie }) {

    return (
        <div>
            <h2 className="text-4xl mb-5">{movie.title}</h2>
            <img src={movie.image} alt={movie.title} className="w-1/2 mx-auto mb-5" />
            <div className="flex gap-5 justify-center mb-3 font-medium">
                <span className="text-amber-500 font-bold"> &#9734; {movie.vote}/5</span> <span>&#9830;</span> <span>{movie.release_year}</span>
            </div>
            <p><strong>Director:</strong> {movie.director}</p>
            <p><strong>Genre:</strong> <span className="uppercase">{movie.genre}</span></p>

            <div>
                <h3 className="font-bold ">Description:</h3>
                <p>{movie.text}</p>
            </div>
        </div>
    )
}