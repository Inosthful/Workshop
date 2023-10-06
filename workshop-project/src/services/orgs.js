import axios from 'axios';

export class Orgs {
    constructor() {
        this.service = axios.create({
            baseURL: 'http://localhost:3000/organisation',
            withCredentials: true,
            headers: {
                'Content-Type': 'application/json',
                'Access-Control-Allow-Origin': '*',
            }
        });
    }

    async getAllOrganisations() {
        return await this.service.get('/getAllOrganisation')
        .then((response) => {
            return response['data']
        })
        .catch((e) => {
            throw e
        })
    }

    async getOrganisation(id) {
        return await this.service.get(`/getOrganisation/${id}`)
        .then((response) => {
            console.log(response)
            return response['data'][0]
        })
        .catch((e) => {
            throw e
        })
    }
}