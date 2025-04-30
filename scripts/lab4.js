/**
 * 
 * @param {*} num1 - First number to add.
 * @param {*} num2 - Second number to add.
 * @param {*} add - Boolean value to tell the function what to do.
 * @returns The sum of the two numbers if add is true, otherwise false.
 */
function sumValues(num1, num2, add) {
    if (add === true) {
        return num1 + num2;
    } else {
        return false;
    }
}

/**
 * 
 * @param {*} prices - An array of the original prices.
 * @param {*} discount - A number between 0 and 1 to represent the discount.
 * @returns An array of each price's new price after the discount is applied, or false if prices array is empty.
 */
function discountPrices(prices, discount) {
    if (!Array.isArray(prices) || prices.length === 0) {
        return false;
    }

    const discounted = [];

    for (let i = 0; i < prices.length; i++) {
        const price = prices[i];

        // Skip invalid prices
        if (typeof price !== 'number' || typeof discount !== 'number' || discount < 0 || discount > 1) {
            return false;
        }

        const discountedPrice = price * (1 - discount);
        discounted.push(discountedPrice);
    }

    return discounted;
}

module.exports = { sumValues, discountPrices };
