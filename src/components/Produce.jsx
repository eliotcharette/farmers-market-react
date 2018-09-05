import React from 'react';
import PropTypes from 'prop-types';

function Produce(props) {
  return (
    <div>
      <style jsx>{`
        .produce {
          background-color: lightblue;
          color: blue;
        }
        .produce:hover {
          background-color: teal;
          color: red;
        }
      `}
      </style>
      <div className="produce">
        <h3>{props.month}</h3>
        <ul>{props.selection.map((produce, index) =>
        <li key={index}>{produce}</li>)}</ul>
      </div>
    </div>
  );
}

Produce.propTypes = {
  month: PropTypes.string.isRequired,
  selection: PropTypes.string.isRequired
};

export default Produce;
