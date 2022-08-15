import React from "react";
import { Link } from "react-router-dom";
import Navbar from './Navbar';

const Routings = () => {
  return (
    <div>
      <Link to="/">Show</Link>
      <Link to="/Add">Add</Link>

      <Link to="/Update">Update</Link>
      <Navbar/>
    </div>
  );
};

export default Routings;
