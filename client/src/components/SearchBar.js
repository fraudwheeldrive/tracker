import React, { useState, useEffect } from "react";
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
import { saveShow, SearchShowsApi } from "../utils/api";
import { saveShowIds, getSavedShowIds } from "../utils/GlobalState";
import Container from "react-bootstrap/Container";
import WishList from './WishList';


const SearchBar = () => {
  const [searchedShows, setSearchedShows] = useState([]);
  const [searchInput, setSearchInput] = useState();
  const [savedShowIds, setSavedShowIds] = useState(getSavedShowIds());
  useEffect(() => {
    return () => saveShowIds(savedShowIds);
  });


  const handleSaveItem = async (movieId) => {
    const movieToSave = searchedMovies.find((movie) => movie.movieId === movieId);

    const token = Auth.loggedIn() ? Auth.getToken() : null;

    if (!token) {
      return false;
    }

    try {
      await saveBook({
        variables: {
          name: show.name,
          image: "http://image.tmdb.org/t/p/w200" + show.poster_path,
          overview: show.overview,
        }
      })

      setSavedmovieIds([...savedmovieIds, movieToSave.movieId]);
    } catch (err) {
      console.error(err);
    }
  };

  const handleformsubmit = async (event) => {
    event.preventDefault();
    if (!searchInput) {
      return false;
    }
    try {
      const response = await SearchShowsApi(searchInput);

      if (!response.ok) {
        throw new Error('Well that escalated quickly!  Try again');
      }
      const { results } = await response.json();
     
        //deconstruct the returned api object, extract required key value pairs
        const showData = results.map((show) => ({
          name: show.name,
          image: "http://image.tmdb.org/t/p/w200" + show.poster_path,
          overview: show.overview,
        }));
        console.log(showData);
        setSearchedShows(showData);
        setSearchInput("");
        //if error catch it
      } catch (err) {
        console.error(err);
      }
    };

    return (
      <div >
        <Container className="box-center">
          <h3>Search for a show or movie!</h3>
          <Form onSubmit={handleformsubmit}>
            <Form.Row>
              <Col xs={10} md={12}>
                <Form.Control
                  name="searchInput"
                  value={searchInput}
                  onChange={(e) => setSearchInput(e.target.value)}
                  type="text"
                  size="sm"
                  placeholder="Search for a show"
                />
              </Col>
              <Col xs={5} md={5}>
                <Button type="submit" variant="success" size="lg">
                  Search
                </Button>
              </Col>
            </Form.Row>
          </Form>
        </Container>

        <Container>
          <h3>
            {searchedShows.length ? `${searchedShows.length} Results` : "Results"}
          </h3>
          <div className="box-center">
          <CardColumns>
            <Row>
            {searchedShows.map((show) => {
              return (
                
                <Col xs={6} md={4}>
                <Card style={{ width: '17rem' }}>
                  {show.image ? (
                    <Card.Img src={show.image} alt={`${show.name}`} variant='top' />
                  ) : null}
                  <Card.Body>
                    <Card.Title>{show.name}</Card.Title>
                    <p className='small'>Overview</p>
                    <Card.Text>{show.overview}</Card.Text>
                    {Auth.loggedIn() && (
                      <Button
                       variant="primary"
                       handleAddClick={handleAdd}
                       addtolistcomponent={WishList}
                       
                       >
                         
                         Add to Watchlist
                       </Button>
                    )}
                  </Card.Body>
                </Card>
                </Col>
              );
            })}
          </Row>
          </CardColumns>
          </div>
        </Container>
      </div>
  );
  }

  export default SearchBar;


    //add to wish list 
  // const [added, setSavedShowIds] = useState([]);
  // useEffect(() => {
	// 	const savedShowIds = JSON.parse(
	// 		localStorage.getItem(saveShow)
	// 	);

	// 	if (savedShowIds) {
	// 		setSavedShowIds(savedShowIds);
	// 	}
	// }, []);

  // const saveToLocalStorage = (items) => {
	// 	localStorage.setItem(saveShow, JSON.stringify(items));
	// };

	// const handleAdd = async (event) => {
  //   event.preventDefault();
  //   if (!savedShowIds) {
  //     return false;
  //   }
  //   try {
  //     const response = await saveShow(savedShowIds);

  //     if (!response.ok) {
  //       throw new Error('Try again');

  //     }
  //     const { results } = await response.json();

  //     // const wishList = [...added, show];
  //     const wishList = results.map((show) => ({
  //       name: show.name,
  //       image: "http://image.tmdb.org/t/p/w200" + show.poster_path,

  //     }));
  //     console.log(wishList)
  //     setSavedShowIds(wishList);
  //     saveToLocalStorage(wishList);
  //   } catch (err) {
  //     console.error(err);
  //   }
	// };