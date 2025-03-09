import React from "react";
import { Outlet, Navigate, useLocation } from "react-router-dom";

/**
 * A component that checks if the user is logged in before rendering the child routes.
 * If the user is not logged in, they are redirected to the login page.
 *
 * @component
 * @returns {JSX.Element} - Returns a `Navigate` component to redirect to the login page if not logged in, otherwise renders the child routes via `Outlet`.
 */
export default function AuthRequired() {
    const isLoggedIn = localStorage.getItem("loggedin");
    const location = useLocation();

    if (!isLoggedIn) {
        return (
            <Navigate
                to="/login"
                state={{
                    message: "You must log in first",
                    from: location.pathname,
                }}
                replace
            />
        );
    }
    return <Outlet />;
}