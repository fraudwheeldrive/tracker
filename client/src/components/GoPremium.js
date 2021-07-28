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
import { FaRegCheckCircle,FaRegTimesCircle, FaAndroid, FaApple } from "react-icons/fa";

const checkStyle = { color: "green", fontSize: "2.3em" };
const xStyle = { color: "red", fontSize: "2.3em" };
const colStyle = {fontSize: "1.57em"};

 

function GoPremium(props) {

 

  const accordionData = [
    {
      title: 'What Is PocketWatch?',
      content: `Pocket watch is the ultimate media tracking application. The application contains a slick and user 
      focused UI paired with a robust database of Movies, Tv Shows and many other forms of media. With this application 
      you can see whats on your favorite streaming apps, whats in the theater and even on the TV!. You will be able to 
      discover new content that is geared to you, create and share your favorites, and build your ultimate sleepy sunday
      movie list! `
    },
    {
      title: 'How much does Pocket Watch Cost? ',
      content: `Pocketwatch comes in 2 distinct flavours! we have a very functional free application, and by free we mean 
      in cost and from advertisements. You will not need to answer surveys or sit through advertisements to unlock this apps
      base functionality. Our Paid app unlocks Pocketwatch's full potential, and all for the low monthly cost of $3.99!. Please
      refer to the chart above for the specifics of each model`
    },
    {
      title: 'What platforms are supported?',
      content: `Pocketwatch can be used in any browser and can be downloaded and used on your Android  and IOS devices `
    },
    {
      title: 'How Do I Cancel?',
      content: `You wont want too! but if you should need to we have a skilled team of customer care professionals who will 
      assist you with this process`
    },
    {
      title: 'What Streaming Services can PocketWatch track?',
      content: ` Remember when it was just netflix? now we've come full circle and there almost as many apps as channels. Good news! 
      Pocketwatch supports almost all of the them! We support a robust database containing shows from Netflix, Amazon prime, Hulu, Disney+, 
      hollywood blockbusters, cable hits, syndicated legends and foreign films!`
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