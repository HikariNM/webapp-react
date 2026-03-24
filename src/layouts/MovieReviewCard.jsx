export default function MovieReviewCard({ review }) {
    const { id, name, text, vote } = review;
    return (
        <div className="flex mt-1 justify-center max-w-6xl mx-auto gap-5 flex-col md:flex-row items-center bg-gray-100 p-6 rounded-lg">

            <div className="flex gap-5 justify-start text-start mb-3 font-medium flex-col">
                <div className="flex justify-between">
                    <h3 className="text-3xl">{name}</h3>
                    <p><span className="text-amber-500 font-bold"> &#9734; {vote}/5</span> </p>
                </div>
                <div>
                    <h3 className="font-bold ">Review:</h3>
                    <p>{text}</p>  </div>
            </div>

        </div>
    )
}