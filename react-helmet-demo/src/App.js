
import React from "react";
import { Helmet } from "react-helmet";

const App = () => {
  return (
    <div style={{ 
      fontFamily: "Arial, sans-serif", 
      textAlign: "center", 
      padding: "20px", 
      backgroundColor: "#f4f4f4" 
    }}>
      <Helmet>
        <title>React Helmet Demo</title>
        <meta name="description" content="A demo page showcasing React Helmet usage." />
      </Helmet>

      <h1 style={{ color: "#333", fontSize: "2em" }}>🚀 React Helmet POC</h1>
      <hr style={{ width: "50%", margin: "20px auto", border: "1px solid #555" }} />

      <p style={{ color: "#666", fontSize: "1.2em" }}>
        <strong>React Helmet</strong> is a library that helps manage the document head, 
        allowing you to dynamically update the page title, meta tags, and other 
        important SEO-related elements.
      </p>

      <div style={{ 
        backgroundColor: "#fff", 
        padding: "15px", 
        margin: "20px auto", 
        borderRadius: "10px", 
        boxShadow: "0 4px 8px rgba(0, 0, 0, 0.1)", 
        width: "60%" 
      }}>
        <h2 style={{ color: "#222" }}>Why Use React Helmet? 🛠️</h2>
        <ul style={{ listStyle: "none", padding: 0, color: "#444", fontSize: "1em" }}>
          <li>✅ Update Page Title Dynamically</li>
          <li>✅ Improve SEO with Meta Tags</li>
          <li>✅ Enhance Social Media Sharing</li>
          <li>✅ Works with Server-Side Rendering</li>
        </ul>
      </div>

      <p style={{ marginTop: "20px", fontSize: "1em", color: "#555" }}>
        Created by <strong>Harshit Dohare</strong>
      </p>
    </div>
  );
};

export default App;
