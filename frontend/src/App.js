import "./App.css";
import Navbar from "./Components/Navbar/Navbar";
import Signup from "./Components/Register";
import Login from "./Components/Login";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
//app.js
const App = () => {
  return (
    <Router>
      <div>
        <Navbar />
        <Routes>
          <Route path="/" exact render={() => <h2>Home Page</h2>} />
          <Route path="/login" exact element={<Login />} />
          <Route path="/signup" exact element={<Signup />} />
        </Routes>
        {/* Add more routes as needed */}
      </div>
    </Router>
  );
};

export default App;
