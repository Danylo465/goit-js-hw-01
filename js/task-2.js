function getShippingMessage(country, price, deliveryFee){
    return `Shipping to ${country} will cost ${totalPriceF} credits`;
}
const consumerCountry = "Ukraine";
const price = 16000;
const deliveryPay = 60;
const totalPriceF = deliveryPay + price;
const totalPriceMessage = getShippingMessage(consumerCountry, price, deliveryPay);
console.log(totalPriceMessage);

// ---------------------------------------------------------------------------

console.log(getShippingMessage("Australia", 120, 50)); // "Shipping to Australia will cost 170 credits"
console.log(getShippingMessage("Germany", 80, 20)); // "Shipping to Germany will cost 100 credits"
console.log(getShippingMessage("Sweden", 100, 20)); // "Shipping to Sweden will cost 120 credits"
