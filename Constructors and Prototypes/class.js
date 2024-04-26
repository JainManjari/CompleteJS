class Person
{
    constructor(name)
    {
        this.name=name;
    }

    getName()
    {
        return this.name;
    }
}

var p1=new Person("mj");
var p2=new Person("rj");

console.log(p1);
console.log(p2);

console.log(Person);
console.log(Person.prototype);

console.log(p1.getName());

console.log(Object.getPrototypeOf(p1));









// class expression 1

var Person1=class
{
    constructor(name)
    {
        this.name=name;
    }

    getName()
    {
        return this.name;
    }
}





// class expression 2

var Person2=class Person
{
    constructor(name)
    {
        this.name=name;
    }

    getName()
    {
        return this.name;
    }
}
