import React, { useState } from "react";
import axios from "axios";

function App() {
  const [file, setFile] = useState(null);

  const handleFileChange = (e) => {
    setFile(e.target.files[0]);
  };

  const handleUpload = async () => {
    if (!file) {
      alert("Please select a file");
      return;
    }

    const formData = new FormData();
    formData.append("file", file);

    try {
      const response = await axios.post(
        "http://localhost:9090/upload-csv",
        formData,
        {
          headers: { "Content-Type": "multipart/form-data" },
        }
      );
      alert("Upload successful: " + response.data);
    } catch (error) {
      console.error(error);
      alert("Upload failed");
    }
  };

  return (
    <div
      style={{
        padding: "2rem",
        maxWidth: "500px",
        margin: "50px auto",
        textAlign: "center",
        border: "1px solid #ddd",
        borderRadius: "10px",
        boxShadow: "0 4px 8px rgba(0, 0, 0, 0.1)",
        fontFamily: "Arial, sans-serif",
        backgroundColor: "#f9f9f9",
      }}
    >
      <h1 style={{ color: "#333", marginBottom: "20px" }}>Upload a CSV File</h1>
      <input
        type="file"
        accept=".csv"
        onChange={handleFileChange}
        style={{
          marginBottom: "20px",
          padding: "10px",
          border: "1px solid #ccc",
          borderRadius: "5px",
          backgroundColor: "#fff",
        }}
      />
      <br />
      <button
        onClick={handleUpload}
        style={{
          padding: "10px 20px",
          backgroundColor: "#4CAF50",
          color: "white",
          border: "none",
          borderRadius: "5px",
          cursor: "pointer",
          fontSize: "16px",
        }}
      >
        Upload
      </button>
    </div>
  );
}

export default App;
