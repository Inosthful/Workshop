import axios from 'axios';

export class Mission {
  constructor() {
    let service = axios.create({
      baseURL: 'http://localhost:3000/mission',
      withCredentials: true,
      headers: {
        'Content-Type': 'application/json',
        'Access-Control-Allow-Origin': '*'
      }
    });
    this.service = service;
  }

    async getAllMissions() {
        return await this.service.get('/getAllMission')
        .then((response) => {
          return response['data']
        })
        .catch((e) => {
          throw e
        })
  }

}

