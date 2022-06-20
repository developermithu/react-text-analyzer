import { useState } from "react";
import "./App.css";
import Alert from "./components/Alert";
import Home from "./components/pages/Home";
import TheFooter from "./components/TheFooter";
import TheHeader from "./components/TheHeader";

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
      <TheHeader className="relative" />

      {/* Alert */}
      <Alert alert={alert} className="absolute top-10 right-10" />

      <div className="container">
        <Home showAlert={showAlert} />
      </div>

      <TheFooter />
    </>
  );
}

export default App;
