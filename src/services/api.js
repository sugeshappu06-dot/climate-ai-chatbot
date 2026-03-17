import axios from "axios";

const API_URL = "https://api.open-meteo.com/v1/forecast";

export const getWeather = async () => {
    const response = await axios.get(
        `${API_URL}?latitude=11.0168&longitude=76.9558&current_weather=true`
    );
    return response.data;
};