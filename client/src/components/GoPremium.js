//login backup

import React, { useState } from "react";
import { Link } from "react-router-dom";
import { useMutation } from "@apollo/react-hooks";
import Auth from "../utils/auth";
import { ADD_USER } from "../utils/mutations";

import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import { BsCheckCircle, BsXCircle } from "react-icons/bs";
import ListGroup from "react-bootstrap/ListGroup";

function GoPremium(props) {
  return (
    <Container flex direction>
      <h2> Go Premium! </h2>
      
      <Row>
        <Col>
          <h3>Features</h3>
  <ListGroup>
  <ListGroup.Item>Upcoming Seasons Notifications
  </ListGroup.Item>
  <ListGroup.Item>Customized Watchlists</ListGroup.Item> 
  <ListGroup.Item>Exclusive Access to New Movie Trailers</ListGroup.Item>
  <ListGroup.Item>New Releases to Streaming Services Notifications</ListGroup.Item>
  <ListGroup.Item>Streams Ending Soon Notifications</ListGroup.Item>
  <ListGroup.Item>Performance Award Information</ListGroup.Item>
  </ListGroup>
        </Col>

        <Col>
          <h3>Level Up!</h3>
        </Col>

        <BsCheckCircle />
        <BsCheckCircle />
        <BsCheckCircle />
        <BsCheckCircle />
        <BsCheckCircle />
        <BsCheckCircle />
       
        <Col>
          <h3>Free Mode </h3>
        </Col>

        <BsCheckCircle />
        <BsXCircle />
        <BsXCircle />
        <BsXCircle />
        <BsXCircle />
        <BsXCircle />
        <BsXCircle />
     
      </Row>
    </Container>
  );
}

export default GoPremium;
