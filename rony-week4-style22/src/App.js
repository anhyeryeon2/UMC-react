import React from 'react';
import styled from 'styled-components';
import Movie from './components/movie';
import { dummy } from './movieDummy';

const AppContainer = styled.div`
  background-color: #22254b;
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
`;

function App() {
  return (
    <AppContainer>
      {dummy.results.map((item, index) => (
        <Movie
          key={index}
          title={item.title}
          poster_path={item.poster_path}
          vote_average={item.vote_average}
          overview={item.overview}
        />
      ))}
    </AppContainer>
  );
}

export default App;
