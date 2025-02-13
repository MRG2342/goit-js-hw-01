function getShippingMessage(country,price,deliveryFee) {
    totalPrice = Number(price) + Number(deliveryFee);
    return `Shipping to ${country} will cost ${totalPrice} credits`
}

