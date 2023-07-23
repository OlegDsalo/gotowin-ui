import axios from "axios";

export class AccountService {
    BASE_URL = '/api'

    async register(user) {
        console.log(user);
        return await axios.post(`${this.BASE_URL}/register`, user).catch((e) => {
            console.log(e)
        })
    }

    async login(user) {
        return await axios.post(`${this.BASE_URL}/authenticate`, user).catch((e) => {
            console.log(e)
        })
    }


    async getUser(token) {

        let config = {
            headers: {
                "Authorization": `Bearer ${localStorage.getItem('token')}`,
            }
        }
        return axios.get(`${this.BASE_URL}/account`,config).catch(e => console.log(e));

    }

    async activate(key) {
        return await axios.get(`${this.BASE_URL}/activate?key=${key}`)
    }

    async resetPasswordMessage(data) {
        return await axios.post(`${this.BASE_URL}/account/reset-password/init?mail=${data.email}`)
            .catch(e => console.log(e))
    }

    async resetPassword(obj) {
        return await axios.post(`${this.BASE_URL}/account/reset-password/finish`, obj)
    }

    async addWalletAddress(address){
        return await axios.post(`${this.BASE_URL}/account/change-wallet-address`,{address})

    }
}


const accountServiceInstance = new AccountService()
export default accountServiceInstance;


const $api = axios.create({
    withCredentials: true,
    baseURL: 'http://localhost:8080/api'
});

$api.interceptors.request.use((config) => {
    config.headers.Authorization = `Bearer ${localStorage.getItem('token')}`;
    return config;
});
