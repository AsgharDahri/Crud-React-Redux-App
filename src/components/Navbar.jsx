import React from "react";
import { Routes, Route } from "react-router-dom";
import Add from "./Add";
import Show from "./Show";
import Update from "./Update";
const Navbar = () => {
  return (
    <div>
        <Routes>
          <Route >
          <Route exact path="/" element={<Show />} />

            <Route exact path="/Add" element={<Add />} />
            <Route exact path="/Update" element={<Update />} />
          </Route>
        </Routes>
    </div>
  );
};

export default Navbar;
