import "./App.css";
import Create from "./components/create/Create";
import Read from "./components/read/Read";
import { BrowserRouter as Router, Route, Routes, Link } from "react-router-dom";
import Update from "./components/update/Update";
import Delete from "./components/delete/Delete";

function App() {
  return (
    <Router>
      <div className="main">
        <div className="heading">
          <h3>React CRUD Operations</h3>
        </div>

        <Routes>
          <Route path="/" element={<Create />} />
          <Route path="/read" element={<Read />} />
          <Route path="/update" element={<Update />} />
          <Route path="/delete" element={<Delete />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
