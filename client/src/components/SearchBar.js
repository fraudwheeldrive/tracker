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

        event.preventDefault();

    try {
      const response = await SearchShowsApi(searchInput);

      if (!response.ok) {
        throw new Error("something went wrong!");
      }

        try {
            const response = await SearchShowsApi(searchInput);

      const showData = results.map((show) => ({
        name: show.name,
        image: "http://image.tmdb.org/t/p/w200" + show.poster_path,
        overview: show.overview,
      }));
      console.log(showData);
      setSearchedShows(showData);
      setSearchInput("");
      //where we will
    } catch (err) {
      console.error(err);
    }
  };

  return (
    <div className="box-center">

        <Container>
          <h3>Search for a show or movie!</h3>
          <Form onSubmit={handleformsubmit}>
            <Form.Row>
              <Col xs={5} md={5}>
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
        <CardColumns>
          {searchedShows.map((show) => {
            return (
              <Row xs={4} md={3} className="g-4">
                {Array.from({ length: 1 }).map((_, idx) => (
                  <Card style={{ width: "15rem" }}>
                    {show.image ? (
                      <Card.Img
                        src={show.image}
                        alt={`${show.name}`}
                        variant="top"
                      />
                    ) : null}
                    <Card.Body>
                      <Card.Title>{show.name}</Card.Title>
                      <p className="small">Overview</p>
                      <Card.Text>{show.overview}</Card.Text>
                      {Auth.loggedIn() && (
                        <Button variant="primary">Add to Watchlist</Button>
                      )}
                    </Card.Body>
                  </Card>
                ))}
              </Row>
            );
          })}
        </CardColumns>
      </Container>
    </div>
  );
};

export default SearchBar;
