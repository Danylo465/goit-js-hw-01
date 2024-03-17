function getShippingMessage(country, price, deliveryFee){
    const totalPriceF = deliveryFee + price;
    return `Shipping to ${country} will cost ${totalPriceF} credits`;
}
const country = "Ukraine";
const price = 16000;
const deliveryFee = 60;      
const totalPriceMessage = getShippingMessage(country, price, deliveryFee);
console.log(totalPriceMessage);

// ---------------------------------------------------------------------------

console.log(getShippingMessage("Australia", 120, 50)); // "Shipping to Australia will cost 170 credits"
console.log(getShippingMessage("Germany", 80, 20)); // "Shipping to Germany will cost 100 credits"
console.log(getShippingMessage("Sweden", 100, 20)); // "Shipping to Sweden will cost 120 credits"
