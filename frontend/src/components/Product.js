import React from "react";
import { Card } from "react-bootstrap";
import Rating from "./Rating";
import { Link } from "react-router-dom";

const Product = ({ product }) => {
  return (
    <Card
      className="py-3 p-3 m-3 rounded"
      // style={{ boxShadow: "10px 10px 5px 0px rgba(0,0,0,0.75)" }}
      style={{ border: "none" }}
    >
      <Link to={`/product/${product._id}`}>
        <Card.Img
          src={product.image}
          variant="top"
          style={{ objectFit: "cover", height: "200px" }}
        />
      </Link>

      <Card.Body>
        <Link to={`/product/${product._id}`}>
          <Card.Title as="div">
            <strong>{product.name}</strong>
            <div style={{ display: "none" }}>{product.category}</div>
          </Card.Title>
        </Link>

        <Card.Text className="p-2">
          <Rating
            value={product.rating}
            text={`(${product.numReviews} reviews) `}
            color="red"
          />
        </Card.Text>

        <Card.Text as="h3">$ {product.price} </Card.Text>
      </Card.Body>
    </Card>
  );
};

export default Product;
