// ASSESSMENT 2: Coding Conceptual Questions

// Examine the following examples.

// First, predict the outcome based on your understanding of the code.
// Then, uncomment the console.log() and verify the output. Briefly explain why your initial answer was correct or incorrect.

// --------------------1) What will this log?

var cohort = "Alpha 2022"
// console.log(cohort.split(""))

// a) Your answer: ['A', 'l', 'p', 'h', 'a', ' ', '2', '0', '2', '2']
// b) Verify and explain: Yes, I was correct this is because the .split() method is a method that works on strings and splits apart the array at the argument that is supplied. In this case it would be by every character.


// --------------------2) What will this log?

const greeter = (name) => {
  `Hello, ${name}!`
}
// console.log(greeter("LEARN Student"))

// a) Your answer: 'Hello, LEARN Student'
// b) Verify and explain: Ah, there is no return statement... That means nothing is being returned from the function and that is why what it really logs is 'undefined'.


// --------------------3) What will this log?

var multBy2 = [4, 5, 6, 7, 8].map(value => value * 2)
// console.log(multBy2)

// a) Your answer: [8, 10, 12, 14, 16]
// b) Verify and explain: Yep, when you use the map method on an array it returns a new array of the same length of elements that you return to it. In this case we are multiplying each element in the array by 2 and we are storing the output of that map in a variable named multBy2. Then we console.log() that variable which holds the outputted array from the map.


// --------------------4) What will this log?

var onlyOdds = [11, 12, 13, 14, 15].filter(value => value % 2 !== 0)
// console.log(onlyOdds)

// a) Your answer: [11, 13, 15]
// b) Verify and explain: Yes, I was correct again. The filter method returns a new array by checking a conditional and and putting that element into the new array if that condition is true. The condition that is being checked here is if the number is odd so, all the odd values from the original array are going Here the new array is being stored in a variable named onlyOdds. So, when we log that we will get the output from the new array.


// --------------------5) What will this log?

var myCodingSkills = {
  languages: ["JavaScript", "Ruby"],
  frameworks: ["React", "Ruby on Rails"],
  databases: "PostgreSQL",
  versionControl: "GitHub"
}
// console.log(myCodingSkills.languages[0])

// a) Your answer: "JavaScript"
// b) Verify and explain: Right again! This is because we are getting the languages property of the myCodingSkills object which is an array. Then, we are getting the element at the 0 index of that array. So, that would be "JavaScript".


// --------------------STRETCH: What will this log?

class Learn {
  constructor(name){
    this.student = name,
    this.cohort = "Alpha",
    this.year = 2022
  }
}
var learnStudent = new Learn("George")
// console.log(learnStudent)

// a) Your answer: {student: "George", cohort: "Alpha", year: 2022}
// b) Verify and explain: Yes I was correct. This is because a class is a blueprint for an object. In the class Learn we have two fixed properties (cohort: "Alpha" & year: 2022). We also are taking in a parameter of name and assigning it to the student property. When an object is being created from this blueprint we are giving it an argument of "George" that will be assigned to the student property. When we log that newly created object we will see all its key value pairs.
