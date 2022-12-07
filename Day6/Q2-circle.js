class Circle{

    // Setter Methods
    setRadius(newRadius){
        this.radius = newRadius;
    }
    setColor(newColor) {
        this.color = newColor;
    }

    // Getter Methods
    getRadius(){
        console.log(`Radius of Circle is ${this.radius}`);
    }
    
    getColor(){
        console.log(`Color of Circle is ${this.color}`);
    }
    
    toString(){
        console.log(`Circle[radius = ${this.radius}, color = ${this.color}]`);
    }
    
    getArea(){
        let area = Math.PI * this.radius * this.radius;
        console.log(`Area of Circle is ${area}`);
    }
    
    getCircumference(){
        let circumference = 2 * Math.PI * this.radius;
        console.log(`Circumference of Circle is ${circumference}`);
    }
}

let circle = new Circle();
circle.setRadius(1);
circle.setColor("Red");

circle.getRadius();
circle.getColor(); 
circle.toString();
circle.getArea();
circle.getCircumference();

// Output
// Radius of Circle is 1
// Color of Circle is Red
// Circle[radius = 1, color = Red]
// Area of Circle is 3.141592653589793
// Circumference of Circle is 6.283185307179586