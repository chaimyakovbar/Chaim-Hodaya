import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

import FrontDialog from "./components/js/FrontDialog";
import SecPage from "./components/js/SecPage";

const App = () => {
  return (
      <Router>
        <Routes>
          <Route path="/" element={<FrontDialog />} />
          <Route path="/SecPage" element={<SecPage />} />
        </Routes>
      </Router>
  );
};

export default App;
