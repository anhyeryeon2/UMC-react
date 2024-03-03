import { useEffect, useState, useCallback } from "react";
import { useParams } from "react-router-dom";
import "./Detail.css";

function Detail() {
  const { id } = useParams();
  const [loading, setLoading] = useState(true);
  const [character, setCharacter] = useState(null);

  const getCharacter = useCallback(async () => {
    try {
      const response = await fetch(`https://marvel-proxy.nomadcoders.workers.dev/v1/public/characters/${id}`);
      const json = await response.json();
      setCharacter(json.data.results[0]);
    } catch (error) {
      console.error("Error fetching character details:", error);
    }
    setLoading(false);
  }, [id]);

  useEffect(() => {
    getCharacter();
  }, [getCharacter]);

  return (
    <div>
      {loading ? (
        <p>Loading...</p>
      ) : character && (
        <div>
          <img src={`${character.thumbnail.path}.${character.thumbnail.extension}`} alt={character.name} />
          <h1>{character.name}</h1>
          <p>{character.description || "No description available."}</p>

          <h2>Comics</h2>
          <ul>
            {character.comics.items.map((comic, index) => (
              <li key={index}>{comic.name}</li>
            ))}
          </ul>

          <h2>Series</h2>
          <ul>
            {character.series.items.map((series, index) => (
              <li key={index}>{series.name}</li>
            ))}
          </ul>

          <h2>Stories</h2>
          <ul>
            {character.stories.items.map((story, index) => (
              <li key={index}>{story.name}</li>
            ))}
          </ul>

          <h2>Events</h2>
          <ul>
            {character.events.items.map((event, index) => (
              <li key={index}>{event.name}</li>
            ))}
          </ul>

          {/* Additional character URLs */}
          <h2>More Information</h2>
          {character.urls.map((url, index) => (
            <p key={index}><a href={url.url} target="_blank" rel="noopener noreferrer">{url.type}</a></p>
          ))}
        </div>
      )}
    </div>
  );
}

export default Detail;
