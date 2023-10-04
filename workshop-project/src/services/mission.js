import axios from 'axios';

class Mission {
  constructor() {
    let service = axios.create({
      baseURL: 'http://localhost:3000/mission',
      withCredentials: true
    });
    this.service = service;
  }

  async signinUser() {
      return await this.service.get('/getAllMission')
      .then((response) => {
        return response['data']
      })
      .catch((e) => {
        throw e
      })
  }

}

(async () => {
    const mission = new Mission();
    try {
      const data = await Mission.signinUser();
      console.log(data);
    } catch (error) {
      console.error('Une erreur s\'est produite :', error);
    }
  })();