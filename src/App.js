import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Homepage from "./components/Homepage";
import Header from "./components/Header/Header";
import FooterSec from "./components/Header/FooterSec";
import Gol from "./components/Gol/Gol";
import Packages from "./components/package/Packages";
import Profile from "./components/UserProfiles/Profile";
import { useDispatch } from "react-redux";
import { useEffect } from "react";
import { getuser } from "./redux/ActionUser";
import Signup from "./components/UserProfiles/Signup";
import Login from "./components/UserProfiles/Login";

function App() {
  const dispatch = useDispatch();
  useEffect(() => {
    const verifyuser = async () => {
      await dispatch(getuser());
    };
    verifyuser();
  }, [dispatch]);
  return (
    <BrowserRouter>
      <Header />
      <Routes>
        <Route path="/" element={<Homepage />} />
        <Route path="/gol" element={<Gol />} />
        <Route path="/packages" element={<Packages />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/login" element={<Login />} />
        <Route path="/profile" element={<Profile />} />
      </Routes>
      <FooterSec />
    </BrowserRouter>
  );
}

export default App;
