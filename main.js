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
class Doctor extends Traveler{
    constructor(name){
        this.name = name
    }
    heal(traveler){
      this.isHealthy === true
}

class Hunters extends Traveler{
    // - Increase the hunter's food by 5. (A normal traveler gains only 2.)
    hunt() {
        this.eat()
    }

    // Consumes 2 units of food. If the hunter doesn't have 2 food when they are instructed to eat, 
    // they eat as much as they can (0 or 1 unit), but the hunter is no longer healthy.
    Eat() {
        super(eat){
            if (this.food > 2) {
                this.food -= 1
            } else {
                this.isHealthy = false
            }
        }
    }

// Transfers numOfFoodUnits from the hunter to the traveler. 
// If the hunter doesn't have enough food, then no food should be transferred.
    giveFood(traveler, numOfFoodUnits)
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
        const quarantine = this.passengers.some(function(passenger){
           return  passenger.isHealthy === false

        })
return quarantine

    }

    totalFood() { 
        const food = this.passengers.reduce(function(sum,passenger){
            return sum + passenger.food 
          }, 0);
          return food
    }


}