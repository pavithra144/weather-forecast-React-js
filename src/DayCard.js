import React from 'react'
var moment = require('moment');

 const DayCard = ({reading, degreeType}) => {
     let newdate = new Date();
      const weekday= reading.dt * 1000
      newdate.setTime(weekday)
      debugger;
  const fahrenheit = Math.round(reading.main.temp);
  const celsius = Math.round((fahrenheit - 32) * 5/9);
  
     
    // const imgURL = `owf owf-${reading.weather[0].id} owf-5x`

    return (
        <div className="grid-container">
            <h3>{moment(newdate).format('dddd')}</h3>
            <p>{moment(newdate).format('MMMM Do, h:mm a')}</p>
            {/* <i>{imgURL}</i> */}
            <h2>{degreeType === "celsius" ? celsius + "°C" : fahrenheit + "°F"}</h2>
            {/* <h2>{Math.round(reading.main.temp)}°F</h2> */}
            <div>
            <p>{reading.weather[0].description}</p>
            </div>
        </div>
    )
 }
export default DayCard