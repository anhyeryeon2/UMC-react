import styled from 'styled-components';

export const MovieContainer = styled.div`
  width: 150px;
  margin: 16px;
  background-color: #373b69;
  color: white;
  border-radius: 5px;
  position: relative;
  transition: filter 0.3s;
  
  .movie-description {
    opacity: 0;
    position: absolute;
    top: 0;
    left: 0;
    background-color: rgba(0, 0, 0, 0.7);
    padding-left: 8px;
    display: flex;
    flex-direction: column;
    width: 100%;
    height: 100%;
    justify-content: center;
    align-items: center;
  }

  &:hover {
    filter: brightness(70%);
    .movie-description {
      opacity: 1;
      color: white;
    }
  }
`;

export const MovieImage = styled.img`
  max-width: 100%;
`;

export const MovieInfo = styled.div`
  display: flex;
  padding: 20px;
  justify-content: space-between;
  align-items: center;
`;

export const MovieTitle = styled.h4`
  margin: 0;
`;

export const MovieRating = styled.span`
  margin-left: 3px;
`;
