import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import Character from "../components/Character"; // Adjust the path as necessary
import "./Home.css"; // Your CSS file for styling

function Home() {
  const [isLoading, setIsLoading] = useState(true);
  const [characters, setCharacters] = useState([]);

  useEffect(() => {
    const fetchCharacters = async () => {
      try {
        const response = await fetch(
          "https://marvel-proxy.nomadcoders.workers.dev/v1/public/characters?limit=50&orderBy=modified&series=24229,1058,2023"
        );
        const data = await response.json();
        setCharacters(data.data.results);
      } catch (error) {
        console.error("Error fetching characters:", error);
      }
      setIsLoading(false);
    };

    fetchCharacters();
  }, []);

  if (isLoading) {
    return <div className="loading">Loading...</div>;
  }

  return (
    <div className="character__container">
      {characters.map((character) => (
        <Link to={`/character/${character.id}`} key={character.id} style={{ textDecoration: 'none' }}>
          <Character
            id={character.id}
            name={character.name}
            description={character.description}
            thumbnail={character.thumbnail}
            comics={character.comics}
          />
        </Link>
      ))}
    </div>
  );
}

export default Home;
