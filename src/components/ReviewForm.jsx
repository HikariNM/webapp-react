import { useState } from "react";
import axios from "axios";

export default function ReviewForm(props) {

    const movieId = props.movieId;
    const reloadData = props.onNewReview;
    const apiURL = `http://localhost:3000/api/movies/${movieId}/reviews`;

    const initialValues = { name: '', text: '', vote: 1 };
    const [formData, setFormData] = useState(initialValues);

    const initialVisitedValue = {
        name: false,
        text: false,
        vote: false
    };

    const [visited, setVisited] = useState(initialVisitedValue);

    function submitRev(e) {
        e.preventDefault();
        axios.post(apiURL, formData).then(res => {
            // console.log(res.data);
            if (res.data.id) {
                setFormData(initialValues);
                setVisited(initialVisitedValue)
                reloadData()
                console.log('log on submit', formData, 'movie id:', movieId)
            } else {
                console.log('Try again!');
            }
        }).catch(err => {
            console.error('Ops...', err.message);
        });
    };

    function setValues(e) {
        const fieldName = e.target.name;
        const fieldValue = e.target.value;

        let newFormData = {
            ...formData
        }

        newFormData[fieldName] = fieldValue;
        setFormData(newFormData);
    };

    const handleBlur = (e) => {
        const { name } = e.target;
        setVisited({
            ...visited,
            [name]: true
        });
    };

    const formValidator = () => {
        return (
            formData.name.trim().length > 0 &&
            formData.text.trim().length >= 10 &&
            formData.vote >= 1 && formData.vote <= 5
        );
    };

    return <div className="flex mt-1 justify-center max-w-6xl mx-auto gap-5 flex-col md:flex-row items-center bg-gray-200 p-6 rounded-lg">
        <div className="flex gap-3 justify-start text-start mb-3 w-full font-medium flex-col">
            <h3>Add your review</h3>
            <form onSubmit={submitRev} className="flex gap-2 flex-col">
                <div>
                    <h4>Name</h4>
                    <input type="text" name='name' placeholder="Review Author" value={formData.name} onChange={setValues} onBlur={handleBlur}
                        className={`ps-2 bg-gray-100 border rounded focus:outline-none transition-all focus:ring-2 focus:ring-indigo-200 
                    ${visited.name && formData.name.trim().length === 0
                                ? 'border border-red-500 ring-2 ring-red-200'
                                : 'border-transparent'
                            }`} />
                </div>
                <div>
                    <h4>Vote</h4>
                    <input type="number" min='1' max='5' name='vote' placeholder='Vote' value={formData.vote} onChange={setValues} onBlur={handleBlur}
                        className={`text-center bg-gray-100 border rounded focus:outline-none transition-all focus:ring-2 focus:ring-indigo-200
                        ${(formData.vote <= 0 || formData.vote > 5)
                                ? 'border-red-500 focus:ring-red-200'
                                : 'border-transparent'
                            }`} />
                </div>
                <div>
                    <h4>Review</h4>
                    <textarea name="text" placeholder="Write your Review" value={formData.text} onChange={setValues} onBlur={handleBlur}
                        className={`ps-2 w-full bg-gray-100 rounded border focus:outline-none transition-all focus:ring-2 focus:ring-indigo-200
                            ${visited.text && formData.text.trim().length < 10
                                ? 'border-red-500 focus:ring-red-100'
                                : 'border-transparent focus:ring-indigo-200'
                            }`}></textarea>
                </div>
                <div>
                    {/* bg-transparent hover:bg-indigo-500 text-indigo-700 font-semibold hover:text-white py-2 px-4 border border-indigo-500 hover:border-transparent rounded */}
                    <button type="submit" disabled={!formValidator()}
                        className={`${(!formValidator())
                            ? 'bg-gray-400 text-gray-700 font-semibold py-2 px-4 border border-gray-700  rounded'
                            : 'bg-transparent hover:cursor-pointer hover:bg-indigo-500 text-indigo-700 font-semibold hover:text-white py-2 px-4 border border-indigo-500 hover:border-transparent rounded'}`}>
                        Submit
                    </button>
                </div>
            </form>
        </div>
    </div>
}