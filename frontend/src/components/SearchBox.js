import React, { useState } from "react";
import { Form, Button } from "react-bootstrap";
import { Navigate, useNavigate } from "react-router-dom";

const SearchBox = () => {
  const [keyword, setKeyword] = useState("");

  const navigate = useNavigate();

  const submitHandler = (e) => {
    e.preventDefault();
    if (keyword.trim()) {
      navigate(`/search/${keyword}`);
    } else {
      navigate("/");
    }
  };

  return (
    <Form
      onSubmit={submitHandler}
      style={{
        display: "flex",
        flexDirection: "row",
        width: "60%",
        paddingLeft: "15%",
      }}
      className="searchbar"
    >
      <Form.Control
        type="text"
        name="q"
        onChange={(e) => setKeyword(e.target.value)}
        placeholder="Search Products . . ."
        className="mr-sm-2 ml-sm-5"
        style={{
          borderRadius: "100px",
          minWidth: "300px",
          background: "black",
          border: "1px solid silver",
          color: "white",
        }}
      ></Form.Control>
      <Button
        type="submit"
        variant="dark"
        className="p-2"
        style={{
          borderTopRightRadius: "100px",
          borderBottomRightRadius: "100px",
          width: "50px",
          marginLeft: "-30px",
          zIndex: "100",
          border: "1px solid silver",
        }}
      >
        <i class="fa-solid fa-magnifying-glass fa-xl"></i>
      </Button>
    </Form>
  );
};

export default SearchBox;
