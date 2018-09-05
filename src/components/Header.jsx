import React from 'react';



function Header() {
  return (

    <div>
      <style jsx>{`
          .header {
          background-color: lightblue;
          color: blue;
          text-align: center;
        }
        .header:hover {
          background-color: lightpink;
          color: red;
        }
        `}</style>
      <div className="header">
        <h1>Farmer's Market</h1>
        <br/>
      </div>
    </div>
  );
}

export default Header;
