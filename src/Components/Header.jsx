import { Link } from "react-router-dom";

function Header() {
    return (
        <>
            <header>
                <nav className="h-14 flex justify-center items-center gap-10 font-semibold ">
                    <Link to='/' className="nav-btn">HOME</Link>
                    <Link to='/browse-books' className="nav-btn">BROWSE BOOKS</Link>
                    <Link to='/add-book' className="nav-btn">ADD BOOK</Link>
                </nav>
            </header>
        </>
    );
}

export default Header;