import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import "./App.css";
import Certificates from "./Certificates/Certificates";
import Footer from "./Footer/Footer";
import Header from "./Header/Header";
import Home from "./Home/Home";
import Jobs from "./Jobs/Jobs";
import NotFound from "./NotFound/NotFound";
import Payments from "./Payments/Payments";

function App() {
  return (
    <div className="App">
      <Router>
        <Header />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/jobs" element={<Jobs />} />
          <Route path="/payments" element={<Payments />} />
          <Route path="/certificates" element={<Certificates />} />

          <Route path="*" element={<NotFound />} />
        </Routes>
      </Router>
      <Footer />
    </div>
  );
}

export default App;
