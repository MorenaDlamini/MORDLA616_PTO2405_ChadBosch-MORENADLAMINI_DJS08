import React from "react";
import { Link } from "react-router-dom";

/**
 * The home page component that introduces the website and provides a call-to-action to find a van.
 *
 * @component
 * @returns {JSX.Element} - Returns a section with a welcome message and a link to explore vans.
 */
export default function Home() {
    return (
        <div className="home-container">
            <h1>You got the travel plans, we got the travel vans.</h1>
            <p>
                Add adventure to your life by joining the #vanlife movement. Rent the perfect van to make your perfect road trip.
            </p>
            <Link to="vans">Find your van</Link>
        </div>
    );
}