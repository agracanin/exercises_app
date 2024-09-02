import { RAPIDAPI_KEY } from './config';

export const exerciseOptions = {
    method: 'GET',
    url: 'https://exercisedb.p.rapidapi.com/status',
    headers: {
        'x-rapidapi-key': RAPIDAPI_KEY,
        'x-rapidapi-host': 'exercisedb.p.rapidapi.com'
    }
};

export const fetchData = async (url, options) => {
    const response = await fetch(url, options);
    const data = await response.json();

    return data;
}