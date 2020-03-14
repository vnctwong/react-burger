import axios from 'axios';

const instance = axios.create({
  baseURL: 'https://react-burger-50968.firebaseio.com/'
});

export default instance;
