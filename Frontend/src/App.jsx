import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { Toaster } from "react-hot-toast";
import Success from "./pages/Success";
import NOTFound from "./pages/NOTFound";
import Home from "./pages/Home";

const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/success" element={<Success />} />
        <Route path="/*" element={<NOTFound />} />
      </Routes>
      <Toaster />
    </Router>
  );
};

export default App;
