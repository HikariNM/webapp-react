export default function MovieDetailCard({ movie }) {
    const { id, title, director, genre, release_year, image, abstract, vote } = movie;
    const assetsUrl = 'http://localhost:3000/static/cover';
    return (
        <div className="flex justify-center max-w-6xl mx-auto gap-5 flex-col md:flex-row items-center bg-gray-200 p-6 rounded-lg">

            <img src={`${assetsUrl}/${image}`} alt={title} className="w-64 mb-5" />

            <div className="flex gap-5 justify-start text-start mb-3 font-medium flex-col">
                <h2 className="text-4xl my-3">{title}</h2>
                <p><span className="text-amber-500 font-bold"> &#9734; {vote}/5</span> <span> | </span> <span>{release_year}</span><span> | </span><span className="uppercase">{genre}</span></p>
                <div><p className="uppercase font-bold">Directed By:</p>
                    <p>{director}</p>
                </div>
                <div>
                    <h3 className="font-bold">Synopsis:</h3>
                    <p>{abstract}</p>
                </div>
            </div>

        </div>
    )
}