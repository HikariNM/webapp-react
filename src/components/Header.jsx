import { Link } from "react-router-dom"

export default function Header() {
    return (
        <header className="bg-gray-800 text-white p-4 gap-4 flex">
            <Link to="/" className="text-white hover:text-gray-300">
                HomePage
            </Link>
            <Link to="/movies" className="text-white hover:text-gray-300">
                Movies
            </Link>

        </header>
    )
}
