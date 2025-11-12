import { Routes, Route, useNavigate } from "react-router-dom";
import Home from "./Home";
import Users from "./Users";
import { useState,useEffect } from "react";
import axios from "axios";

function App() {
  const [data, setData] = useState([]);
  const navigate=useNavigate();

  async function handleSubmit(email, password) {
    const send = await axios.post("http://localhost/mvc/form/insert", {
      email: email,
      password: password,
    });

    if (send.status == "200") {
      alert("data sent successfully");
      getData();
      navigate("/Users")
    }
  }

  useEffect(()=>{
    getData()
  },[])

  async function getData() {
    await axios
      .get("http://localhost/mvc/form/data")
      .then((response) => setData(response.data))
      .catch((error) => {
        // If request fails, this block runs
        if (error.response) {
          // Server responded with status code outside 2xx
          console.error(
            "GET /posts failed with status:",
            error.response.status
          );
          console.error("Response data:", error.response.data);
        } else if (error.request) {
          // Request was made but no response received
          console.error("GET /posts no response received:", error.request);
        } else {
          // Something else triggered the error
          console.error("GET /posts error message:", error.message);
        }
      });
  }

  return (
      <Routes>
        <Route path="/" element={<Home handleSubmit={handleSubmit} />} />
        <Route path="/Users" element={<Users data={data} />} />
      </Routes>
  );
}

export default App;
