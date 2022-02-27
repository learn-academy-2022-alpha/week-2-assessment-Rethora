// ASSESSMENT 2: Coding Practical Questions with Jest

// Please read all questions thoroughly
// Pseudo coding is REQUIRED
// If you get stuck, please leave comments to help us understand your thought process

// Use test driven development to complete the following questions
// Add appropriate dependencies: $ yarn add jest

// Reminder: The test will call your function
// Run the file with the following command: $ yarn jest

// --------------------INSTRUCTOR EXAMPLE: Create a function that takes in an array of numbers and returns an array with all the numbers multipled by 3.

// a) Create a test with expect statements for each of the variables provided.

describe('multThree', () => {
    it('take in an array of numbers and returns an array with all the numbers multiplied by 3', () => {
        const numbersArray1 = [6, 7, 8, 9, 10]
        // Expected output: [18, 21, 24, 27, 30]
        const numbersArray2 = [24, 27, 30, 33, 36]
        // Expected output: [72, 81, 90, 99, 108]

        expect(multThree(numbersArray1)).toEqual([18, 21, 24, 27, 30])
        expect(multThree(numbersArray2)).toEqual([72, 81, 90, 99, 108])
    })
})

// Good failure!

// b) Create the function that makes the test pass.

// PSEUDO CODE:
// create a function named multThree
// multThree will take in a parameter of an array named array
// we can iterate through that array and return a new array with each element multiplied by three
// we can then return that new array

const multThree = array => array.map(value => value * 3)

// Passed the test!

// --------------------1) Create a function that takes a number as an argument and decides if the number is evenly divisble by three or not.

// a) Create a test with expect statements for each of the variables provided.

describe('divisibleByThree', () => {
    it('take a number as an argument and decides if the number is evenly divisible by three or not', () => {
        const num1 = 15
        // Expected output: "15 is divisible by three"
        const num2 = 0
        // Expected output: "0 is divisible by three"
        const num3 = -7
        // Expected output: "-7 is not divisible by three"

        expect(divisibleByThree(num1)).toEqual("15 is divisible by three")
        expect(divisibleByThree(num2)).toEqual("0 is divisible by three")
        expect(divisibleByThree(num3)).toEqual("-7 is not divisible by three")
    })
})

// Good failure!

// b) Create the function that makes the test pass.

// PSEUDO CODE:
// create a function named divisibleByThree
// divisibleByThree will have a parameter of number which will be a number
// we will check if that number is divisible by three or not
// we can return a string with the number and is/is not divisible by three

const divisibleByThree = number => number % 3 === 0 ? `${number} is divisible by three` : `${number} is not divisible by three`

// Passed the test!

// --------------------2) Create a function that takes in an array of words and returns an array with all the words capitalized.

// a) Create a test with expect statements for each of the variables provided.

describe('capitalizeWords', () => {
    it('take in an array of words and returns an array with all the words capitalized', () => {
        const randomNouns1 = ["streetlamp", "potato", "teeth", "conclusion", "nephew"]
        // Expected output: ["Streetlamp", "Potato", "Teeth", "Conclusion", "Nephew"]
        const randomNouns2 = ["temperature", "database", "chopsticks", "mango", "deduction"]
        // Expected output: ["Temperature", "Database", "Chopsticks", "Mango", "Deduction"]

        expect(capitalizeWords(randomNouns1)).toEqual(["Streetlamp", "Potato", "Teeth", "Conclusion", "Nephew"])
        expect(capitalizeWords(randomNouns2)).toEqual(["Temperature", "Database", "Chopsticks", "Mango", "Deduction"])
    })
})

// Good failure!

// b) Create the function that makes the test pass.

// PSEUDO CODE:
// create a function named capitalizeWords
// capitalizeWords will take in an array of strings named array
// we will loop over the array and and transform the first letter in the string to uppercase for each element
// we can do this by getting just the first letter and capitalizing it and then add the rest of the string (besides the first letter)
// we can then return the new array of capitalized words

const capitalizeWords = array => array.map(value => value.charAt(0).toUpperCase() + value.slice(1))

// Passed the test!

// --------------------3) Create a function that takes in a string and logs the index of the first vowel.

// a) Create a test with expect statements for each of the variables provided.

describe('firstIndexOfVowel', () => {
    it('take in a string and logs the index of the first vowel', () => {
        const vowelTester1 = "learn"
        // Expected output: 1
        const vowelTester2 = "academy"
        // Expected output: 0
        const vowelTester3 = "challenges"
        // Expected output: 2

        expect(firstIndexOfVowel(vowelTester1)).toEqual(1)
        expect(firstIndexOfVowel(vowelTester2)).toEqual(0)
        expect(firstIndexOfVowel(vowelTester3)).toEqual(2)
        
        // my custom test to see if function returns -1 with no vowel in string
        expect(firstIndexOfVowel("nbmnbmnbmnbmnbmbmnbmnbnmbmnbm")).toEqual(-1)
        // my custom test to see if function still returns first index of vowel with uppercase letters
        expect(firstIndexOfVowel("SOME UPperCase LETters")).toEqual(1)
    })
})

// Good failure!

// b) Create the function that makes the test pass.

// PSEUDO CODE:
// create a function named firstIndexOfVowel
// firstIndexOfVowel will take in a string named string
// we need a way to define what vowels are in this function
// we can iterate through each character in the string
// we can determine if the character is a vowel by converting character to lowercase and comparing with our defined vowels
// this will handle any uppercase letters that may be passed to our function
// we can now find the first occurrence of a vowel and return it
// if no vowel is found we will return -1

const firstIndexOfVowel = string => {
    const vowels = 'aeiou'

    return string.split('').findIndex(value => vowels.includes(value.toLowerCase()))
}

// Passed the test!
