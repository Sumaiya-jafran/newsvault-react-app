import React from "react";
import { Link, useLoaderData } from "react-router-dom";
import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
const News = () => {
  const newsDetails = useLoaderData();
  const { title, image_url, details,category_id } = newsDetails;
  return (
    <div>
      <Card style={{  }}>
        <Card.Img variant="top" src={image_url} />
        <Card.Body>
          <Card.Title>{title}</Card.Title>
          <Card.Text>
            {details}
          </Card.Text>
          <Button variant="info"><Link to={`/category/${category_id}`}>Go Home</Link></Button>
        </Card.Body>
      </Card>
    </div>
  );
};

export default News;
