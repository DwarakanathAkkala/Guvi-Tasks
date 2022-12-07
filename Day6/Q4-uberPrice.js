class UberPrice {
    pricePerKm = 10;
    basePrice = 18;
    constructor(distance, promotion = 0 ) {
        this.distance = distance;
        this.promotion = promotion;
    }

    calculate() {
        let fare = this.basePrice + (this.distance * this.pricePerKm) - this.promotion;
        console.log(`Estimated Fare is ${fare}`);
    }
}

let trip1 = new UberPrice(6);
let trip2 = new UberPrice(10, 17);

trip1.calculate();

// Output
// Estimated Fare is 78

trip2.calculate();

// Output
// Estimated Fare is 101