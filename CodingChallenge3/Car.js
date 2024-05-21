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
const car1 = new Car("BMW", 120);
car1.speed = car1.accelerate(car1.speed);
car1.speed = car1.brake(car1.speed);

//testing accelerate and brake on car2
const car2 =new Car("Mercedes", 95);
car2.speed = car2.brake(car2.speed);
car2.speed = car2.accelerate(car2.speed);
