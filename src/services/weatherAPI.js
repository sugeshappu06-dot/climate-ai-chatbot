import axios from "axios";

export const getWeather = async (city) => {

    try {

        // Step 1: get coordinates from city
        const geo = await axios.get(
            `https://geocoding-api.open-meteo.com/v1/search?name=${city}&count=1`
        );

        if (!geo.data.results) {
            return null;
        }

        const lat = geo.data.results[0].latitude;
        const lon = geo.data.results[0].longitude;

        // Step 2: get weather using coordinates
        const weather = await axios.get(
            `https://api.open-meteo.com/v1/forecast?latitude=${lat}&longitude=${lon}&current_weather=true`
        );

        return weather.data.current_weather;

    } catch (error) {
        console.log(error);
        return null;
    }

};