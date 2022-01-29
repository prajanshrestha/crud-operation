import "./App.css";
import Create from "./components/create/Create";
import Read from "./components/read/Read";
import { BrowserRouter as Router, Route, Routes, Switch} from "react-router-dom";
import Update from "./components/update/Update";
import Delete from "./components/delete/Delete";
import NotFound from "./components/NotFound";

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

          {/* Page not found */}
          <Route path="*" element={<NotFound />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
