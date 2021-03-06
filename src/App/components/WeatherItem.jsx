import React from 'react';

const WeatherItem = ({ handleWeatherItemClick, data, index }) => {
  const isFirstRow = index < 2;
  return (
    <div onClick={() => handleWeatherItemClick(data)} style={{cursor: 'pointer', display: 'flex', border: '1px purple solid', width: '100%', height: '25%', marginTop: `${isFirstRow ? '0px' : '2.5px'}`}}>
      <div style={{ flexGrow: 1, border: '1px black solid', alignItems: 'center' }}>{data.name}</div>
        {/* <p>{props.day}</p>
        <p>{props.hi}</p>
        <p>{props.low}</p>
        <p>{props.description}</p> */}
    </div>
  );
}
  

export default WeatherItem;
