import Axios from 'axios';

const baseApi = Axios.create({
    baseURL: 'https://api.football-data.org/v2/competitions',
})

export const Api = {
    getMatches: () => baseApi({
        method: 'GET',
        url: '/CL/matches',
        headers: {'X-Auth-Token' :'20f6dd04fe9f472f84f85abe0c95baeb'}
    }),
    getTeams: () => baseApi({
        method: 'GET',
        url: '/2001/standings',
        headers: {'X-Auth-Token' :'20f6dd04fe9f472f84f85abe0c95baeb'}
    }),
    getscorers: () => baseApi({
        method: 'GET',
        url: '/CL/scorers',
        headers: {'X-Auth-Token' :'20f6dd04fe9f472f84f85abe0c95baeb'}
    }),
    getPlayers: () => baseApi({
        method: 'GET',
        url: '/users'
    })
}