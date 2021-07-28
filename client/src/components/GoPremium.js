import React, { useState } from "react"
import { Link } from "react-router-dom";
import { useMutation } from "@apollo/react-hooks";
import Auth from "../utils/auth";
import { ADD_USER } from "../utils/mutations";

import AccordionList from './AccordionList';
import ListGroup from "react-bootstrap/ListGroup";
import Accordion from 'react-bootstrap/Accordion'
import Badge from 'react-bootstrap/Badge';
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import { FaRegCheckCircle,FaRegTimesCircle  } from "react-icons/fa";

const checkStyle = { color: "green", fontSize: "2.3em" };
const xStyle = { color: "red", fontSize: "2.3em" };
const colStyle = {fontSize: "1.57em"};

 

function GoPremium(props) {

 

  const accordionData = [
    {
      title: 'What Is PocketWatch?',
      content: `Lorem ipsum dolor, sit amet consectetur adipisicing elit. Quis sapiente
      laborum cupiditate possimus labore, hic temporibus velit dicta earum
      suscipit commodi eum enim atque at? Et perspiciatis dolore iure
      voluptatem.`
    },
    {
      title: 'How much does Pocket Watch Cost? ',
      content: `Lorem ipsum, dolor sit amet consectetur adipisicing elit. Mollitia veniam
      reprehenderit nam assumenda voluptatem ut. Ipsum eius dicta, officiis
      quaerat iure quos dolorum accusantium ducimus in illum vero commodi
      pariatur? Impedit autem esse nostrum quasi, fugiat a aut error cumque
      quidem maiores doloremque est numquam praesentium eos voluptatem amet!
      Repudiandae, mollitia id reprehenderit a ab odit!`
    },
    {
      title: 'What platforms are supported?',
      content: `Sapiente expedita hic obcaecati, laboriosam similique omnis architecto ducimus magnam accusantium corrupti
      quam sint dolore pariatur perspiciatis, necessitatibus rem vel dignissimos
      dolor ut sequi minus iste? Quas?`
    },
    {
      title: 'How Do I Cancel?',
      content: `Sapiente expedita hic obcaecati, laboriosam similique omnis architecto ducimus magnam accusantium corrupti
      quam sint dolore pariatur perspiciatis, necessitatibus rem vel dignissimos
      dolor ut sequi minus iste? Quas?`
    },
    {
      title: 'What Streaming Services can PocketWatch track?',
      content: `Sapiente expedita hic obcaecati, laboriosam similique omnis architecto ducimus magnam accusantium corrupti
      quam sint dolore pariatur perspiciatis, necessitatibus rem vel dignissimos
      dolor ut sequi minus iste? Quas?`
    }
  ];


  const {title, content } =accordionData
  const [isActive, setIsActive] =useState(false);
  
  return (
    <div>
    <Container className="premium-container">

      <h2 className="premium-header"> Go Premium! </h2>

      
      <Row>
        <Col xs={6}>
          <h2>Features</h2>
  <ListGroup style = {colStyle}>
  <ListGroup.Item>Upcoming Seasons Notifications
  </ListGroup.Item>
  <ListGroup.Item>Customized Watchlists</ListGroup.Item> 
  <ListGroup.Item>Exclusive Access to New Movie Trailers</ListGroup.Item>
  <ListGroup.Item>New Releases to Streaming Services Notifications</ListGroup.Item>
  <ListGroup.Item>Streams Ending Soon Notifications</ListGroup.Item>
  <ListGroup.Item>Performance Award Information</ListGroup.Item>
  </ListGroup>
        </Col>

        <Col className= "premium-content" xs={2}>
          <h2>Level Up!</h2>
        
          <ListGroup>
  <ListGroup.Item><FaRegCheckCircle style={checkStyle}/>
  </ListGroup.Item>
  <ListGroup.Item><FaRegCheckCircle style={checkStyle}/></ListGroup.Item> 
  <ListGroup.Item><FaRegCheckCircle style={checkStyle}/></ListGroup.Item>
  <ListGroup.Item><FaRegCheckCircle style={checkStyle}/></ListGroup.Item>
  <ListGroup.Item><FaRegCheckCircle style={checkStyle}/></ListGroup.Item>
  <ListGroup.Item><FaRegCheckCircle style={checkStyle} /></ListGroup.Item>
  </ListGroup>

 

        </Col>
       
        <Col className= "premium-content" xs={2}>
          <h2>Free Mode </h2>
       
          <ListGroup>
  <ListGroup.Item><FaRegCheckCircle style={checkStyle}/>
  </ListGroup.Item>
  <ListGroup.Item><FaRegTimesCircle style={xStyle}/></ListGroup.Item> 
  <ListGroup.Item><FaRegTimesCircle style={xStyle}/></ListGroup.Item>
  <ListGroup.Item><FaRegTimesCircle style={xStyle}/></ListGroup.Item>
  <ListGroup.Item><FaRegTimesCircle style={xStyle}/></ListGroup.Item>
  <ListGroup.Item><FaRegTimesCircle style={xStyle}/></ListGroup.Item>
  </ListGroup>
    
        </Col>

        <Col xs={10}>
        <div>
      <h1>Frequently Asked Questions</h1>
      <div className="accordion">
        {accordionData.map(({ title, content }) => (
          <AccordionList title={title} content={content} />
        ))}
      </div>
    </div>
</Col>

     
      </Row>
    </Container>

    

    </div>
  );
}

export default GoPremium;