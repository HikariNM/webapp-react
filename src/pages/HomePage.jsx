import { Link } from "react-router-dom"

export default function HomePage() {
    return (
        <div className="text-center max-w-6xl mx-auto m-6">
            <h1 className="text-3xl pb-2">Welcome to my Movies Archive!</h1>
            <h2>This is the Home Page</h2>
            <Link className="hover:text-indigo-500" to={'/movies/'}> Discover our Archive</Link>

        </div >
    )
}