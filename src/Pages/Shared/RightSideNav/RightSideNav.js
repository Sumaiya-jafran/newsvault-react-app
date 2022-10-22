import React from "react";
import Button from "react-bootstrap/Button";
import ButtonGroup from "react-bootstrap/ButtonGroup";
import { FaGoogle, FaGithub, FaFacebook,FaTwitter,FaWhatsapp,FaTwitch } from "react-icons/fa";
import BrandCarousel from "../BrandCarousel/BrandCarousel";

const RightSideNav = () => {
  return (
    <div>
      <ButtonGroup className="mb-5" vertical>
        <Button className="mb-2" variant="outline-success">
          {" "}
          <FaGoogle /> Login with Google
        </Button>
        <Button variant="outline-warning">
          {" "}
          <FaGithub /> Login with Github
        </Button>
      </ButtonGroup>
      <div>
        <h5>Find us on</h5>
        <ButtonGroup className="mt-3" vertical>
        <Button className="mb-2" variant="outline-info">
          {" "}
          <FaFacebook /> Facebook
        </Button>
        <Button className="mb-2" variant="outline-info">
          {" "}
          <FaWhatsapp /> Whatsapp
        </Button>
        <Button className="mb-2" variant="outline-info">
          {" "}
          <FaTwitter /> Twitter
        </Button>
        <Button className="mb-2" variant="outline-info">
          {" "}
          <FaTwitch /> Twitch
        </Button>
        
      </ButtonGroup>
      </div>
      <div>
        <BrandCarousel></BrandCarousel>
      </div>
    </div>
  );
};

export default RightSideNav;
