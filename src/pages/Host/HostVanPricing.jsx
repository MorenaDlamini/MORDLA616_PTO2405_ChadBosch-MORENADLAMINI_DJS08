import React from "react";
import { useOutletContext } from "react-router-dom";

/**
 * A component that displays the pricing information for a specific van.
 *
 * @component
 * @returns {JSX.Element} - Returns a heading element displaying the van's price per day.
 */
export default function HostVanPricing() {
    const { currentVan } = useOutletContext();
    return <h3 className="host-van-price">${currentVan.price}<span>/day</span></h3>;
}