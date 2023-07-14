import React from "react";
import { Routes, Route } from "react-router-dom";
import NaveBar from "./components/Navbar";
import LoginPage from "./pages/Login";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <ToastContainer />
        <Routes>
          <Route path="/login" element={<LoginPage />} />
        </Routes>
      </header>
    </div>
  );
}

export default App;
