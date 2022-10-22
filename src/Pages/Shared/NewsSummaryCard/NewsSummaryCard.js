import React from "react";
import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
import { Link } from "react-router-dom";
import Image from "react-bootstrap/Image";
import { FaEye, FaRegBookmark, FaShareAlt, FaStar } from "react-icons/fa";

const NewsSummaryCard = ({ news }) => {
  const { _id, title, image_url, details, author,rating } = news;
  return (
    <div>
      <Card border="info"  className="mb-3">
        <Card.Header className="d-flex">
          <div className="d-flex">
            <Image
              src={author.img}
              alt=""
              thumbnail
              roundedCircle
              style={{ width: "10%" }}
            ></Image>
            <div className="mx-3">
              <p className="mb-0">{author.name}</p>
              <p>{author.published_date}</p>
            </div>
          </div>
          <div>
            <FaRegBookmark></FaRegBookmark>
            <FaShareAlt></FaShareAlt>
          </div>
        </Card.Header>
        <Card.Body>
          <Card.Title>{title}</Card.Title>
          <Card.Img variant="top" src={image_url} className="" />
          <Card.Text>
            {details.length > 200 ? (
              <p>
                {details.slice(0, 200) + "..."}{" "}
                <Link to={`/news/${_id}`}>Read more</Link>
              </p>
            ) : (
              <p>{details}</p>
            )}
          </Card.Text>
        </Card.Body>
        <Card.Footer className="d-flex justify-content-between">
            <div>
                <FaStar className="text-warning"></FaStar> <span>{rating.number}</span>
            </div>
            <div>
                <FaEye></FaEye>
            </div>
        </Card.Footer>
      </Card>
    </div>
  );
};

export default NewsSummaryCard;
