//Create Car class with constructor for make and speed.
class Car{ 

    constructor(make, speed){
        this.make = make;
        this.speed = speed;
    } 
    
    accelerate(speed) {
        speed = speed + 10;
        console.log("The cars speed in km/h is: ", speed);
        return speed;
    }   
//Add brake method to decrease speed by 5 km/h.
    brake(speed) {
        speed = speed - 5;
        console.log("The cars new speed is: ",speed)
        return speed;
    }
}
//Add accelerate method to increase speed by 10 km/h
const car1 = new Car("Toyota", 100);
const updatedSpeed = car1.accelerate(car1.speed);
console.log(car1.speed);
console.log(car1.make)

const car2 =new Car()
