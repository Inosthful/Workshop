import axios from 'axios';

class AuthService {
  constructor() {
    let service = axios.create({
      baseURL: 'http://localhost:3000',
      withCredentials: true,
      headers: {
        'Content-Type': 'application/json',
        'Access-Control-Allow-Origin': '*'
      }
    });
    this.service = service;
  }

  async signinUser(data) {
    try {
      const response = await this.service.post('/auth/signinUser', data);
      return response['data'];
    } catch (error) {
      throw error;
    }
  }
}

const json = {
  "u_mail" : "guillaume@daumur.fr",
  "u_password" : "gpass"
};

(async () => {
  const authService = new AuthService();
  try {
    const data = await authService.signinUser(json);
    console.log(data);
  } catch (error) {
    console.error('Une erreur s\'est produite :', error);
  }
})();
