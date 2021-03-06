import React from 'react'
import { Link } from 'react-router-dom'
import { Button, Media, Jumbotron } from 'reactstrap';
import Logo from '../assets/images/Logo.png';

export default function CakeButton() {
  return (
    <div>
      <Jumbotron className="home-jumbo">
        <Media id="logo-home" object src={Logo} alt="Baker Girl Logo" />

        <div className="intro">

          <p className="lead text-center">Welcome to BakerGirl! A home for all things sweet and delicious.<br /> Ready to customize your dream cake?<br /> Click Below!</p>

          <Link to="/CreateACake"><Button className="button">Create A Cake</Button></Link>
        </div>
      </Jumbotron>
    </div>
  );
};
