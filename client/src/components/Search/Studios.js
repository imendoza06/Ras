import React from "react";
import { Link } from "react-router-dom";
import './Studios.css';

const Studios = ({ studioarr, bigdiv, worddiv }) => (
    <div>
        {studioarr.map(studio => (
            <div id={bigdiv}>
                <Link to={`/search/${studio.organization_name}`}>
                    <div>
                        <img src={studio.image_url} alt="Studio" border="0" />
                    </div>
                    <div id={worddiv}>
                        <h1>
                            {studio.organization_name}
                        </h1>
                        <p>{studio.about}</p>
                        <p>{studio.price} per hour</p>
                    </div>
                </Link>
            </div>
        ))}
    </div>
);

export default Studios;