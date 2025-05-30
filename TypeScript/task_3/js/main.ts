/// <reference path="./crud.d.ts" />

import { RowID, RowElement } from './interface';
import * as CRUD from './crud';


// Créer un objet row avec le type RowElement
const row: RowElement = {
  firstName: 'Guillaume',
  lastName: 'Salva'
};

const newRowID: RowID = CRUD.insertRow(row);

const updatedRow: RowElement = {
  ...row,
  age: 23
};


CRUD.updateRow(newRowID, updatedRow);
CRUD.deleteRow(newRowID);
