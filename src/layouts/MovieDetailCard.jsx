export default function MovieDetailCard({ movie }) {
    const { id, title, director, genre, release_year, image, text, vote } = movie;
    return (
        <div className="flex justify-center max-w-6xl mx-auto gap-5 flex-col md:flex-row items-center bg-gray-100 p-6 rounded-lg">

            <img src={image} alt={title} className="w-80 mb-5" />

            <div className="flex gap-5 justify-start text-start mb-3 font-medium flex-col">
                <h2 className="text-4xl my-5">{title}</h2>
                <p><span className="text-amber-500 font-bold"> &#9734; {vote}/5</span> <span> | </span> <span>{release_year}</span><span> | </span><span className="uppercase">{genre}</span></p>
                <p><strong>Director:</strong> {director}</p>
                <div>
                    <h3 className="font-bold ">Description:</h3>
                    <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Doloribus itaque corporis qui ipsa maxime. Suscipit ullam numquam ad, ipsa ea a doloremque ut, sint facilis officiis provident cupiditate voluptates sed.
                        Enim praesentium placeat iste dolores nemo labore doloribus ut, atque temporibus consectetur deleniti aperiam rem voluptatem facilis. In neque sequi iure libero eaque commodi? Unde molestias consequuntur saepe nam sed.</p>
                </div>
            </div>

        </div>
    )
}