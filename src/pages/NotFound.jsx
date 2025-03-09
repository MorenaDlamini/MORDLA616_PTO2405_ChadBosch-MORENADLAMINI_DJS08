import React from "react";
import { Link } from "react-router-dom";

/**
 * A component that displays a 404 error message when a page is not found.
 * Provides a link to return to the home page.
 *
 * @component
 * @returns {JSX.Element} - Returns a section with a 404 error message and a link to the home page.
 */
export default function NotFound() {
    return (
        <div className="not-found-container">
            <h1>Sorry, the page you were looking for was not found.</h1>
            <Link to="/" className="link-button">
                Return to Home
            </Link>
        </div>
    );
}