import axios from 'axios';

const instance = axios.create({
  baseURL: 'https://burger-builder-50968.firebaseio.com/'
});

export default instance;
