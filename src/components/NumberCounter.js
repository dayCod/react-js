import React, { useState } from 'react';

const NumberCounter = () => {
  const [getLimit, setLimit] = useState(1);
  return (
    <React.Fragment>
      <h1>Number Counter React.js</h1>
      <span>{getLimit}</span>
      <br />
      <button onClick={() => setLimit((prev) => prev + 1)}>Tambahkan +</button>
      <button onClick={() => setLimit((prev) => prev - 1)}>Kurangi -</button>
    </React.Fragment>
  );
};

export default NumberCounter;
