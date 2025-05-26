// Définition interface Student
interface Student {
  firstName: string;
  lastName: string;
  age: number;
  location: string;
}

// Création Student
const student1: Student = {
  firstName: 'A',
  lastName: 'B',
  age: 23,
  location: 'NY',
};

const student2: Student = {
  firstName: 'C',
  lastName: 'D',
  age: 21,
  location: 'PARIS',
};

// Création tableau d'étudiant
const studentsList: Student[] = [student1, student2];

// Création tableau HTML
const table = document.createElement('table');

// Ajout du tableau au body de la page
document.body.appendChild(table);

// Parcourir chaque étudiant dans la liste
for (let i = 0; i < studentsList.length; i++) {
  // Récupération étudiant courant
  const currentStudent = studentsList[i];

  // Créer nouvelle ligne
  const row = document.createElement('tr');

  // Création cellule firstname;
  const fristNameCell = document.createElement('td');
  fristNameCell.textContent = currentStudent.firstName;

  // Création cellule location
  const locationCell = document.createElement('td');
  locationCell.textContent = currentStudent.location;

  // Ajout cellules à la ligne
  row.appendChild(fristNameCell);
  row.appendChild(locationCell);

  // Ajout ligne au tableau
  table.appendChild(row);
}
