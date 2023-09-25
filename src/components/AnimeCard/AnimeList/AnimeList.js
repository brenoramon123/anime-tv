import React from 'react';
import AnimeCard from '../AnimeCards/AnimeCard'; 
import './AnimeList.css'

const animeData = [
  {
    title: 'Tengen Toppa Gurren-Lagann',
    image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSN0y_dOm0I2mgKRbXf_WQTN1EQ6jzUpP2MGKzJQmZBtKC0E0Jk',
  },
  {
    title: 'Kill la Kill',
    image: 'https://m.media-amazon.com/images/I/61W1dDTz6TL._AC_UF1000,1000_QL80_.jpg',
  },
  {
    title: 'Bakemonogatari',
    image: 'https://m.media-amazon.com/images/M/MV5BYTNlMWFmYjQtM2E2ZC00ZDEwLWI1NjktY2MxMmJkYzNkMzkzXkEyXkFqcGdeQXVyMzgxODM4NjM@._V1_.jpg',
  },
];

function AnimeList() {
  return (
    <div className="anime-list">
      {animeData.map((anime, index) => (
        <AnimeCard
          key={index}
          title={anime.title}
          image={anime.image}
          description={anime.description}
        />
      ))}
    </div>
  );
}

export default AnimeList;
