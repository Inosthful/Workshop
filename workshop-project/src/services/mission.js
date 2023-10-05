import axios from 'axios';

export class Mission {
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

    async getAllMissions() {
        return await this.service.get('/mission/getAllMission')
        .then((response) => {
          return response['data']
        })
        .catch((e) => {
          throw e
        })
  }

}
// (async () => {
//     const mission = new Mission();
//     try {
//       const data = await mission.getAllMissions();
//       console.log(data);
//     } catch (error) {
//       console.error('Une erreur s\'est produite :', error);
//     }
// })();
