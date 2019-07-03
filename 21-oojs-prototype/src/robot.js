// object literals
const robot1 = { name: 'sparko', weight: 1000, specialty: 'making sparks' }
const robot2 = { name: 'bender', weight: 26, specialty: 'bending'}

// factory function
function robotFactory(name, weight, specialty) {
  // const robot = { name, weight, specialty } //ES6 shorthand syntax
  const robot = {
    name: name,
    weight: weight,
    specialty: specialty,
  }
  return robot
}


function recharge_batteries() {
  return `${this.name} is recharging :) :) :)`
}
const robot3 = robotFactory('wall-e', 7, 'swimmer')
const robot4 = robotFactory('r2d2', 27, 'sassinesssss')


function rechargeMe() {
  return `${this.name} is MEGA CHARGING`
}
robot3.regularCharge = recharge_batteries

robot3.aniket = rechargeMe
robot4.aniket = rechargeMe


const allMyRobotFunctionality = {
  charge: function() {
    return "charging"
  },
  destroy: function() {
    return "all your base are belong to us"
  },
  bend: function() {
    return "get bent"
  }
}
robot3.morefunctions = allMyRobotFunctionality

// Object.create

const robotTemplate = {
  name: null,
  weight: null,
  specialty: null,
  rechargeBatteries: function() {
    console.log(`${this.name} is recharging its batteries`)
  }
}
const robot5 = Object.create(robotTemplate)

// constructor function
function RobotFactory(name, weight, specialty) {
  // `this` in the context of a constructor function will be the newly created object {}
  this.name = name
  this.weight = weight
  this.specialty = specialty
}



const robot6 = new RobotFactory('betamax', 99999, 'help <3')

// robot6.__proto__ === RobotFactory.prototype  // true
// class syntax

//
// class Robot {
//   constructor(name, weight, specialty) {
//     this.name = name
//     this.weight = weight
//     this.specialty = specialty
//   }
//
// }
//
// const robot7 = new Robot('calculon', 2000,'acting POWER')


const Robot = (() => {
   let totalRobos = 1

  return class Robot {
    constructor(name, weight, specialty) {
      this.name = name
      this.weight = weight
      this.specialty = specialty
      this.id = totalRobos++
    }

    rechargeBatteries() {
      console.log(`${this.name} is recharging its batteries`)
    }


    static nowClassMethod() {
      return 'look a class method'
    }
  }
})()

const robot8 = new Robot('aaaaa','take','me')
Robot.nowClassMethod()
