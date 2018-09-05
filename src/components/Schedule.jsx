import React from 'react';
import PropTypes from 'prop-types';

function Schedule(props){
  return (
    <div>
      <style jsx>{`
          .color-toggle {
          background-color: lightgreen;
          color: blue;
        }
        .color-toggle:hover {
          background-color: pink;
          color: red;
        }
        `}</style>
      <div className="color-toggle"><h3>{props.day} - {props.location}</h3>
        <p><em>{props.hours}</em> , Booth: {props.booth} </p>
        <hr/>
      </div>
    </div>
  );
}

Schedule.propTypes = {
  day: PropTypes.string.isRequired,
  location: PropTypes.string.isRequired,
  hours: PropTypes.string.isRequired,
  booth: PropTypes.string
};

export default Schedule;
