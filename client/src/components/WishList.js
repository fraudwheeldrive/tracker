import React, { useState, useEffect } from "react";
import Container from "react-bootstrap/Container";
import SearchBar from "./SearchBar";
import { SAVE_ITEM } from '../utils/mutations';
import { QUERY_ME } from '../utils/queries';
import {
  Jumbotron,
  Col,
  Row,
  Form,
  Button,
  Card,
  CardColumns,
} from "react-bootstrap";
import Auth from "../utils/auth";
import { useMutation, useQuery } from '@apollo/client';
import { saveShow, SearchShowsApi } from "../utils/api";
import { saveShowIds, getSavedShowIds } from "../utils/GlobalState";

// import { showData } from "./SearchBar"

const SavedItems = () => {

  const {data} = useQuery(QUERY_ME);
  const userData = data?.me || {};
  const [addItem] = useMutation(SAVE_ITEM);

  const [searchedShows, setSearchedShows] = useState([]);
  const [searchInput, setSearchInput] = useState();
  const [savedShowIds, setSavedShowIds] = useState(getSavedShowIds());

  const handleDeleteBook = async (movieId) => {
    const token = Auth.loggedIn() ? Auth.getToken() : null;

    if (!token) {
      return false;
    }

    try {
      await addItem({
        variables: {movieId}
      });

    } catch (err) {
      console.error(err);
    }
  };

  if (!userData) {
    return <h2>LOADING...</h2>;
  }

  return (
    <>
      <Jumbotron fluid >
        <Container>
          <h1>Saved Movies and TV Shows</h1>
        </Container>
      </Jumbotron>
      <Container>
        <h2>
          {userData.SavedItems.length
            ? `Viewing ${userData.SavedItems.length} saved ${userData.SavedItems.length === 1 ? 'movies' : 'shows'}:`
            : 'You have no saved items!'}
        </h2>
        <CardColumns>
          {userData.SavedItems.map((show) => {

            return (

              <Card key={show.movieId}>
                {show.image ? 
                <Card.Img src={show.image} /> : null}
                <Card.Body>
                  <Card.Title>{show.name}</Card.Title>
                  <p className='small'>Overview </p>
                  <Card.Text>{show.overview}</Card.Text>
                </Card.Body>
              </Card>
            );
          })}
        </CardColumns>
      </Container>
    </>
  );
};

export default SavedItems;



// const MovieList = (props) => {
// 	const addToListComponent = props.addToListComponent;
// 	return (
// 		< >
// 			{props.movies.map((show, index) => (
// 				<div>
// 					<div onClick={() => props.handleAddClick(show)}>
//             <img src={"http://image.tmdb.org/t/p/w200" + show.poster_path} alt="movie" ></img>
// 						<addToListComponent />
// 					</div>
// 				</div>
// 			))}
// 		</>
// 	);
// };

// export default MovieList;