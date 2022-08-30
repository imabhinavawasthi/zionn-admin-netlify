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

function App() {
  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route exact path="/" element={<Admin/>} />
          <Route exact path="/users" element={<Users/>} />
          <Route exact path="/inventory" element={<Inventory/>} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
