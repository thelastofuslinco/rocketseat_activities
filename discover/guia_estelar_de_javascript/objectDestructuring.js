const employee = {
  id: 007,
  name: 'James',
  dept: 'Spy',
  data: {
    address: {
      street: '30 Wellington Square',
      city: 'Chelsea'
    }
  }
}

// //  Alias
// const { dept: department } = employee
// console.log(department) //Spy
/////////////////////////////////////////////////////
// //  New variable
// const { name, age = 25 } = employee
// console.log(age)
/////////////////////////////////////////////////////
// //  Nested object
// const {
//   data: {
//     address: { street }
//   }
// } = employee
// console.log(street)
/////////////////////////////////////////////////////
// //  Dynamic name
// function getPropertyValue (key) {
//   const { [key]: returnValue } = employee
//   return returnValue
// }

// const id = getPropertyValue('id')
// const name = getPropertyValue('name')

// console.log(id, name)
/////////////////////////////////////////////////////
// //  Objects in the function
// function logEmployee ({ name, dept }) {
//   console.log(`${name} is ${dept}`)
// }

// logEmployee(employee)

// function getUser () {
//   return {
//     name: 'Alex',
//     age: 45
//   }
// }

// const { age } = getUser()
// console.log(age) // 45
/////////////////////////////////////////////////////
//  Loops
// const employees = [
//   {
//     name: 'Alex',
//     address: '15th Park Avenue',
//     age: 43
//   },
//   {
//     name: 'John',
//     address: 'USA',
//     age: 33
//   },
//   {
//     name: 'Ravi',
//     address: 'Bangalore',
//     age: 16
//   }
// ]

// for (let { name, age } of employees) {
//   console.log(`${name} is ${age} years old!!!`)
// }
