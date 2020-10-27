import React from 'react';
import './App.css';
import Row from './Row';
import requests from './requests';
import Banner from './Banner';

function App() {
  return (
    <div className="App">
      {/* Navbar */}
      {/* Banner */}

      <Banner />
      <Row 
        title="NETFLIX ORIGINALS" 
        fetchUrl={requests.fetchNetflixOriginals} 
        isLargeRow 
      />
      <Row 
        title="Trending Now" 
        fetchUrl={requests.fetchTrending} 
      />
      <Row 
        title="Top Rated" 
        fetchUrl={requests.fetchTopRated} 
      />
      <Row 
        title="Action Movies" 
        fetchUrl={requests.fetchActionMovies} 
      />
      <Row 
        title="Comedy Movies" 
        fetchUrl={requests.fetchComedyMovies} 
      />
      <Row 
        title="Horror Movies" 
        fetchUrl={requests.fetchHorrorMovies} 
      />
      <Row 
        title="Rpmance Movies" 
        fetchUrl={requests.fetchRomanceMovies} 
      />
      <Row 
        title="Documentarues" 
        fetchUrl={requests.fetchDocumentries} 
      />

    </div>
  );
}

export default App;
