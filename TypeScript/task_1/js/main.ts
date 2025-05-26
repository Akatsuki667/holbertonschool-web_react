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
  return `${firstName.charAt(0)}. ${lastName}$`;
}

console.log(printTeacher('John', 'Doe'));