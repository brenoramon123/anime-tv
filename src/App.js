import React from 'react';
import Header from './components/Header/Header';
import Footer from './components/Footer/Footer';
import AnimeList from './components/AnimeCard/AnimeList/AnimeList';

function App() {

  return (
    <div className="App">
      <Header />
      <AnimeList />
      <Footer/>
    </div>
  );
}

export default App;
