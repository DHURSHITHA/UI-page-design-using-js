import React from "react";
import img2 from "../../assets/img2.webp"; // ✅ Import image
import StarIcon from "@mui/icons-material/Star";
import StarHalfIcon from "@mui/icons-material/StarHalf";

const HomePage = () => {
  return (
    <div style={{ fontFamily: "Arial, sans-serif", padding: "3%", maxWidth: "90%", margin: "auto" }}>
      {/* Content Wrapper */}
      <div
        className="content-wrapper"
        style={{
          display: "flex",
          flexWrap: "wrap",
          alignItems: "center",
          justifyContent: "space-between",
          gap: "3%",
        }}
      >
        {/* Left Content */}
        <div style={{ flex: "1.2", minWidth: "35%", paddingRight: "3%" }}>
          <h1 style={{ marginBottom: "3%" }}>
            <br />
            Put <span style={{ textDecoration: "underline" }}>people</span> first
          </h1>
          <p>
            Fast, user-friendly and engaging - turn HR <br />
            into people and culture and streamline your daily <br /> operations with your own branded app.
          </p>

          <div style={{ position: "relative", width: "40%" }}>
  <input
    type="email"
    placeholder="Enter work email"
    style={{
      width: "100%",
      padding: "10px",
      border: "1px solid #ccc",
      borderRadius: "5px",
      outline: "none",
      fontSize: "16px",
      paddingRight: "110px", // Increased padding to push button further right
    }}
  />
  <button
    style={{
      position: "absolute",
      right: "-118px", // Shifted more to the right
      top: "50%",
      transform: "translateY(-50%)",
      backgroundColor: "#4CAF50",
      color: "white",
      border: "none",
      padding: "8px 18px", // Adjusted padding for better fit
      borderRadius: "5px",
      cursor: "pointer",
      fontSize: "14px",
    }}
  >
    Book a demo
  </button>
</div>


          {/* Statistics */}
          <div style={{ marginTop: "5%", display: "flex", gap: "5%", flexWrap: "wrap", alignItems: "center" }}>
            <div>
              <h2>75.2%</h2>
              <p>Average daily activity</p>
            </div>
            <div style={{ borderLeft: "1px solid lightgrey", height: "50px" }}></div>
            <div>
              <h2>~20k</h2>
              <p>Average daily users</p>
            </div>
            <div>
              {/* Updated Star Rating with Text in Same Line */}
              <div style={{ display: "flex", alignItems: "center", gap: "5px" }}>
                <StarIcon style={{ color: "black" }} />
                <StarIcon style={{ color: "black" }} />
                <StarIcon style={{ color: "black" }} />
                <StarIcon style={{ color: "black" }} />
                <StarHalfIcon style={{ color: "black" }} />
                <p style={{ margin: "0", color: "#A9A9A9" }}>    4.5 Average user rating</p>
              </div>
            </div>
          </div>
        </div>

        {/* Right-Side Image */}
        <div
          className="image-container"
          style={{
            flex: "1",
            display: "flex",
            justifyContent: "center",
            textAlign: "center",
            maxWidth: "55%",
          }}
        >
          <img
            src={img2}
            alt="Illustration"
            style={{
              width: "100%",
              maxWidth: "700px",
              height: "auto",
              minHeight: "600px",
              objectFit: "cover",
              borderRadius: "10px",
            }}
          />
        </div>
      </div>

      {/* Footer */}
      <footer
        style={{
          marginTop: "5%",
          backgroundColor: "#f1f1f1",
          padding: "2%",
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center", // ✅ Ensures everything stays in one line
          flexWrap: "wrap", // ✅ Allows wrapping for smaller screens
        }}
      >
        <p style={{ margin: "0" }}>
          Cookie Time: We use cookies to enhance your experience.{" "}
          <a href="#" style={{ color: "blue" }}>
            Learn more
          </a>
        </p>

        <div style={{ display: "flex", gap: "10px" }}>
          <button
            style={{
              padding: "10px 15px",
              border: "none",
              backgroundColor: "#d3d3d3", // ✅ Light ash background
              color: "black", // ✅ Black font color
              cursor: "pointer",
              borderRadius: "5px",
            }}
          >
            Accept
          </button>
          <button
            style={{
              padding: "10px 15px",
              border: "none",
              backgroundColor: "#d3d3d3", // ✅ Light ash background
              color: "black", // ✅ Black font color
              cursor: "pointer",
              borderRadius: "5px",
            }}
          >
            Reject
          </button>
        </div>
      </footer>

      {/* Responsive Design */}
      <style>
        {`
          @media (max-width: 1024px) {
            .content-wrapper {
              flex-direction: column;
              text-align: center;
            }
            .image-container img {
              max-width: 85%;
              min-height: 40vh;
            }
            footer {
              flex-direction: column;
              text-align: center;
            }
            footer div {
              margin-top: 10px;
            }
          }

          @media (max-width: 768px) {
            .content-wrapper {
              flex-direction: column;
              text-align: center;
            }
            .image-container img {
              max-width: 95%;
              min-height: 30vh;
            }
            input {
              width: 80%;
            }
            footer {
              flex-direction: column;
              text-align: center;
            }
            footer div {
              margin-top: 10px;
              display: flex;
              justify-content: center; /* ✅ Centers buttons on mobile */
            }
          }
        `}
      </style>
    </div>
  );
};

export default HomePage;
