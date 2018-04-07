import React from "react";
import { Link } from "react-router-dom";
import './Studios.css';
import Rating from '../Images/Rating.png';

const Studios = ({ studioarr, singleStudio, bigdiv, worddiv }) => (
    <div>
        {studioarr.map(studio => (
            <div id={bigdiv}>
                <Link to={`/search/${studio.studio_id}`} onClick={singleStudio}>
                    <div>
                        <img src={studio.image_url} alt="Studio" border="0" />
                    </div>
                    <div id={worddiv}>
                        <h1>
                            {studio.organization_name}
                        </h1>
                        <p>{studio.about}</p>
                        <img src ={Rating} />
                        <p id="pricep">$ {studio.price} per hour</p>
                    </div>
                </Link>
            </div>
        ))}
    </div>
);

export default Studios;