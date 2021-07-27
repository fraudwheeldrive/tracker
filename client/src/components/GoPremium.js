import React, { useState } from "react";
import { Link } from "react-router-dom";
import { useMutation } from "@apollo/react-hooks";
import Auth from "../utils/auth";
import { ADD_USER } from "../utils/mutations";


import ListGroup from "react-bootstrap/ListGroup";
import Accordion from 'react-bootstrap/Accordion'
import Badge from 'react-bootstrap/Badge'

import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import { RiCheckboxCircleLine, RiCloseCircleLine } from "react-icons/ri";



function GoPremium(props) {
  return (
    <div>
    <Container>

      <h2 className="premium-header"> Go Premium! </h2>

      
      <Row>
        <Col xs={5}>
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

        <Col xs={3}>
          <h3>Level Up!</h3>
        
          <ListGroup>
  <ListGroup.Item><RiCheckboxCircleLine/>
  </ListGroup.Item>
  <ListGroup.Item><RiCheckboxCircleLine /></ListGroup.Item> 
  <ListGroup.Item><RiCheckboxCircleLine/></ListGroup.Item>
  <ListGroup.Item><RiCheckboxCircleLine /></ListGroup.Item>
  <ListGroup.Item><RiCheckboxCircleLine/></ListGroup.Item>
  <ListGroup.Item><RiCheckboxCircleLine /></ListGroup.Item>
  </ListGroup>

 

        </Col>
       
        <Col xs={3}>
          <h3>Free Mode </h3>
       
          <ListGroup>
  <ListGroup.Item><RiCheckboxCircleLine />
  </ListGroup.Item>
  <ListGroup.Item><RiCheckboxCircleLine/></ListGroup.Item> 
  <ListGroup.Item><RiCloseCircleLine/></ListGroup.Item>
  <ListGroup.Item><RiCloseCircleLine/></ListGroup.Item>
  <ListGroup.Item><RiCloseCircleLine/></ListGroup.Item>
  <ListGroup.Item><RiCloseCircleLine /></ListGroup.Item>
  </ListGroup>
    
        </Col>
     
      </Row>
    </Container>


    </div>
  );
}

export default GoPremium;