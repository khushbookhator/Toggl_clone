import React from 'react';
import { Link } from 'react-router-dom';

const NotFound = () => (
  <div style={{
    width:"20%",
    margin:"auto",
    textAlign:"center"
  }}>
    <h1>4😔4</h1>
    <h2>We are unable to find that page.</h2>
    <Link to="/">
      Home
    </Link>
  </div>
);

export {NotFound};