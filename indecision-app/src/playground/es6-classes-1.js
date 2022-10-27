class Person {
    constructor(name = 'Anonymous', age = 0) {
        this.name = name,
        this.age = age
    }
    getGreeting() {
        return `Hi. I am ${this.name}!`
    }
    getDiscription() {
        return `${this.name} is ${this.age} year${this.age === 1 ? '' : 's'} old.`
    }
}

class Traveler extends Person {
    constructor(name, age, homeLocation){
        super(name, age)
        this.homeLocation = homeLocation
    }
    getGreeting() {
        let greet = super.getGreeting()
        
        if(this.homeLocation) {
            greet += ` I'm visiting from ${this.homeLocation}.`
        }
        return greet
    }
}

const me = new Person('Mahmoud Dawood', 24)
console.log(me.getDiscription())

const other = new Traveler('Hopkins', 42, 'Zembaboie')
console.log(other.getGreeting())