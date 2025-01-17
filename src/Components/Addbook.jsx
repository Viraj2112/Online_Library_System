import {useState} from 'react';
import {useNavigate} from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux';
import { addBook, incrementId } from '../utils/librarySlice';
import { Link } from 'react-router-dom'

function Addbook() {
    const dispatch = useDispatch();
    // const [initialId, setInitialId] = useState(51);
    const initialId = useSelector((state) => state.library.prevId);
    const [formData, setFormData] = useState(
        {
            id: initialId,
            title: '',
            author: '',
            pages: 0,
            rating: 0.0,
            description: '',
            cover_picture_url: '',
            category: '' 
        }
    );
    const navigate = useNavigate();

    const handleFocus = (event) => {
        event.target.select();  // This method helps in selecting the value when we focus on input element.
    } 

    const handleChange = (e) => {
        
        const {name, value} = e.target;
        setFormData((prevData) => (
            {
                ...prevData,
                [name]: value,
            }
        ))
    } 

    function submitForm(event) { // function to submit the form
        event.preventDefault(); // preventing the default behaviour of the form
        dispatch(addBook(formData)) // adding the book to the appStore.
        dispatch(incrementId())     // Incrementing the id here to make Id unique.
        resetForm();                // Resetting the form
        navigate('/browse-books'); //After the form is submitted redirect to the /browsse-books page.
        alert('Book Added'); // display Book added Message.
    }

    function resetForm() { // function to reset the form
        setFormData({
            id: initialId,
            title: '',
            author: '',
            pages: 0,
            rating: 0.0,
            description: '',
            cover_picture_url: '',
        })
    }

    return (
        <>
            <div className="flex flex-col items-center py-10"> 
                {/* Back Button */}
                <Link className="inline-block self-start mb-5 transition-transform transform hover:scale-105" to="/">
                    <img src="/back-button.png" alt="back-button" className="w-12 h-12" />
                </Link>

                {/* Form */}
                <form className="w-full max-w-lg bg-white shadow-md rounded-lg p-8 border-2 border-gray-200" onSubmit={(e) => submitForm(e)}>
                    <input className="hidden" type="number" value={initialId} name="id" readOnly /> {/* Hidden Unique Id */}

                    {/* Title */}
                    <div className="flex flex-col mb-5">
                        <label htmlFor="title" className="text-sm font-medium text-gray-700">Title:</label>
                        <input
                            className="border-2 rounded-lg p-2 focus:outline-none focus:ring-2 focus:ring-blue-400"
                            id="title"
                            type="text"
                            value={formData.title}
                            name="title"
                            onChange={handleChange}
                            placeholder="Enter Book Title"
                            onFocus={(e) => handleFocus(e)}
                            required
                            autoFocus
                        />
                    </div>

                    {/* Author */}
                    <div className="flex flex-col mb-5">
                        <label htmlFor="author" className="text-sm font-medium text-gray-700">Author:</label>
                        <input
                            className="border-2 rounded-lg p-2 focus:outline-none focus:ring-2 focus:ring-blue-400"
                            id="author"
                            type="text"
                            minLength="3"
                            value={formData.author}
                            name="author"
                            onChange={handleChange}
                            placeholder="Enter Book Author"
                            onFocus={(e) => handleFocus(e)}
                            required
                        />
                    </div>

                    {/* Pages */}
                    <div className="flex flex-col mb-5">
                        <label htmlFor="pages" className="text-sm font-medium text-gray-700">Pages:</label>
                        <input
                            className="border-2 rounded-lg p-2 focus:outline-none focus:ring-2 focus:ring-blue-400"
                            id="pages"
                            type="number"
                            value={formData.pages}
                            name="pages"
                            onChange={handleChange}
                            placeholder="Number of Pages"
                            onFocus={(e) => handleFocus(e)}
                            required
                        />
                    </div>

                    {/* Rating */}
                    <div className="flex flex-col mb-5">
                        <label htmlFor="rating" className="text-sm font-medium text-gray-700">Rating:</label>
                        <input
                            className="border-2 rounded-lg p-2 focus:outline-none focus:ring-2 focus:ring-blue-400"
                            id="rating"
                            type="number"
                            step="0.1"
                            min="0"
                            max="5"
                            value={formData.rating}
                            name="rating"
                            onChange={handleChange}
                            placeholder="Provide Rating out of 5"
                            onFocus={(e) => handleFocus(e)}
                            required
                        />
                    </div>

                    {/* Description */}
                    <div className="flex flex-col mb-5">
                        <label htmlFor="description" className="text-sm font-medium text-gray-700">Description:</label>
                        <textarea
                            className="border-2 rounded-lg p-2 focus:outline-none focus:ring-2 focus:ring-blue-400"
                            id="description"
                            name="description"
                            minLength="10"
                            value={formData.description}
                            onChange={handleChange}
                            rows="4"
                            placeholder="Enter a brief description of the book"
                            onFocus={(e) => handleFocus(e)}
                            required
                        ></textarea>
                    </div>

                    {/* Cover Picture */}
                    <div className="flex flex-col mb-5">
                        <label htmlFor="cover_picture_url" className="text-sm font-medium text-gray-700">Cover Picture URL:</label>
                        <input
                            className="border-2 rounded-lg p-2 focus:outline-none focus:ring-2 focus:ring-blue-400"
                            id="cover_picture_url"
                            type="url"
                            value={formData.cover_picture_url}
                            name="cover_picture_url"
                            onChange={handleChange}
                            placeholder="Enter Book Cover URL (if any)"
                            onFocus={(e) => handleFocus(e)}
                            required
                        />
                    </div>

                    {/* Category */}
                    <div className="flex flex-col mb-5">
                        <label htmlFor="category" className="text-sm font-medium text-gray-700">Category:</label>
                        <select
                            className="border-2 rounded-lg p-2 focus:outline-none focus:ring-2 focus:ring-blue-400"
                            name="category"
                            id="category"
                            value={formData.category}
                            onChange={handleChange}
                            required
                        >
                            <option value="">Select</option>
                            <option value="fiction">Fiction</option>
                            <option value="non-fiction">Non-Fiction</option>
                            <option value="poetry">Poetry</option>
                            <option value="mystery">Mystery</option>
                            <option value="sci-fi">Sci-Fi</option>
                        </select>
                    </div>

                    {/* Buttons */}
                    <div className="flex gap-4">
                        <button
                            type="submit"
                            className="px-6 py-2 rounded-lg bg-blue-500 text-white font-medium hover:bg-blue-600 transition"
                        >
                            Submit
                        </button>
                        <button
                            type="reset"
                            onClick={resetForm}
                            className="px-6 py-2 rounded-lg bg-gray-200 text-gray-800 font-medium hover:bg-gray-300 transition"
                        >
                            Reset
                        </button>
                    </div>
                </form>
            </div>
        </>
    );
}

export default Addbook;