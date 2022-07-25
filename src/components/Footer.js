import React from 'react';

function footer() {
  const year = new Date().getFullYear();
  return (
    <div>
      <div
        style={{
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
        }}
      >
        <p>Copyright © {year} </p>
      </div>
    </div>
  );
}

export default footer;
