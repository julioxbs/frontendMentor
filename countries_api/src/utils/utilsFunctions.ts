export function getNativeName(names: { [key: string]: any }): string {
    let totalNames: {
        official: string;
        common: string;
    }[] = [];
    Object.entries(names).forEach(([key, value]) => {
        totalNames.push(names[key]);
    })
    return totalNames[0].common
};

export function getCurrencies(currencies: { [key: string]: any }): string {
    let totalCurrencies: {
        name: string;
        symbol: string
    }[] = [];
    Object.entries(currencies).forEach(([key, value]) => {
        totalCurrencies.push(currencies[key])
    })
    return totalCurrencies[0].name
};

export function getLanguages(languages: { [key: string]: any }): string {
    let totalLanguages: string[] = [];
    Object.entries(languages).forEach(([key, value]) => {
        totalLanguages.push(languages[key])
    })
    return totalLanguages.join(', ')
}