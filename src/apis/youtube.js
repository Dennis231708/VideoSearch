import axios from 'axios';

const KEY = 'AIzaSyDk0y2aZgXwkLAEB6sOfd-6wt3txepd9nA';

export default axios.create({
    baseURL: 'https://www.googleapis.com/youtube/v3',
    params: {
        part: 'snippet',
        type: 'video',
        maxResults: 5,
        key: KEY
    }
});