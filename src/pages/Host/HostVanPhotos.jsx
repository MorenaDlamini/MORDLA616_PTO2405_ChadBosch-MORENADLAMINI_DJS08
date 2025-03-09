import React from "react";
import { useOutletContext } from "react-router-dom";

/**
 * A component that displays the photo of a specific van.
 *
 * @component
 * @returns {JSX.Element} - Returns an image element displaying the van's photo.
 */
export default function HostVanPhotos() {
    const { currentVan } = useOutletContext();
    return <img src={currentVan.imageUrl} className="host-van-detail-image" />;
}