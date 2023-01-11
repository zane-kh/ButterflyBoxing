import React from "react";
import { Link } from "react-router-dom";

export const SplashScreen = () => {
  return (
    <div
      style={{
        background: "black",
        display: "grid",
        gridTemplateColums: "repeat(4, 1fr)",
        gridTemplateRows: "repeat(10, 1fr)",
        maxHeight: "100vh",
        padding: "0 0",
        paddingTop: "40px",
      }}
    >
      <div style={{ gridColumn: " 2/5", gridRow: "1/10 " }}>
        <img
          style={{ maxHeight: "90vh", maxWidth: "80vw" }}
          src="logo_2.png"
          alt=""
        />
      </div>
      <div
        style={{
          gridColumn: " 2/3",
          gridRow: "1/2",
          color: "white",
          verticalAlign: "bottom",
          textAlign: "right",
          fontSize: "70px",
          fontFamily: "Pacifico",
          zIndex: "1000",
        }}
      >
        Butterfly
      </div>
      <div
        style={{
          gridColumn: " 3/4",
          gridRow: "2/3",
          color: "white",
          verticalAlign: "bottom",
          textAlign: "left",
          fontSize: "70px",
          fontFamily: "Pacifico",
        }}
      >
        Boxing
      </div>
      <div
        style={{
          gridColumn: "3/5",
          gridRow: "7/8",
          textAlign: "center",
        }}
      >
        <Link
          to="/home"
          className="btn btn-md btn-light my-3"
          style={
            {
              // background: "url('splashscreen.webp')",
              // backgroundSize: "cover",
              // borderRadius: "100px",
              // color: "white",
              // width: "300px",
            }
          }
        >
          {" "}
          Shop Now
        </Link>
      </div>
      {/* <div
        style={{
          gridColumn: " 1/2",
          gridRow: "1/7",
          objectFit: "cover",
        }}
      >
        <img src="splashscreen.jpg" />
      </div> */}
    </div>
  );
};

export default SplashScreen;
