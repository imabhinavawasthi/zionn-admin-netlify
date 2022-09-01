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
import UserPage from "./Containers/UserPage/UserPage";
import AddUser from "./Containers/UserPage/AddUser";
import AddInventory from "./Containers/UserPage/AddInventory";

function App() {
  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route exact path="/" element={<Admin />} />
          <Route exact path="/users" element={<Users />} />
          <Route exact path="/inventory" element={<Inventory />} />
          <Route exact path="/signin" element={<Signin />} />
          <Route exact path="/users/user/:uid" element={<UserPage />} />
          <Route exact path="/users/addnewuser" element={<AddUser />} />
          <Route exact path="/users/user/addinventory/:uid/:email" element={<AddInventory />} />
          <Route path="*" element={<Navigate replace to="/" />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
