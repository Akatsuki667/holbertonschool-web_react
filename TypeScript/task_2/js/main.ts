// interfaces et classes existantes
interface DirectorInterface {
  workFromHome(): string;
  getCoffeeBreak(): string;
  workDirectorTasks(): string;
}

interface TeacherInterface {
  workFromHome(): string;
  getCoffeeBreak(): string;
  workTeacherTasks(): string;
}

class Director implements DirectorInterface {
  workFromHome(): string {
    return "Working from home";
  }

  getCoffeeBreak(): string {
    return "Getting coffee break";
  }

  workDirectorTasks(): string {
    return "Getting to director tasks";
  }
}

class Teacher implements TeacherInterface {
  workFromHome(): string {
    return "Cannot work from home";
  }

  getCoffeeBreak(): string {
    return "Cannot have a break";
  }

  workTeacherTasks(): string {
    return "Getting to work";
  }
}

function createEmployee(salary: number | string): Teacher | Director {
  if (typeof salary === "number" && salary < 500) {
    return new Teacher();
  } else {
    return new Director();
  }
}

// Fonction isDirector - Type predicate
function isDirector(employee: Teacher | Director): employee is Director {
  // Vérifier si l'employé a la méthode workDirectorTasks
  return 'workDirectorTasks' in employee;
}

// Fonction executeWork
function executeWork(employee: Teacher | Director): string {
  if (isDirector(employee)) {
    // Si c'est un Director, appeler workDirectorTasks
    return employee.workDirectorTasks();
  } else {
    // Si c'est un Teacher, appeler workTeacherTasks
    return employee.workTeacherTasks();
  }
}

type Subjects = "Math" | "History";

function teachClass(todayClass: Subjects): string {
  if (todayClass === "Math") {
    return "Teaching Math";
  } else {
    return "Teaching History";
  }
}

// Tests des fonctions
console.log("=== Tests des fonctions ===");

// Créer des employés
const teacher = createEmployee(200);
const director = createEmployee(1000);

console.log("Employee 1 (salary 200):", teacher);
console.log("Employee 2 (salary 1000):", director);

// Tester isDirector
console.log("Is teacher a director?", isDirector(teacher));
console.log("Is director a director?", isDirector(director));

// Tester executeWork
console.log("Teacher work:", executeWork(teacher));
console.log("Director work:", executeWork(director));

// Tester teachClass
console.log(teachClass("Math"));
console.log(teachClass("History"));

// Tests supplémentaires
console.log("\n=== Tests supplémentaires ===");

// Créer directement des objets
const teacherDirect = new Teacher();
const directorDirect = new Director();

console.log("Direct teacher work:", executeWork(teacherDirect));
console.log("Direct director work:", executeWork(directorDirect));

// Tester avec différents salaires
const employee1 = createEmployee(300);
const employee2 = createEmployee("high");

console.log("Employee with salary 300:", executeWork(employee1));
console.log("Employee with salary 'high':", executeWork(employee2));
