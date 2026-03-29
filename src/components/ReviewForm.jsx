import { useState } from "react";
import axios from "axios";

export default function ReviewForm(props) {

    const movieId = props.movieId;

    const apiURL = `http://localhost:3000/api/movies/${movieId}/reviews`;

    const initialValues = { name: 'Anon', text: 'Insert here your review', vote: 1 };
    const [formData, setFormData] = useState(initialValues);

    function submitRev(e) {
        e.preventDefault();
        axios.post(apiURL, formData).then(res => {
            // console.log(res.data);
            if (res.data.id) {
                setFormData(initialValues);
                console.log('log on submit', formData, 'movie id:', movieId)
            } else {
                console.log('Try again!');
            }
        }).catch(err => {
            console.error('Ops...', err.message);
        });
    }

    function setValues(e) {
        const fieldName = e.target.name;
        const fieldValue = e.target.value;

        let newFormData = {
            ...formData
        }

        newFormData[fieldName] = fieldValue;
        setFormData(newFormData);
    }

    return <div className="flex mt-1 justify-center max-w-6xl mx-auto gap-5 flex-col md:flex-row items-center bg-gray-200 p-6 rounded-lg">
        <div className="flex gap-5 justify-start text-start mb-3 w-full font-medium flex-col">
            <h3>Add your review</h3>
            <form onSubmit={submitRev}>
                <div>
                    <h4>Name</h4>
                    <input type="name" name='name' placeholder="Review Author" value={formData.name} onChange={setValues} />
                </div>
                <div>
                    <h4>Vote</h4>
                    <input type="number" min='1' max='5' name='vote' placeholder='Vote' value={formData.vote} onChange={setValues} />
                </div>
                <div>
                    <h4>Review</h4>
                    <textarea name="text" placeholder="Write your Review" value={formData.text} onChange={setValues}></textarea>
                </div>
                <div>
                    <button type="submit" className="bg-transparent hover:bg-indigo-500 text-indigo-700 font-semibold hover:text-white py-2 px-4 border border-indigo-500 hover:border-transparent rounded">Submit</button>
                </div>
            </form>
        </div>
    </div>
}