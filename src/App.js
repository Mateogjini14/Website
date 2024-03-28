import React from 'react';
import {
  BrowserRouter,
  Routes,
  Route,
} from "react-router-dom";
import MainWeb from './MainWeb';
import Terms from './terms_and_conditions';
import ScrollTop from './Components/ScrollTop';
function App() {
  return (
    <BrowserRouter>
    <ScrollTop/>
      <Routes>
        <Route
            exact
            path="/"
            element={<MainWeb />}
        />
        <Route
            exact
            path="/Terms_And_Conditions"
            element={<Terms />}
        />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
