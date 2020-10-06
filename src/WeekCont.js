import React from 'react';
// import apiConfig from './apiKeys';
//import DayCard from './DayCard';
//import moment from 'react-moment';
//import './index.css';


class WeekCont extends React.Component {
    state = {
        fullData: [],
        dailyData: [],
        degreeType: "fahrenheit"
    }

    updateForecastDegree = event => {
        
        this.setState({
            degreeType: event.target.value
        }, () => console.log(this.state))
    }
    componentDidMount = () => {
        const weatherURL ="http://api.openweathermap.org/data/2.5/forecast?q=London,uk&units=imperial&APPID=e7aaf1a7e9a51b72659cd7c1d70f6613"
            
        fetch(weatherURL)
            .then(res => res.json())
            .then(data => {
                const dailyData = data.list.filter(reading => {
                    return reading.dt_txt.includes("18:00:00")
                });

                this.setState({
                    fullData: data.list,
                    dailyData: dailyData
                })
            });
    }

    render() {
        return (
            <div className="container">
                <h1 className="header">5-Day Forecast.</h1>
                <h5 >London,UK</h5>
                <div></div>
                <React.Fragment>
                    <div>
                        <input
                            className="form-check-input"
                            type="radio"
                            name="degree-type"
                            id="celsius"
                            value="celsius"
                            // checked={this.state.degreeType}
                            onChange={this.updateForecastDegree.bind(this)}
                        />
                        <label  htmlFor="celsius">Celsius</label>
                    </div>
                    <div>
                        <input
                            type="radio"
                            name="degree-type"
                            id="farenheit"
                            value="fahrenheit"
                            // checked={this.state.degreeType}
                            onChange={this.updateForecastDegree.bind(this)}
                        />
                        <label htmlFor="farenheit">Farenheit</label>
                    </div>
                </React.Fragment>
                {this.state.dailyData.map((reading, index) => {

                    let _Day = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
                    
                    let newDate = new Date();
                    const weekday = reading.dt * 1000
                    newDate.setTime(weekday);
                    
                    let DayVal = _Day[newDate.getDay()];

                    let dateval = newDate.getFullYear() + "/" + newDate.getMonth() + "/" + newDate.getDate();
                    //cel and fahr values declaration
                    const fahrenheit = Math.round(reading.main.temp)
                    const celsius = Math.round((fahrenheit - 32) * 5 / 9)
                    return (
                        <div className="grid-container">
                            <div >
                                <h3>{DayVal}</h3>
                                <p>{dateval}</p>
                                {/* <i className={imgURL}></i> */}
                                <h2>{this.state.degreeType === "celsius" ? celsius + "°C" : fahrenheit + "°F"}</h2>
                                {/* <h2>{Math.round(reading.main.temp)} °F</h2> */}
                                <div>
                                    <p>{reading.weather[0].description}</p>
                                </div>
                            </div>
                        </div>
                    );
                })}
            </div>
        );
    }
}

export default WeekCont;
