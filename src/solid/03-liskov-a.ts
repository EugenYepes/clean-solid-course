import { Car, Tesla, Audi, Toyota, Honda } from './03-liskov-b';


(() => {

    const printCarSeats = (cars: Car[]) => {
        cars.forEach(car => {
            console.log(car.constructor.name, car.getNumberOfSeats());
        });
    }

    const cars = [
        new Tesla(7),
        new Audi(2),
        new Toyota(5),
        new Honda(5),
    ];


    printCarSeats(cars);

})();