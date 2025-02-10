import React from "react";
import img2 from "../../assets/img2.webp";  // ✅ Import the image

const HomePage = () => {
  return (
    <div style={{ fontFamily: "Arial, sans-serif", padding: "20px", maxWidth: "1200px", margin: "auto" }}>
      {/* Content Wrapper */}
      <div
        className="content-wrapper"
        style={{
          display: "flex",
          flexWrap: "wrap",
          alignItems: "center",
          justifyContent: "space-between",
          gap: "20px",
        }}
      >
        {/* Left Content */}
        <div style={{ flex: "1.2", minWidth: "350px", paddingRight: "20px" }}>
          <h1>
            <br />Put <span style={{ textDecoration: "underline" }}>people</span> first
          </h1>
          <p>
            Fast, user-friendly and engaging - turn HR <br />
            into people and culture and streamline your daily <br /> operations with your own branded app.
          </p>
          {/* Input and Button */}
          <div style={{ display: "flex", flexWrap: "wrap", gap: "10px", marginTop: "20px" }}>
            <input
              type="email"
              placeholder="Enter work email"
              style={{
                padding: "12px",
                width: "260px",
                border: "1px solid #ccc",
                borderRadius: "5px",
              }}
            />
            <button
              style={{
                padding: "12px 18px",
                backgroundColor: "#4CAF50",
                color: "white",
                border: "none",
                cursor: "pointer",
                borderRadius: "5px",
              }}
            >
              Book a demo
            </button>
          </div>
          {/* Statistics */}
          <div style={{ marginTop: "30px", display: "flex", gap: "50px", flexWrap: "wrap" }}>
            <div>
              <h2>75.2%</h2>
              <p>Average daily activity</p>
            </div>
            <div>
              <h2>~20k</h2>
              <p>Average daily users</p>
            </div>
            <div>
              <h2>⭐⭐⭐⭐☆</h2>
              <p>4.5 Average user rating</p>
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
            maxWidth: "55%", // ✅ Increased width
          }}
        >
          <img
            src={img2}
            alt="Illustration"
            style={{
              width: "100%",
              maxWidth: "700px", // ✅ Wider image
              height: "auto",
              minHeight: "600px", // ✅ Increased height
              objectFit: "cover", // ✅ Ensures full coverage
              borderRadius: "10px", // ✅ Slight rounded corners for style
            }}
          />
        </div>
      </div>

      {/* Footer */}
      <footer style={{ marginTop: "50px", textAlign: "center", backgroundColor: "#f1f1f1", padding: "20px" }}>
        <p>
          Cookie Time: We use cookies to enhance your experience.{" "}
          <a href="#" style={{ color: "blue" }}>
            Learn more
          </a>
        </p>
        <button
          style={{
            padding: "12px",
            marginRight: "10px",
            border: "none",
            backgroundColor: "black",
            color: "white",
            cursor: "pointer",
            borderRadius: "5px",
          }}
        >
          Accept
        </button>
        <button
          style={{
            padding: "12px",
            border: "none",
            backgroundColor: "red",
            color: "white",
            cursor: "pointer",
            borderRadius: "5px",
          }}
        >
          Reject
        </button>
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
              max-width: 85%; /* ✅ Scales down image */
              min-height: 500px; /* ✅ Adjusts height */
            }
          }

          @media (max-width: 768px) {
            .content-wrapper {
              flex-direction: column;
              text-align: center;
            }
            .image-container img {
              max-width: 95%; /* ✅ Full width on mobile */
              min-height: 400px; /* ✅ Ensures good visibility */
            }
          }
        `}
      </style>
    </div>
  );
};

export default HomePage;
