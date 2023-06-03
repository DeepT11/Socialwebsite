import Home from "./pages/home/Home";
// import PersonIcon from '@mui/icons-material/Person';
// import Topbar from "./components/topbar/Topbar";
import Profile from "./pages/profile/Profile";
import Login from "./pages/login/Login";
import Register from "./pages/register/Register";
import {
  BrowserRouter as Router,
  Routes,
  Route
} from "react-router-dom";

import { useContext } from "react";
import { AuthContext } from "./context/AuthContext";

function App() {
  const { user } = useContext(AuthContext);
  return (
    <Router>
      <Routes>
      <Route path="/" element={user ? <Home /> : <Register />} />
      <Route path="/login" element={user ? <Redirect to="/" /> : <Login />} />
      <Route path="/register" element={user ? <Redirect to="/" /> : <Register />} />
      <Route path="/profile/:username" element={<Profile/>} />
        
      </Routes>
    </Router>
  );
}

export default App;
