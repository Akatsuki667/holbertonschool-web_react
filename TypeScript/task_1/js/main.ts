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