function makeTransaction(quantity, pricePerDroid) {
    totalPrice = Number(quantity) * Number(pricePerDroid);
    return `You ordered ${quantity} droids worth ${totalPrice} credits!`;
    
}

