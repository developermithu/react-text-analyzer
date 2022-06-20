import { useState } from "react";
import "./App.css";

// React Router Dom
import { BrowserRouter, Routes, Route } from "react-router-dom";

// Components
import Alert from "./components/Alert";
import TheFooter from "./components/TheFooter";
import TheHeader from "./components/TheHeader";

// Pages
import Home from "./components/pages/Home";
import About from "./components/pages/About";
import Creator from "./components/pages/Creator";
import Error from './components/pages/Error'

function App() {
  const [alert, setAlert] = useState(null);

  const showAlert = (message, type) => {
    setAlert({
      msg: message,
      type: type,
    });

    setTimeout(() => {
      setAlert(null);
    }, 2500);
  };

  return (
    <>
      <BrowserRouter>
        <TheHeader className="relative" />

        {/* Alert */}
        <Alert alert={alert} className="absolute top-10 right-10" />

        <Routes>
          <Route path="/" element={<Home showAlert={showAlert} />} />
          <Route path="about" element={<About />} />
          <Route path="creator" element={<Creator />} />
          {/* 404 page not found */}
          <Route path="*" element={<Error />}
          />
        </Routes>

        <TheFooter />
      </BrowserRouter>
    </>
  );
}

export default App;
