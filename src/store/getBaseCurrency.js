const defaultCurency = 'RUB';

const langMapToCurency = {
    'ru-Ru': 'RUB',
    'ru': 'RUB',
    'en-US': 'USD',
    'en': 'USD',

};

export const getBaseCurency = () => {
    return langMapToCurency[navigator.language] ?? defaultCurency;
}