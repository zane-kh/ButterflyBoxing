import React, { Fragment } from "react";
// import products from "../products";
import { Row, Col } from "react-bootstrap";
import Product from "../components/Product";
import { useEffect } from "react";
// import axios from "axios";
import { useDispatch, useSelector } from "react-redux";
import { listProducts } from "../actions/productActions";
import Message from "../components/Message";
import Loader from "../components/Loader";
import { useParams } from "react-router-dom";
import Paginate from "../components/Paginate";
import ProductCarousel from "../components/ProductCarousel";
import Meta from "../components/Meta";
import { Link } from "react-router-dom";

const HomeScreen = () => {
  // const [products, setProducts] = useState([]);
  const dispatch = useDispatch();

  const productList = useSelector((state) => state.productList);
  const { loading, error, products, page, pages } = productList;

  const { keyword, pageNumber } = useParams();
  const search = keyword;
  // const numberPage = pageNumber || 1;

  useEffect(() => {
    // const fetchProducts = async () => {
    //   try {
    //     const { data } = await axios.get("/api/products");
    //     setProducts(data);
    //   } catch (err) {
    //     console.log(err.message);
    //   }
    // };
    // fetchProducts();

    // dispatch(listProducts());
    dispatch(listProducts(search, pageNumber));
  }, [dispatch, keyword, pageNumber, search]);

  return (
    <Fragment>
      <Meta />

      {!keyword ? (
        <>
          {/* <img style={{ width: "50vw" }} src="/images/banner.jpg"></img> */}
          <ProductCarousel />
          <div
            style={{
              display: "flex",
              flexDirection: "row",
              justifyContent: "space-between",
              background: "black",
            }}
          >
            <div style={{ paddingLeft: "10px" }}>
              FREE SHIPPING ON ORDERS OVER $99 (excluding oversized items)
            </div>

            <div
              style={{
                display: "flex",
                flexDirection: "row",
                justifyContent: "space-around",
              }}
            >
              <div style={{ padding: "0 20px" }}>
                <i class="fa-brands fa-facebook-f"></i>
              </div>
              <div style={{ padding: "0 20px" }}>
                <i class="fa-brands fa-twitter"></i>
              </div>
              <div style={{ padding: "0 20px" }}>
                <i class="fa-brands fa-instagram"></i>
              </div>
              <div style={{ padding: "0 20px" }}>
                <i class="fa-brands fa-pinterest"></i>
              </div>
            </div>
          </div>
        </>
      ) : (
        <Link
          to="/home"
          className="btn btn-light"
          style={{
            background: " #e3e3e3",
            width: "100%",
            display: "flex",
            justifyContent: "start",
            paddingLeft: "80px",
          }}
        >
          {"< Go Back"}
        </Link>
      )}
      {loading ? (
        <Loader />
      ) : error ? (
        <Message variant="danger">{error}</Message>
      ) : products.length === 0 ? (
        <center>
          <Message variant="light">No results found</Message>
        </center>
      ) : (
        <>
          <Row
            style={{
              background: "white",
              padding: "30px 60px",
              justifyContent: "center",
            }}
          >
            {products.map((product) => (
              <Col
                key={product._id}
                sm={12}
                md={6}
                lg={4}
                xl={3}
                className="align-items-shrink d-flex"
              >
                <Product product={product} />
              </Col>
            ))}
          </Row>
          <Paginate
            pages={pages}
            page={page}
            keyword={keyword ? keyword : ""}
          />
        </>
      )}
    </Fragment>
  );
};

export default HomeScreen;
