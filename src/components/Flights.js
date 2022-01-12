import {useEffect, useState} from "react";

export default function Flights() {
    let [fligtsList, setFlightsList] = useState ([]);
    useEffect(() =>{
        fetch('https://api.spacexdata.com/v3/launches')
            .then(value => value.json())
            .then (flights => {
                setFlightsList(flights.filter(flight => flight.launch_year !== '2020'));
            });
    })
    return (
        <div>
            {
                fligtsList.map(value=> <div key={value.flight_number}>
                    {value.mission_name}-{value.launch_year}
                    <img src ={value.links.mission_patch} alt="mission_patch"/>
                </div>)
            }
        </div>
    );
}

