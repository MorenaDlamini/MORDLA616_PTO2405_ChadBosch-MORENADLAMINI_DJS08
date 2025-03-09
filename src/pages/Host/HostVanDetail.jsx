import React from "react";
import { useParams, Link, NavLink, Outlet } from "react-router-dom";
import { getVan } from "../../api";

/**
 * A component that displays detailed information about a specific van listed by the host.
 * It includes navigation links for details, pricing, and photos.
 *
 * @component
 * @returns {JSX.Element} - Returns a detailed view of a host's van with navigation and an outlet for nested routes.
 */
export default function HostVanDetail() {
    const [currentVan, setCurrentVan] = React.useState(null);
    const [loading, setLoading] = React.useState(false);
    const [error, setError] = React.useState(null);
    const { id } = useParams();

    React.useEffect(() => {
        async function loadVans() {
            setLoading(true);
            try {
                const data = await getVan(id);
                setCurrentVan(data);
            } catch (err) {
                setError(err);
            } finally {
                setLoading(false);
            }
        }

        loadVans();
    }, [id]);

    if (loading) {
        return <h1>Loading...</h1>;
    }

    if (error) {
        return <h1>There was an error: {error.message}</h1>;
    }

    const activeStyles = {
        fontWeight: "bold",
        textDecoration: "underline",
        color: "#161616",
    };

    return (
        <section>
            <Link to=".." relative="path" className="back-button">
                &larr; <span>Back to all vans</span>
            </Link>
            {currentVan && (
                <div className="host-van-detail-layout-container">
                    <div className="host-van-detail">
                        <img src={currentVan.imageUrl} />
                        <div className="host-van-detail-info-text">
                            <i className={`van-type van-type-${currentVan.type}`}>
                                {currentVan.type}
                            </i>
                            <h3>{currentVan.name}</h3>
                            <h4>${currentVan.price}/day</h4>
                        </div>
                    </div>

                    <nav className="host-van-detail-nav">
                        <NavLink
                            to="."
                            end
                            style={({ isActive }) => (isActive ? activeStyles : null)}
                        >
                            Details
                        </NavLink>
                        <NavLink
                            to="pricing"
                            style={({ isActive }) => (isActive ? activeStyles : null)}
                        >
                            Pricing
                        </NavLink>
                        <NavLink
                            to="photos"
                            style={({ isActive }) => (isActive ? activeStyles : null)}
                        >
                            Photos
                        </NavLink>
                    </nav>
                    <Outlet context={{ currentVan }} />
                </div>
            )}
        </section>
    );
}