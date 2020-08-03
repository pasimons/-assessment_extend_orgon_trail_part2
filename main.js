class Traveler {
    constructor(name) {
        this.name = name
        this.food = 1
        this.isHealthy = true
    }
    hunt() {
        this.food += 2
    }
    eat() {
        if (this.food > 0) {
            this.food -= 1
        } else {
            this.isHealthy = false
        }
    }

}
class Doctor extends Traveler {
    constructor(args) {
        super(args)


    }
    heal(traveler) {
        traveler.isHealthy = true
    }
}

class Hunter extends Traveler {
    constructor(args) {
        super(args)
        this.food = 2
    }
    // - Increase the hunter's food by 5. (A normal traveler gains only 2.)
    hunt() {
        this.food += 5
    }

    // Consumes 2 units of food. If the hunter doesn't have 2 food when they are instructed to eat, 
    // they eat as much as they can (0 or 1 unit), but the hunter is no longer healthy.
    eat() {


        if (this.food > 2) {
            this.food -= 2
        } else {
            this.isHealthy = false
            this.food = 0
        }

    }

    // Transfers numOfFoodUnits from the hunter to the traveler. 
    // If the hunter doesn't have enough food, then no food should be transferred.
    giveFood(traveler, numOfFoodUnits) {
        if (this.food >= numOfFoodUnits) {
            this.food -= numOfFoodUnits
            traveler.food += numOfFoodUnits
        }

    }
}


class Wagon {
    constructor(capacity) {
        this.capacity = capacity
        this.passengers = []
    }



    getAvailableSeatCount() {
        return this.capacity - this.passengers.length

    }


    join(traveler) {

        if (this.getAvailableSeatCount() > 0) {
            this.passengers.push(traveler)
        }

    }

    shouldQuarantine() {
        const quarantine = this.passengers.some(function (passenger) {
            return passenger.isHealthy === false

        })
        return quarantine

    }

    totalFood() {
        const food = this.passengers.reduce(function (sum, passenger) {
            return sum + passenger.food
        }, 0);
        return food
    }


}