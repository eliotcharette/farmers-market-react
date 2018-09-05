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
      `}
      </style>
      <div className="produce">
        <h3>{props.month}</h3>
        <li>{props.selection}</li>
      </div>
    </div>
  );
}

Produce.propTypes = {
  month: PropTypes.string.isRequired,
  selection: PropTypes.string.isRequired
};

export default Produce;
