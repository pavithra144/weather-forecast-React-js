import React, { Component } from 'react';
import DayCard from './DayCard';
import DegreeToggle from './DegreeToggle'


 class WeekContainer extends Component {
     constructor(props) {
         super(props)
         this.state = {
                fullData: [],
                dailyData: [],
                degreeType: "fahrenheit"
         }
        }
     componentDidMount(){
        const weatherUrl = fetch("http://api.openweathermap.org/data/2.5/forecast?q=London,uk&units=imperial&APPID=e7aaf1a7e9a51b72659cd7c1d70f6613")
        .then(res =>res.json())
        .then(data => {
            const dailyData = data.list.filter(reading => reading.dt_txt.includes("21:00:00"));
            
            this.setState({
                fullData: data.list,
                dailyData: dailyData,
            }, () => console.log(this.state))
        }); 
         
     }
     //mapping the value"reading" and passing as a prop to dayCard comp to get them as cards
    formatDayCardArr = () => {
    return this.state.dailyData.map((reading,index)=> <DayCard reading={reading} key= {index} />)
    }
    //update forecast degree - passing updateForecastDegree fn. and degreeType state as a prop to DegreeToggle component
    updateForecastDegree = (e) => {
        this.setState({
            degreeType: e.target.value
        }, () => console.log('hi'))
        debugger;
    }
    render() {
        return (
            <div>
                <h2 className="header">5-Day Weather Forecast</h2>
                <h5>London,UK</h5>
               <div>
               <DegreeToggle updatedegree={this.updateForecastDegree}/>
                {this.formatDayCardArr()}
                </div>
            </div>
        )
    }
}

export default WeekContainer
