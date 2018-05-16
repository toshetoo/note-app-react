import axios from 'axios';

export default class BaseAPI {
    static get(url, getParams) {
        let token = localStorage.getItem('token');

        let config = {
            headers: {
                'Authorization': 'Bearer ' + token
            }
        };

        if (getParams) {
            config['params'] = getParams;
        }

        return axios.get(url, config);
    }

    static post(url, data) {
        let token = localStorage.getItem('token');

        let config = {
            headers: {
                'Authorization': 'Bearer ' + token
            }
        };

        return axios.post(url, data, config);
    }

    static put(url, data) {
        let token = localStorage.getItem('token');

        let config = {
            headers: {
                'Authorization': 'Bearer ' + token
            }
        };

        return axios.put(url, data, config);
    }

    static delete(url, getParams) {
        let token = localStorage.getItem('token');

        let config = {
            headers: {
                'Authorization': 'Bearer ' + token
            }
        };

        return axios.delete(url, config);
    }
}