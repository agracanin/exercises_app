import { RAPIDAPI_KEY } from './config';

export const exerciseOptions = {
    method: 'GET',
    url: RAPIDAPI_KEY,
    headers: {
        'x-rapidapi-key': 'fb98596c18msh8f95df476017e89p1c68dcjsn2d50e685d38f',
        'x-rapidapi-host': 'exercisedb.p.rapidapi.com'
    }
};

export const fetchData = async (url, options) => {
    const response = await fetch(url, options);
    const data = await response.json();

    return data;
}