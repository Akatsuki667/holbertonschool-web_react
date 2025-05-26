# Typescript

## 0. Creating an interface for a student
- Copy the following configuration files (provided above) into the `task_0` directory: `package.json`, `.eslintrc.js`, `tsconfig.json`, `webpack.config.js`

- Write your code in the `js/main.ts` file:

    - Write an interface named `Student` that accepts the following elements:
    - `firstName`: string
    - `lastName`: string
    - `age`: number
    - `location`: string

- Create 2 students variables called `student1` and `student2` and store them into an array named `studentsList`
- Using Vanilla Javascript, render a table and for each elements in the array, append a new row to the table
- Each row should contain the first name of the student and the location

## 1. Let's build a Teacher interface
- Create a directory `task_1` and copy these configuration files into this folder: `package.json`, `tsconfig.json`, `webpack.config.js`

- Write your code in the `js/main.ts` file:

    - Write an interface named Teacher that accepts the following elements:
        - `firstName`: string - can only be set during initialization of an object of this interface
        - `lastName`: string - can only be set during initialization of an object of this interface
        - `fullTimeEmployee`: boolean
        - `yearsOfExperience`: number - optional
        - `location`: string
        Add the possibility to add any attribute to the `Teacher` object like `contract(boolean)` without specifying the name of the attribute:
            - Property should be a string
            - Type of this property can be anything

## 2. Extending the Teacher class
- Write an interface named `Directors` that extends `Teacher`. It requires an attribute named `numberOfReports(number)`