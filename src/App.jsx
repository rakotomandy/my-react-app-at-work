import { Routes, Route, useNavigate } from "react-router-dom";
import Home from "./Home";
import Users from "./Users";
import { useState, useEffect } from "react";
import axios from "axios";

function App() {
  const [data, setData] = useState([]);
  const navigate = useNavigate();

  async function handleSubmit(email, password) {
    const send = await axios.post("http://localhost/mvc/form/insert", {
      email: email,
      password: password,
    });

    if (send.status == 200) {
      alert("data sent successfully");
      getData();
      navigate("/Users");
    }
  }

  useEffect(() => {
    getData();
  }, []);

  async function getData() {
    await axios
      .get("http://localhost/mvc/form/data")
      .then((response) => setData(response.data))
      .catch((error) => {
        if (error.response) {
          console.error("GET failed:", error.response.status);
          console.error("Response:", error.response.data);
        } else if (error.request) {
          console.error("GET no response:", error.request);
        } else {
          console.error("Error:", error.message);
        }
      });
  }

  async function deleteUser(id) {
    const del = await axios.post("http://localhost/mvc/form/delete", {
      id: id,
    });

    if (del.status == 200) {
      getData();
      // setData(prev=>prev.filter((user)=>user.id!==id))
    }
  }

  // ✅ ADD UPDATE FUNCTION
  async function updateUser(id, email, password) {
    const upd = await axios.post("http://localhost/mvc/form/update", {
      id: id,
      email: email,
      password: password,
    });

    if (upd.status == 200) {
      alert("user updated");
      getData();
      // optional frontend update:
      // setData(prev => prev.map(user => user.id === id ? { ...user, email, password } : user));
    }
  }

  return (
    <Routes>
      <Route path="/" element={<Home handleSubmit={handleSubmit} />} />
      <Route
        path="/Users"
        element={
          <Users
            deleteUser={deleteUser}
            updateUser={updateUser}   // ← send update function
            data={data}
          />
        }
      />
    </Routes>
  );
}

export default App;
