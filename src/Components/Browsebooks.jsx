import { Link, useParams } from "react-router-dom";
import DisplayBook from "./DisplayBook";
import { useState, useEffect } from "react";
import { useSelector } from "react-redux";

function Browsebooks() {
    const [search, setSearch] = useState('');
    const [filteredBooks, setFilteredBooks] = useState([]);
    const { category } = useParams();
    const data = useSelector((state) => state.library.books);

    useEffect(() => {
        const books = category 
            ? [...data].filter(book => book.category === category) 
            : [...data];
        
        const searchedBooks = search 
            ? books.filter(book =>
                book.title.toLowerCase().includes(search.toLowerCase()) ||
                book.author.toLowerCase().includes(search.toLowerCase())
              )
            : books;

        setFilteredBooks(searchedBooks);
    }, [category, search]);

    return (
        <>
            <Link className="inline-block" to='/'>
                <img src="/back-button.png" alt="Back" width="50px" />
            </Link>

            <section className="flex justify-center gap-5 py-5">
                <input
                    className="w-96 p-3 border-2 border-gray-300 rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-400 focus:border-blue-400 transition placeholder-gray-500"
                    type="text"
                    placeholder="Search by title or author..."
                    value={search}
                    onChange={(e) => setSearch(e.target.value)}
                />
            </section>


            {filteredBooks.length > 0 ? (
                <div className="p-10 flex flex-wrap justify-evenly gap-20">
                    {filteredBooks.map(book => (
                        <Link to={`/book-details/${book.id}`} key={book.id}>
                            <DisplayBook title={book.title} img={book.cover_picture_url} />
                        </Link>
                    ))}
                </div>
            ) : (
                <div className="p-10 text-center">
                    <h2 className="text-xl font-bold">No books found.</h2>
                    <p>Try refining your search or exploring other categories.</p>
                </div>
            )}
        </>
    );
}

export default Browsebooks;
