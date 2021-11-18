import axios from 'axios';

const APIkey = '31ab1770-486e-11ec-b69f-8d1e3c986fb7';

const instanse = axios.create({
    baseURL: 'https://freecurrencyapi.net/api/v2',
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

export const getLatestRates = async (base) => {
    const response = await getDataByURL('/latest', {base_currency: base});
    return response.data;
};
