let circle = {
    raduis: "1",
    color: "Red",
    set setRadius(newRadius){
        this.radius = newRadius;
    },
    set setColor(newColor) {
        this.color = newColor;
    },
    get getRadius(){
        console.log(`Radius of Circle is ${this.radius}`);
    },
    get getColor(){
        console.log(`Color of Circle is ${this.color}`);
    },
    get toString(){
        console.log(`Circle[radius = ${this.radius}, color = ${this.color}]`);
    },
    get getArea(){
        let area = Math.PI * this.radius * this.radius;
        console.log(`Area of Circle is ${area}`);
    },
    get getCircumference(){
        let circumference = 2 * Math.PI * this.radius;
        console.log(`Circumference of Circle is ${circumference}`);
    }
}

// Setter Methods
circle.setRadius = 9;
circle.setColor = "Blue";

// Getter Methods
circle.getRadius;
circle.getColor;
circle.toString;
circle.getArea;
circle.getCircumference;

// Output
// Radius of Circle is 9
// Color of Circle is Blue
// Circle[radius = 9, color = Blue]
// Area of Circle is 254.46900494077323
// Circumference of Circle is 56.548667764616276