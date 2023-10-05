import axios from 'axios';

class AuthService {
  constructor() {
    let service = axios.create({
      baseURL: 'http://localhost:3000/auth',
      withCredentials: true
    });
    this.service = service;
  }

  async signinUser() {
      return await this.service.get('/signinUser')
      .then((response) => {
        return response['data']
      })
      .catch((e) => {
        throw e
      })
  }
}

