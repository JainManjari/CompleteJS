class Vehicle
{
    constructor(numWheels,price)
    {
        this.numWheels=numWheels;
        this.price=price;
    }

    getPrice()
    {
        return this.price
    }

    printDesc()
    {
        console.log("Vehicle "+this.numWheels+" "+this.price);
    }
}

var v1=new Vehicle(4,50000);
var v2=new Vehicle(2,10000);





class Car extends Vehicle
{
    constructor(numWheels,price,numDoors)
    {
        super(numWheels,price);
        this.numDoors=numDoors;
    }

    printDesc()
    {
        super.printDesc();
        console.log("Car "+this.numDoors);
    }
}

var c=new Car(4,200000,5);
console.log(c);
console.log(c.getPrice());
console.log(c.printDesc());