import React from "react";

const Card = ({ launch }) => {
  return (
    <div className="card">
      <div className="card-img-container">
        {launch.links.flickr.original[0] ? (
          <img src={launch.links.flickr.original[0]} alt={launch.name} />
        ) : (
          "No Image"
        )}
      </div>
      <div className="card-details-container">
        <p>
          {launch.flight_number}: {launch.name} (
          {new Date(launch.date_utc).getFullYear()})
        </p>
        <p>Details: {launch.details ? launch.details : "No details found"}</p>
      </div>
    </div>
  );
};

export default Card;
