import React, { useEffect, useState } from 'react';
import "../components/weather.css"

const Weather = () => {
    const [city, setCity] = useState("Null");
    const [search, setSearch] = useState("");

    useEffect(() => {
        const fetchApi = async () => {
            const url = `https://api.openweathermap.org/data/2.5/weather?q=${search}&units=metric&appid=0fd6d97e3e26cd0e63fa3003cbec9795`
            const response = await fetch(url);
            const resJson = await response.json();
            console.log(resJson)
            setCity(resJson.main);
        }
        fetchApi();
    }, [search])

    return (
        <div className='main-container'>
            <div className='container d-flex justify-content-center align-items-center main p-0'>
                <div className='text-center d-flex justify-content-center align-items-center flex-column search'>
                    <h1>Weather Forecast</h1>
                    <p>Find out temperature, conditions and more...</p>
                    <input type="search"
                        placeholder="Search your city..."
                        value={search}
                        onChange={(e) => { setSearch(e.target.value) }}
                    />
                </div>
                <div className="data w-50">
                    {!city ? (
                        <p>No data found</p>
                    ) : (
                        <div className='text-center m-3 data'>
                            <h2>{search}</h2>
                            <h3>{city.temp} °C</h3>
                            <p>Feels like : {city.feels_like} °C</p>
                            <div className="conditions my-5">
                                <div className="values">
                                    <p>Min-temp</p>
                                    <h4>{city.temp_min} °C</h4>
                                </div>
                                <div className="values">
                                    <p>Max-temp</p>
                                    <h4>{city.temp_max} °C</h4>
                                </div>
                                <div className="values">
                                    <p>Pressure</p>
                                    <h4>{city.pressure} hPa</h4>
                                </div>
                                <div className="values">
                                    <p>Humidity</p>
                                    <h4>{city.humidity}%</h4>
                                </div>
                            </div>

                        </div>
                    )}
                </div>
            </div>
        </div>
    )
}

export default Weather
