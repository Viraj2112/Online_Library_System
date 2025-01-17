import { useParams } from "react-router-dom";
import { Link } from "react-router-dom";
import { useSelector } from "react-redux";

function BookDetails() {
    const params = useParams(); // Getting hold of the id Parameter
    const books = useSelector((state) => state.library.books); // Getting hold the books data from appStore
    const book = [...books].find(book => book.id === Number(params.id)); // Finding the book with matching Id.
    if (book) {
        return (
            <> 
                <div className="container mx-auto flex flex-col gap-6">
                    {/* Back Button */}
                    <Link to={`/browse-books/${book.category}`}><img src="/back-button.png" alt="back-button" width='50px'/></Link>
                    {/* Displaying Book */}
                    <div className="border mx-32 rounded-r-3xl border-slate-600 flex gap-5 font-serif">
                        <img src={book.cover_picture_url} alt="Book Image" width="250px" height="400px"/>
                        <section className="flex flex-col gap-5 my-5">
                            <p>Title: {book.title}</p>
                            <p>Author: {book.author}</p>
                            <p>Pages: {book.pages}</p>
                            <p>Rating: {book.rating}</p>
                            <p>Description: {book.description}</p>
                        </section>
                    </div>
                </div>
            </>
        );
    } else {
        return (
            <>
                <h1>Book Not Found !</h1>
            </>
        );
    }
}

export default BookDetails;