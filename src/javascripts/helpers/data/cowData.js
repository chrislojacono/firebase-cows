import axios from 'axios';
import apiKeys from '../apiKeys.json';

const baseUrl = apiKeys.firebaseKeys.databaseURL;

const getCows = () => axios.get(`${baseUrl}/cows%20.json`);

export default { getCows };
