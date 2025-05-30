import { RowID, RowElement } from './interface';

// Déclarations de types pour les fonctions CRUD
declare function insertRow(row: RowElement): RowID;
declare function deleteRow(rowId: RowID): void;
declare function updateRow(rowId: RowID, row: RowElement): RowID;
