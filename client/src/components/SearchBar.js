import React, { useState, useEffect } from 'react';
import { Jumbotron, Container, Col, Form, Button, Card, CardColumns } from 'react-bootstrap';
import { Link } from "react-router-dom";

function SearchBar(props) {

//make sure links to are exact path
  return (
    <div>
    <h2>This is the searchbar area</h2>
    <Form.Row>
    <Form.Control
        name='searchInput'
        type='text'
        size='lg'
        placeholder='Search for a movie or show here'
      />
      <Button type='submit' variant='success' size='lg'>
        Submit Search
      </Button>
    </Form.Row>
    </div>
  );
}

export default SearchBar;



//reference code
{/* <Container>
<h1>Search for Books!</h1>
<Form onSubmit={handleFormSubmit}>
  <Form.Row>
    <Col xs={12} md={8}>
      <Form.Control
        name='searchInput'
        value={searchInput}
        onChange={(e) => setSearchInput(e.target.value)}
        type='text'
        size='lg'
        placeholder='Search for a movie or show here'
      />
    </Col>
    <Col xs={12} md={4}>
      <Button type='submit' variant='success' size='lg'>
        Submit Search
      </Button>
    </Col>
  </Form.Row>
</Form>
</Container> */}