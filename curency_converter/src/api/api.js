import axios from 'axios';

const APIkey = '3762d4e26eaa92eeaa9c905ab2b2bc1a';

const instanse = axios.create({
    baseURL: 'http://data.fixer.io/api/',
});

const getDataByURL = async (url, params = {}) => {
    const response = await instanse.get(url, {
        params: {
            ...params,
            access_key: APIkey,
        },
    });

    return response.data;
};

export const convert = async (from, to, amount) => {
    const response = await getDataByURL('/convert', {from: from, to: to, amount: amount});
    return response.result;
}

export const getLatestRates = async (base) => {
    const response = await getDataByURL('/latest', {base: base});
    return response.rates;
}