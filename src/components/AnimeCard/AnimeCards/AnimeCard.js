import React from 'react';
import './AnimeCard.css'; 

function AnimeCard({ title, image, description }) {
  return (
    <div className="anime-card">
      <img src={image} alt={title} />
      <h2>{title}</h2>
      <p>{description}</p>
    </div>
  );
}

export default AnimeCard;
