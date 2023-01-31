//  Q1
/* Create a shape class with name, sides properties with a constructor to assign the values to them.
Add a method getShape to get the shape info.

Create a child class circle/rectangle from the shape class, the child class should contain new properties, 
a new method to calculate the area. Set properties of the parent class from the child constructor.
*/

class Shape {
    constructor(Name, a, b) {
        this.Name = Name;
        this.a = a;
        this.b = b;
    }

    getShape() {
        console.log(`Shape is : ${this.Name}`)
        console.log(`First Side : ${this.a}`)
        console.log(`Second side : ${this.b}`)
    }
}
class Rectangle extends Shape {
    constructor(Name, a, b) {
        super(Name, a, b);
    }
    getArea() {
        return `Area of rectangle is : ` + this.a * this.b;
    }
}

class Circle extends Shape{
    constructor(Name,a){
        super(Name,a)
        
    }
    getPerimeter() {
        return `Perimeter of circle is : ` + 2*3.14*this.a;
    }
}

let rect = new Rectangle('Rectangle_1', 10, 20);
rect.getShape();
console.log(rect.getArea());

let circ=new Circle('circle_1',3);
circ.getShape();
console.log(circ.getPerimeter());



