import axios from 'axios';

const BASE_URL = 'https://localhost:3333';

export default class MainAPI {
  static getPosts(num: number) {
    return axios.get(`${BASE_URL}/posts?page=${num}`);
  }
}
