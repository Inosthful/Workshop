import axios from 'axios';

export class Mission {
  constructor() {
    this.service = axios.create({
      baseURL: 'http://localhost:3000/mission',
      withCredentials: true,
      headers: {
        'Content-Type': 'application/json',
        'Access-Control-Allow-Origin': '*',
      }
    });
  }

  async getAllMissions() {
    try {
      const { data } = await this.service.get('/getAllMission');
      return data;
    } catch (error) {
      throw error;
    }
  }
}