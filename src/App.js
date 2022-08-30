import Admin from "./Containers/Admin/Admin"
import { BrowserRouter } from "react-router-dom";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Navigate,
} from "react-router-dom";

function App() {
  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route exact path="/" element={<Admin/>} />
          
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
