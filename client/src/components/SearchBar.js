import React, { useState, useEffect } from 'react';
import { Jumbotron, Container, Col, Form, Button, Card, CardColumns } from 'react-bootstrap';
import Auth from '../utils/auth';
import { saveShow, SearchShowsApi } from '../utils/api';
import { saveShowIds, getSavedShowIds } from '../utils/GlobalState';


const SearchBar = () => {
const [searchedShows, setSearchedShows] = useState([]);
const [searchInput, setSearchInput] = useState();
const [savedShowIds, setSavedShowIds] = useState(getSavedShowIds());
// const apiCall = async () => {
//     const response = await fetch(`https://api.themoviedb.org/3/search/multi?api_key=b50a54473311bbac83f4a96b6efa872d&query=${searchInput}&page=1`);
//     const myJson = await response.json();
//     console.log(myJson);
// }
useEffect(() => {
    return () => saveShowIds(savedShowIds);
  });
var handleformsubmit = async (event) => {
    


    event.preventDefault();

    if (!searchInput) {
      return false;
    }

    try {
        const response = await SearchShowsApi(searchInput);
  
        if (!response.ok) {
          throw new Error('something went wrong!');
        }

      const { results } = await response.json();

      const showData = results.map((show) => ({
        name: show.name,
        image: 'http://image.tmdb.org/t/p/w200' + show.poster_path,
        overview: show.overview
      }));
      console.log(showData)
      setSearchedShows(showData);
      setSearchInput('');
      //where we will 
    } catch (err) {
      console.error(err);
    }
  };

    return (
        <div className="box-center">
      <Jumbotron fluid className='text-light bg-dark'>
        <Container>
          <h1>Search for a show or movie!</h1>
          <Form onSubmit={handleformsubmit}>
            <Form.Row>
              <Col xs={12} md={8}>
              
                <Form.Control
                  name='searchInput'
                  value={searchInput}
                  onChange={(e) => setSearchInput(e.target.value)}
                  type='text'
                  size='lg'
                  placeholder='Search for a show'
                />
              </Col>
              <Col xs={12} md={4}>
                <Button type='submit' variant='success' size='lg'>
                  Submit Search
                </Button>
              </Col>
            </Form.Row>
          </Form>
        </Container>
      </Jumbotron>

      <Container>
        <h2>
          {searchedShows.length
            ? `Viewing ${searchedShows.length} results:`
            : 'Show results'}
        </h2>
        <CardColumns>
          {searchedShows.map((show) => {
            return (
              <Card key={show.showId} border='dark'>
                {show.image ? (
                  <Card.Img src={show.image} alt={`${show.name}`} variant='top' />
                ) : null}
                <Card.Body>
                  <Card.Title>{show.name}</Card.Title>
                  <p className='small'>Overview</p>
                  <Card.Text>{show.overview}</Card.Text>
                  {Auth.loggedIn() && (
                    <button type="submit">Add</button>
                  )}
                </Card.Body>
              </Card>
            );
          })}
        </CardColumns>
      </Container>
      </div>
    );
}

export default SearchBar