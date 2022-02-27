# ASSESSMENT 2: Interview Practice Questions

Answer the following questions.

First, without external resources. Challenge yourself to answer from memory as if you were in a job interview.

Then, research the question to expand on your answer. Even if you feel you have answered the question completely, there is always something more to learn. Write your researched answer in your OWN WORDS.

1. What is the difference between a parameter and an argument?

  Your answer: So, a parameter is created when you define a function. It is basically a placeholder for input that you supply to your function. The code within your function uses these parameters to give you the expected output based on that input from those parameters. The arguments are the actual values that you give your function to use when you invoke it.

  Researched answer: Arguments are values that you pass into the invocation of the function and the parameters are what tell your function how to use that input to return an output after execution.

2. The JavaScript built in method .map() takes predefined parameters. What are they? Which are required and which are optional?

  Your answer: The map method takes the value, index and array. The value is the value in the collection at that point in the iteration. The index is the position in the collection. Lastly, the array is the entire collection that method is iterating through. The index and array are both optional.

  Researched answer: The .map method takes in the current value, index and array. Current value is required as where index and array are optional. It also needs the name of the collection followed by the .map method. The default return value is undefined.

3. What is the difference between map and filter?

  Your answer: The map method will return a collection at the same length that it was given. The filter method will return an array at either the same length OR shorter based on the information that you want to filter out.

  Researched answer: The filter method creates and returns a new array filled with elements that pass a condition that you are checking for. The map method creates and returns a new array from every element in the collection it was supplied.

4. What is the difference between a function and a method?

  Your answer: A function is a piece of code that returns an output based on the input (possibly no input) you give it. A method is a function that is connected to an object or class.

  Researched answer: A function is more free floating/independent and is called/invoked by its name, whereas a method is executable code called by an object's name followed by .name_of_method() and is connected to a class or object.

5. What is object destructuring?

  Your answer: Object destructing is storing some sort of data/value/collection in a variable that was taken from an object. You surround the name of the key in curly braces and assign it to where that key is located in the object and now instead of writing out a long line with dot-notation you can refer to the data by using the name in the curly braces.

  Researched answer: Object destructing is a good way to extract properties from objects and assign them to variables for later use. You can also use them assign a default value if that property doesn't exist.

6. STRETCH: What is hoisting in JavaScript?

  Your answer: The only thing that comes to mind here is that hoisting is the process of raising something. I think of "hoisting something in the air using a crane" or something alongside that. If I had to take a wild guess I would think that hoisting in JavaScript is pulling up something to the top. Perhaps the process of rearranging your code to the top of a JS file for an example.

  Researched answer: I guess I didn't have the worst answer. Hoisting is JavaScript's default behavior of defining declarations at the top scope before code execution. This allows functions to be called before they appear in the code. A good example of this would be creating a Jest test and calling on a function when the actual function is declared underneath the test.

## Looking Ahead: Terms for Next Week

Research and define the following terms to the best of your ability.

1. Class Inheritance: Class inheritance allows to further modify an existing parent class without fully writing a new class that generally does the same thing. This could be overwriting/adding additional classes and properties.

2. React: React is a open JavaScript library for user interfaces/front-end applications. More specifically for single-page applications. React allows the ability to create reusable components.

3. React state: It is a built-in React object that stores data or information. It is primarily used for rerendering information onto a webpage.

4. React lifecycle methods: It is a process with three main phases. Mounting, Updating and Unmounting. Each phase can be monitored and manipulated. We can tell the webpage how to react when corresponding to these phases.

5. DOM: Document Object Model (DOM) contains all the information about the page. This includes style, content and structure.
