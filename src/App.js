import Navbar from "./components/Navbar";
import Home from "./components/Home";
import About from "./components/About";
import NoteState from "./context/notes/NoteState";
import Alert from "./components/Alert";
import React, { useState } from "react";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Navigate,
} from "react-router-dom";
import Signin from "./components/Signin";
import Signup from "./components/Signup";
import PrivateRoute from "./components/PrivateRoute";

function App() {
  const [alert, setAlert] = useState(null);
  const showAlert = (message, type) => {
    setAlert({
      msg: message,
      type: type,
    });
    setTimeout(() => {
      setAlert(null);
    }, 3000);
  };

  const isLoggedIn = !!localStorage.getItem("token");

  return (
    <NoteState>
      <Router>
        <Navbar />
        <Alert alert={alert} />
        <div className="container">
          <Routes>
            <Route
              path="/"
              element={
                isLoggedIn ? (
                  <Navigate to="/home" replace />
                ) : (
                  <Navigate to="/signin" replace />
                )
              }
            />
            <Route
              path="/home"
              element={
                <PrivateRoute>
                  <Home showAlert={showAlert} />
                </PrivateRoute>
              }
            />
            <Route path="/about" element={<About />} />
            <Route path="/signin" element={<Signin showAlert={showAlert} />} />
            <Route path="/signup" element={<Signup showAlert={showAlert} />} />
          </Routes>
        </div>
      </Router>
    </NoteState>
  );
}

export default App;
