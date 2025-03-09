import React from "react";
import { Outlet } from "react-router-dom";
import Header from "./Header";
import Footer from "./Footer";

/**
 * The main layout component that wraps the entire application.
 * It includes the header, main content area, and footer.
 *
 * @component
 * @returns {JSX.Element} - Returns a div containing the header, main content (via `Outlet`), and footer.
 */
export default function Layout() {
    return (
        <div className="site-wrapper">
            <Header />
            <main>
                <Outlet />
            </main>
            <Footer />
        </div>
    );
}