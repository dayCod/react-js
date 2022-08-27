import React, { useState } from 'react';

const LiveTexting = () => {
  const [getName, setName] = useState('');
  return (
    <React.Fragment>
      <h1>Live Texting React.js</h1>
      <span>{getName}</span>
      <br />
      <br />
      <input onChange={(e) => setName(e.target.value)}></input>
    </React.Fragment>
  );
};

export default LiveTexting;
