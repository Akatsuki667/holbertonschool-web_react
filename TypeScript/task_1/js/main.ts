interface Teacher {
  readonly firstName: string;
  readonly lastName: string;
  fullTimeEmployee: boolean;
  yearsOfExperience?: number;
  location: string;
  [autrePropriete: string]: any;
}

const teacher: Teacher = {
  firstName: 'John',
  lastName: 'Doe',
  fullTimeEmployee: false,
  location: 'London',
  contract: false,
};

console.log('Teacher: ', teacher);

interface Directors extends Teacher {
  numberOfReports: number;
}

const director: Directors = {
  firstName: 'Albus',
  lastName: 'Dumbledore',
  fullTimeEmployee: true,
  yearsOfExperience: 15,
  location: 'Poudlard',
  numberOfReports: 15,
};

console.log('Director: ', director);

function printTeacher(firstName:string, lastName:string) {
  return `${firstName[0]}. ${lastName}$`;
}

console.log(printTeacher('John', 'Doe'));

// Interface classe: Contrat que la classe doit respecter
interface StudentClassInterface {
  firstName: string; // Propriétés obligatoires
  lastName: string; // Propriétés obligatoires
  workOnHomework(): string; // Méthodes obligatoires
  displayName(): string; // Méthodes obligatoires
}

// Interface constructeur: description création objet
interface StudentConstructor {
  new(firstName: string, lastName: string): StudentClassInterface;
}

// Implémentation contrat
class StudentClass implements StudentClassInterface {
  firstName: string;
  lastName: string;

  // Initialisation propriétés
  constructor(firstName: string, lastName: string) {
    this.firstName = firstName;
    this.lastName = lastName;
  }

  workOnHomework(): string {
    return "Currently working";
  }

  displayName(): string {
    return this.firstName;
  }
}

// Tests de la classe
const student = new StudentClass("Harry", "Potter");

// Test des méthodes
console.log("=== Tests StudentClass ===");
console.log("Student 1:", student);
console.log("Display Name:", student.displayName());
console.log("Work Status:", student.workOnHomework());
console.log("First Name:", student.firstName);
console.log("Last Name:", student.lastName);
