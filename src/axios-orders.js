import axios from 'axios';

axios.create({
  baseURL: 'https://burger-builder-50968.firebaseio.com/'
});

export default instance;
