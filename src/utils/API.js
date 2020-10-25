import axios from "axios";

const URL = 'http://api.openweathermap.org/data/2.5/weather';
const API_Key = '97f651444e883c7029b564bfc84af4dd';


export const fetchWeather = async (query) => {
    const {data} = await axios.get(URL, {
        params: {
            q: query,
            units: 'imperial',
            APPID: API_Key,

        }
    });
    return data;
}