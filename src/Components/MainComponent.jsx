import DisplayBook from './DisplayBook.jsx'
import { Link } from 'react-router-dom'
import { useSelector } from 'react-redux';

function MainComponent() {
    const data = useSelector((state) => state.library.books); //Getting hold of the books data from the appStore

    const popularBooks = [...data].sort((a,b) => b.rating - a.rating).slice(0, 5); // Getting top 5 books with highest rating.
    const categoryBooks = ['fiction', 'non-fiction', 'poetry', 'mystery', 'sci-fi']
    .map(category => data.find(book => book.category === category) || {})   // Getting hold of the books from Each Seperate Category
    .filter(book => book.id); // Only include books with valid IDs

    return (
        <>
            <div className="p-5 font-serif flex flex-col gap-7">
                <div className='h-56 flex justify-center'>
                    <img className='h-full w-1/2' src="/WelcomeImg.jpg" alt="Welcome Image" />
                </div>

                {/* Display a Book from Each Category */}
                <section className="flex flex-col gap-4">
                    <h2 className="text-3xl">Book Catagories</h2>
                    <div className="flex justify-evenly ">
                        {categoryBooks.map(book => {
                            return (
                                <Link key={book.id} to={`/browse-books/${book.category}`}>
                                    <DisplayBook category={book.category} img={book.cover_picture_url}/>
                                </Link>
                            );
                        })}
                    </div>
                </section>
                
                {/* Display Top 5 popular books */}
                <section className="flex flex-col gap-4">
                    <h2 className="text-3xl">Popular Books</h2>
                    <div className="flex justify-evenly">
                        {popularBooks.map(book => {
                            return (
                            <Link key={book.id} to={`/book-details/${book.id}`}>
                                <DisplayBook title={book.title} img={book.cover_picture_url}/>
                            </Link>
                        );
                        })}
                    </div>
                </section>
            </div>
        </>
    );
}

export default MainComponent;