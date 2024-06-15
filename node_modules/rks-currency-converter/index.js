import Freecurrencyapi from '@everapi/freecurrencyapi-js';
 
const freecurrencyapi = new Freecurrencyapi('fca_live_psKLTiiZMgusVfW1Be1YHG0oT4ePfGLg9K48x2fs');



export async function convertCurrency(fromCurrency, toCurrency, units) {
    try {
        const res = await freecurrencyapi.latest({
            base_currency: fromCurrency,
            currencies: toCurrency
        });

        const multiplier = res.data[toCurrency];
        const convertedAmount = (multiplier * units).toFixed(2);
        
        console.log(convertedAmount);
        return convertedAmount;
    } catch (error) {
        console.error('Error fetching conversion rate:', error);
        throw error;
    }
}
