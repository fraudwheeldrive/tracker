import { Link } from "react-router-dom";
import React, { useState, useEffect } from 'react';
import { Jumbotron, Container, Col, Form, Button, Card, CardColumns } from 'react-bootstrap';
import Auth from '../utils/auth';
import { saveShow, SearchedShows } from '../utils/api';
import { saveShowIds, getSavedShowIds } from '../utils/GlobalState';

const SearchShows = () => {
  // create state for holding returned google api data
  const [searchedShows, setSearchedShows] = useState([]);
  // create state for holding our search field data
  const [searchInput, setSearchInput] = useState('');
  // create state to hold saved showId values
  const [savedShowIds, setSavedShowIds] = useState(getSavedShowIds());
  // set up useEffect hook to save `savedShowIds` list to localStorage on component unmount
  // learn more here: https://reactjs.org/docs/hooks-effect.html#effects-with-cleanup
  useEffect(() => {
    return () => saveShowIds(savedShowIds);
  });

  // handle the search button
  const handleFormSubmit = async (event) => {
    event.preventDefault();

    if (!searchInput) {
      return false;
    }

    try {
      const response = await searchedShows(searchInput);

      if (!response.ok) {
        throw new Error('something went wrong!');
      }

      const { items } = await response.json();

      const showData = items.map((show) => ({
        showId: show.id,
        authors: show.volumeInfo.authors || ['No author to display'],
        title: show.volumeInfo.title,
        description: show.volumeInfo.description,
        image: show.volumeInfo.imageLinks?.thumbnail || '',
      }));

      setSearchedShows(showData);
      setSearchInput('');
    } catch (err) {
      console.error(err);
    }
  };

  // create function to handle saving a show to our database
  const handleSaveShow = async (showId) => {
    // find the show in `searchedShows` state by the matching id
    const showToSave = searchedShows.find((show) => show.showId === showId);

    // get token
    const token = Auth.loggedIn() ? Auth.getToken() : null;

    if (!token) {
      return false;
    }

    try {
      const response = await saveShow(showToSave, token);

      if (!response.ok) {
        throw new Error('something went wrong!');
      }

      // if show successfully saves to user's account, save show id to state
      setSavedShowIds([...savedShowIds, showToSave.showId]);
    } catch (err) {
      console.error(err);
    }
  };





//make sure links to are exact path
  return (
    <div className="box-center">
    <h2 className="center">Search it!</h2>
    <form action="/" method="get">
        <label htmlFor="header-search">
        </label>
        <input
            type="text"
            id="header-search"
            placeholder="Search movies our shows"
            name="s" 
        />
        <button type="submit" className="padding-left">Let's Go!</button>
    </form>
    </div>
  );
}

export default SearchShows;