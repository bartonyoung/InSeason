import React from 'react';

const WeatherItem = (props) => {
  const isFirstRow = props.index < 2;
  return (
    <div style={{display: 'flex', border: '1px purple solid', width: '48%', height: '25%', marginTop: `${isFirstRow ? '0px' : '15px'}`}}>
      <div style={{ flexGrow: 1, border: '1px black solid', alignItems: 'center' }}>IMAGE</div>
      <div style={{ flexGrow: 3, border: '1px black solid', fontSize: '10px' }}>
        <p>{props.day}</p>
        <p>{props.hi}</p>
        <p>{props.low}</p>
        <p>{props.description}</p>
      </div>
    </div>
  );
}
  

export default WeatherItem;
