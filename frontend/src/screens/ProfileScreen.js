import React, { useState, useEffect, Fragment } from "react";
import { Table, Form, Button, Row, Col } from "react-bootstrap";
import { LinkContainer } from "react-router-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import Message from "../components/Message";
import Loader from "../components/Loader";
import { getUserDetails, updateUserProfile } from "../actions/userActions";
import { useNavigate } from "react-router-dom";
import { USER_UPDATE_PROFILE_RESET } from "../constants/userConstants";
import { listMyOrders } from "../actions/orderActions";

const ProfileScreen = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [message, setMessage] = useState(null);

  const dispatch = useDispatch();

  const userDetails = useSelector((state) => state.userDetails);
  const { loading, error, user } = userDetails;

  const userLogin = useSelector((state) => state.userLogin);
  const { userInfo } = userLogin;

  const userUpdateProfile = useSelector((state) => state.userUpdateProfile);
  const { success } = userUpdateProfile;

  const navigate = useNavigate();

  const orderMyList = useSelector((state) => state.orderMyList);
  const { loading: loadingOrders, error: errorOrders, orders } = orderMyList;

  useEffect(() => {
    if (!userInfo) {
      navigate("/login");
    } else {
      if (!user || !user.name || success) {
        dispatch({ type: USER_UPDATE_PROFILE_RESET });
        dispatch(getUserDetails("profile")); //userRoutes.route('/profile')
        dispatch(listMyOrders());
        console.log(orders);
      } else {
        setName(user.name);
        setEmail(user.email);
      }
    }
  }, [dispatch, navigate, orders, success, user, userInfo]);

  const submitHandler = (e) => {
    e.preventDefault();
    if (password !== confirmPassword) {
      setMessage("Passwords do not match");
    } else {
      dispatch(updateUserProfile({ id: user._id, name, email, password }));
    }
  };

  return (
    <Row style={{ width: "90vw", margin: "0 auto" }}>
      <Col md={3} style={{ paddingTop: "20px" }}>
        <h2>User Profile</h2>
        {message && <Message variant="danger">{message}</Message>}
        {success && <Message variant="success">Profile Updated</Message>}
        {loading ? (
          <Loader />
        ) : error ? (
          <Message variant="danger">{error}</Message>
        ) : (
          <Form onSubmit={submitHandler}>
            <Form.Group controlId="name" className="py-2">
              <Form.Label>Name</Form.Label>
              <Form.Control
                type="name"
                placeholder="Enter name"
                value={name}
                onChange={(e) => setName(e.target.value)}
              ></Form.Control>
            </Form.Group>

            <Form.Group controlId="email" className="py-2">
              <Form.Label>Email Address</Form.Label>
              <Form.Control
                type="email"
                placeholder="Enter email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              ></Form.Control>
            </Form.Group>

            <Form.Group controlId="password" className="py-2">
              <Form.Label>Password</Form.Label>
              <Form.Control
                type="password"
                placeholder="Enter password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
              ></Form.Control>
            </Form.Group>

            <Form.Group controlId="confirmPassword" className="py-2">
              <Form.Label>Confirm Password</Form.Label>
              <Form.Control
                type="password"
                placeholder="Confirm password"
                value={confirmPassword}
                onChange={(e) => setConfirmPassword(e.target.value)}
              ></Form.Control>
            </Form.Group>

            <center className="py-2">
              <Button type="submit" variant="primary">
                Update
              </Button>
            </center>
          </Form>
        )}
      </Col>
      <Col md={9} style={{ paddingTop: "20px" }}>
        <h2>My Orders</h2>
        {loadingOrders ? (
          <Loader />
        ) : errorOrders ? (
          <Message variant="danger">{errorOrders}</Message>
        ) : (
          <Table striped bordered hover responsive className="table-sm">
            <thead>
              <tr>
                <th>DATE</th>
                <th>TOTAL</th>
                <th>PAID</th>
                <th>DELIVERED</th>
                <th>DETAILS</th>

                <th>ID</th>
              </tr>
            </thead>
            <tbody>
              {orders.map((order) => (
                <tr key={order._id}>
                  <td>{order.createdAt.substring(0, 10)}</td>
                  <td>{order.totalPrice}</td>
                  <td>
                    {order.isPaid ? (
                      order.paidAt.substring(0, 10)
                    ) : (
                      <i className="fas fa-times" style={{ color: "red" }}></i>
                    )}
                  </td>
                  <td>
                    {order.isDelivered ? (
                      order.deliveredAt.substring(0, 10)
                    ) : (
                      <i className="fas fa-times" style={{ color: "red" }}></i>
                    )}
                  </td>
                  <td>
                    <LinkContainer to={`/order/${order._id}`}>
                      <Button className="btn-sm" variant="light">
                        Details
                      </Button>
                    </LinkContainer>
                  </td>
                  <td>{order._id}</td>
                </tr>
              ))}
            </tbody>
          </Table>
        )}
      </Col>
    </Row>
  );
};

//   return (
//     <Fragment>
//       {loading ? <Loader /> : <></>}
//       {error ? <Message variant="danger">{error}</Message> : <></>}
//       {loadingOrders && <Loader />}
//       {errorOrders && <Message variant="danger">{errorOrders}</Message>}
//       <Row style={{ width: "90vw", margin: "0 auto" }}>
//         <Col md={3} style={{ paddingTop: "20px" }}>
//           <h2>User Profile</h2>

//           {/* {message && <Message variant="danger">{message}</Message>}
//           {error && <Message variant="danger">{message}</Message>} */}
//           {success ? (
//             <Message variant="success">Profile Updated</Message>
//           ) : (
//             <></>
//           )}
//           <Form onSubmit={submitHandler}>
//             <Form.Group controlId="name" className="py-2">
//               <Form.Label>Name</Form.Label>
//               <Form.Control
//                 type="name"
//                 placeholder="Enter name"
//                 value={name}
//                 onChange={(e) => setName(e.target.value)}
//               ></Form.Control>
//             </Form.Group>

//             <Form.Group controlId="email" className="py-2">
//               <Form.Label>Email Address</Form.Label>
//               <Form.Control
//                 type="email"
//                 placeholder="Enter email"
//                 value={email}
//                 onChange={(e) => setEmail(e.target.value)}
//               ></Form.Control>
//             </Form.Group>

//             <Form.Group controlId="password" className="py-2">
//               <Form.Label>Password</Form.Label>
//               <Form.Control
//                 type="password"
//                 placeholder="Enter password"
//                 value={password}
//                 onChange={(e) => setPassword(e.target.value)}
//               ></Form.Control>
//             </Form.Group>

//             <Form.Group controlId="confirmPassword" className="py-2">
//               <Form.Label>Confirm Password</Form.Label>
//               <Form.Control
//                 type="password"
//                 placeholder="Confirm password"
//                 value={confirmPassword}
//                 onChange={(e) => setConfirmPassword(e.target.value)}
//               ></Form.Control>
//             </Form.Group>

//             <div className="py-2">
//               <Button type="submit" variant="primary">
//                 Update
//               </Button>
//             </div>
//           </Form>
//         </Col>

//         <Col md={9} style={{ paddingTop: "20px" }}>
//           <h2>My Orders</h2>
//           {/* {loadingOrders && <Loader />}
//           {errorOrders && <Message variant="danger">{errorOrders}</Message>} */}

//           <Table striped bordered hover responsive className="table-sm">
//             <thead>
//               <tr>
//                 <th>DATE</th>
//                 <th>TOTAL</th>
//                 <th>PAID</th>
//                 <th>DELIVERED</th>
//                 <th>DETAILS</th>
//                 <th>ID</th>
//               </tr>
//             </thead>
//             <tbody>
//               {orders.map((order) => (
//                 <tr key={order._id}>
//                   <td>{order.createdAt.substring(0, 10)}</td>
//                   <td>{order.totalPrice}</td>
//                   <td>
//                     {order.isPaid ? (
//                       order.paidAt.substring(0, 10)
//                     ) : (
//                       <i className="fas fa-times" style={{ color: "red" }}></i>
//                     )}
//                   </td>
//                   <td>
//                     {order.isDelivered ? (
//                       order.deliveredAt.substring(0, 10)
//                     ) : (
//                       <i className="fas fa-times" style={{ color: "red" }}></i>
//                     )}
//                   </td>
//                   <td>
//                     <LinkContainer to={`/order/${order._id}`}>
//                       <Button className="btn-sm" variant="outline-dark">
//                         Details
//                       </Button>
//                     </LinkContainer>
//                   </td>
//                   <td>{order._id}</td>
//                 </tr>
//               ))}
//             </tbody>
//           </Table>
//         </Col>
//       </Row>
//     </Fragment>
//   );
// };

export default ProfileScreen;
