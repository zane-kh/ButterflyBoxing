import { Fragment } from "react";
import Header from "./components/Header";
import Footer from "./components/Footer";
import HomeScreen from "./screens/HomeScreen";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import ProductScreen from "./screens/ProductScreen";
import SplashScreen from "./screens/SplashScreen";
import CartScreen from "./screens/CartScreen";
import LoginScreen from "./screens/LoginScreen";
import RegisterScreen from "./screens/RegisterScreen";
import ProfileScreen from "./screens/ProfileScreen";
import ShippingScreen from "./screens/ShippingScreen";
import PaymentScreen from "./screens/PaymentScreen";
import PlaceOrderScreen from "./screens/PlaceOrderScreen";
import OrderScreen from "./screens/OrderScreen";
import UserListScreen from "./screens/UserListScreen";
import UserEditScreen from "./screens/UserEditScreen";
import ProductListScreen from "./screens/ProductListScreen";
import ProductEditScreen from "./screens/ProductEditScreen";
import OrderListScreen from "./screens/OrderListScreen";

function App() {
  return (
    <Fragment>
      <BrowserRouter>
        <main>
          <Routes>
            <Route path="/" element={<SplashScreen />} />
            <Route
              path="/home"
              element={
                <>
                  <Header />
                  <HomeScreen />
                  <Footer />
                </>
              }
            />
            <Route
              path="/product/:id"
              element={
                <>
                  <Header />
                  <ProductScreen />
                  <Footer />
                </>
              }
            />
            <Route
              path="/cart"
              element={
                <>
                  <Header />
                  <CartScreen />
                  <Footer />
                </>
              }
            />
            <Route
              path="/cart/:id"
              element={
                <>
                  <Header />
                  <CartScreen />
                  <Footer />
                </>
              }
            />
            <Route
              path="/login"
              element={
                <>
                  <Header />
                  <LoginScreen />
                </>
              }
            />

            <Route
              path="/register"
              element={
                <>
                  <Header />
                  <RegisterScreen />
                </>
              }
            />

            <Route
              path="/profile"
              element={
                <>
                  <Header />
                  <ProfileScreen />
                </>
              }
            />

            <Route
              path="/login/shipping"
              element={
                <>
                  <Header />
                  <ShippingScreen />
                  <Footer />
                </>
              }
            />

            <Route
              path="/payment"
              element={
                <>
                  <Header />
                  <PaymentScreen />
                  <Footer />
                </>
              }
            />

            <Route
              path="/placeorder"
              element={
                <>
                  <Header />
                  <PlaceOrderScreen />
                </>
              }
            />

            <Route
              path="/order/:id"
              element={
                <>
                  <Header />
                  <OrderScreen />
                  <Footer />
                </>
              }
            />

            <Route
              path="/admin/userList"
              element={
                <>
                  <Header />
                  <UserListScreen />
                  <Footer />
                </>
              }
            />

            <Route
              path="/search/:keyword"
              element={
                <>
                  <Header />
                  <HomeScreen />
                  <Footer />
                </>
              }
            />

            <Route
              path="/page/:pageNumber"
              element={
                <>
                  <Header />
                  <HomeScreen />
                  <Footer />
                </>
              }
            />

            <Route
              path="search/:keyword/page/:pageNumber"
              element={
                <>
                  <Header />
                  <HomeScreen />
                  <Footer />
                </>
              }
            />

            <Route
              path="/admin/user/:id/edit"
              element={
                <>
                  <Header />
                  <UserEditScreen />
                </>
              }
            />

            <Route
              path="/admin/productList"
              element={
                <>
                  <Header />
                  <ProductListScreen />
                </>
              }
            />

            <Route
              path="/admin/product/:id/edit"
              element={
                <>
                  <Header />
                  <ProductEditScreen />
                </>
              }
            />

            <Route
              path="/admin/orderList"
              element={
                <>
                  <Header />
                  <OrderListScreen />
                  <Footer />
                </>
              }
            />

            <Route
              path="/admin/productList/:pageNumber"
              element={
                <>
                  <Header />
                  <ProductListScreen />
                  <Footer />
                </>
              }
            />
          </Routes>
        </main>
      </BrowserRouter>
    </Fragment>
  );
}

export default App;
