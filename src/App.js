import Admin from "./Containers/Admin/Admin"
import { BrowserRouter } from "react-router-dom";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Navigate,
} from "react-router-dom";
import Users from "./Containers/Users/Users";
import Inventory from "./Containers/Inventory/Inventory"
import Signin from "./Components/auth/Signin";

function App() {
  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route exact path="/" element={<Admin />} />
          <Route exact path="/users" element={<Users />} />
          <Route exact path="/inventory" element={<Inventory />} />
          <Route exact path="/signin" element={<Signin />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
