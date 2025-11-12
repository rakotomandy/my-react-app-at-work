import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./Home";
// import {useState} from "react-router-dom";
import axios from "axios";

function App() {
  const [data, setData]=useState([]);

  async function handleSubmit(email, password) {
    const send = await axios.post("http://localhost/mvc/form/insert", {
      email: email,
      password: password,
    });

    if (send.status == "200") {
      alert("data sent successfully");
      getData();
    }
  }

  async function getData(){
    const fetch=await axios.get("http://localhost/mvc/form/data").then(setData(data));
  }

  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home handleSubmit={handleSubmit} />}/>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
