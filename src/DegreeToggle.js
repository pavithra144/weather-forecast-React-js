import React from "react";

const DegreeToggle = (degreeType,updateForecastDegree) => {
  
  return (
    <div>
      <input
        type="radio"
        name="degree-type"
        id="celsius"
        value="celsius"
        defaultChecked={degreeType === "celsius"}
        onChange={updateForecastDegree}
      />
      <label htmlFor="celsius">Celsius</label>

      <input
        type="radio"
        name="degree-type"
        id="fahrenheit"
        value="fahrenheit"
        defaultChecked={degreeType === "fahrenheit"}
        onChange={updateForecastDegree}
      />
      <label htmlFor="fahrenheit">Fahrenheit</label>
    </div>
  );
};
export default DegreeToggle;
