import { useEffect, useState } from "react";
import axios from "axios";
import WeatherCard from "../components/WeatherCard";

function Dashboard() {

    const [weather, setWeather] = useState(null);
    const [loading, setLoading] = useState(true);

    useEffect(() => {

        const fetchWeather = async () => {

            try {

                const response = await axios.get(
                    "https://api.open-meteo.com/v1/forecast?latitude=11.0168&longitude=76.9558&current_weather=true"
                );

                setWeather(response.data.current_weather);
                setLoading(false);

            } catch (error) {

                console.error("Error fetching weather:", error);
                setLoading(false);

            }

        };

        fetchWeather();

    }, []);

    if (loading) {
        return <h2 style={{ textAlign: "center" }}>Loading Climate Data...</h2>;
    }

    return (

        <div className="page">

            <h1>Climate Dashboard</h1>

            <div className="card-container">

                <WeatherCard
                    title="Temperature"
                    value={weather.temperature + " °C"}
                />

                <WeatherCard
                    title="Wind Speed"
                    value={weather.windspeed + " km/h"}
                />

                <WeatherCard
                    title="Wind Direction"
                    value={weather.winddirection + "°"}
                />

                <WeatherCard
                    title="Weather Code"
                    value={weather.weathercode}
                />

            </div>

        </div>

    );

}

export default Dashboard;