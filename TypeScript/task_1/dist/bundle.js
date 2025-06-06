/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/*!********************!*\
  !*** ./js/main.ts ***!
  \********************/

var teacher = {
    firstName: 'John',
    lastName: 'Doe',
    fullTimeEmployee: false,
    location: 'London',
    contract: false,
};
console.log('Teacher: ', teacher);
var director = {
    firstName: 'Albus',
    lastName: 'Dumbledore',
    fullTimeEmployee: true,
    yearsOfExperience: 15,
    location: 'Poudlard',
    numberOfReports: 15,
};
console.log('Director: ', director);
function printTeacher(firstName, lastName) {
    return "".concat(firstName[0], ". ").concat(lastName, "$");
}
console.log(printTeacher('John', 'Doe'));
// Implémentation contrat
var StudentClass = /** @class */ (function () {
    // Initialisation propriétés
    function StudentClass(firstName, lastName) {
        this.firstName = firstName;
        this.lastName = lastName;
    }
    StudentClass.prototype.workOnHomework = function () {
        return "Currently working";
    };
    StudentClass.prototype.displayName = function () {
        return this.firstName;
    };
    return StudentClass;
}());
// Tests de la classe
var student = new StudentClass("Harry", "Potter");
// Test des méthodes
console.log("=== Tests StudentClass ===");
console.log("Student 1:", student);
console.log("Display Name:", student.displayName());
console.log("Work Status:", student.workOnHomework());
console.log("First Name:", student.firstName);
console.log("Last Name:", student.lastName);

/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYnVuZGxlLmpzIiwibWFwcGluZ3MiOiI7Ozs7OztBQVNBLElBQU0sT0FBTyxHQUFZO0lBQ3ZCLFNBQVMsRUFBRSxNQUFNO0lBQ2pCLFFBQVEsRUFBRSxLQUFLO0lBQ2YsZ0JBQWdCLEVBQUUsS0FBSztJQUN2QixRQUFRLEVBQUUsUUFBUTtJQUNsQixRQUFRLEVBQUUsS0FBSztDQUNoQixDQUFDO0FBRUYsT0FBTyxDQUFDLEdBQUcsQ0FBQyxXQUFXLEVBQUUsT0FBTyxDQUFDLENBQUM7QUFNbEMsSUFBTSxRQUFRLEdBQWM7SUFDMUIsU0FBUyxFQUFFLE9BQU87SUFDbEIsUUFBUSxFQUFFLFlBQVk7SUFDdEIsZ0JBQWdCLEVBQUUsSUFBSTtJQUN0QixpQkFBaUIsRUFBRSxFQUFFO0lBQ3JCLFFBQVEsRUFBRSxVQUFVO0lBQ3BCLGVBQWUsRUFBRSxFQUFFO0NBQ3BCLENBQUM7QUFFRixPQUFPLENBQUMsR0FBRyxDQUFDLFlBQVksRUFBRSxRQUFRLENBQUMsQ0FBQztBQUVwQyxTQUFTLFlBQVksQ0FBQyxTQUFnQixFQUFFLFFBQWU7SUFDckQsT0FBTyxVQUFHLFNBQVMsQ0FBQyxDQUFDLENBQUMsZUFBSyxRQUFRLE1BQUcsQ0FBQztBQUN6QyxDQUFDO0FBRUQsT0FBTyxDQUFDLEdBQUcsQ0FBQyxZQUFZLENBQUMsTUFBTSxFQUFFLEtBQUssQ0FBQyxDQUFDLENBQUM7QUFlekMseUJBQXlCO0FBQ3pCO0lBSUUsNEJBQTRCO0lBQzVCLHNCQUFZLFNBQWlCLEVBQUUsUUFBZ0I7UUFDN0MsSUFBSSxDQUFDLFNBQVMsR0FBRyxTQUFTLENBQUM7UUFDM0IsSUFBSSxDQUFDLFFBQVEsR0FBRyxRQUFRLENBQUM7SUFDM0IsQ0FBQztJQUVELHFDQUFjLEdBQWQ7UUFDRSxPQUFPLG1CQUFtQixDQUFDO0lBQzdCLENBQUM7SUFFRCxrQ0FBVyxHQUFYO1FBQ0UsT0FBTyxJQUFJLENBQUMsU0FBUyxDQUFDO0lBQ3hCLENBQUM7SUFDSCxtQkFBQztBQUFELENBQUM7QUFFRCxxQkFBcUI7QUFDckIsSUFBTSxPQUFPLEdBQUcsSUFBSSxZQUFZLENBQUMsT0FBTyxFQUFFLFFBQVEsQ0FBQyxDQUFDO0FBRXBELG9CQUFvQjtBQUNwQixPQUFPLENBQUMsR0FBRyxDQUFDLDRCQUE0QixDQUFDLENBQUM7QUFDMUMsT0FBTyxDQUFDLEdBQUcsQ0FBQyxZQUFZLEVBQUUsT0FBTyxDQUFDLENBQUM7QUFDbkMsT0FBTyxDQUFDLEdBQUcsQ0FBQyxlQUFlLEVBQUUsT0FBTyxDQUFDLFdBQVcsRUFBRSxDQUFDLENBQUM7QUFDcEQsT0FBTyxDQUFDLEdBQUcsQ0FBQyxjQUFjLEVBQUUsT0FBTyxDQUFDLGNBQWMsRUFBRSxDQUFDLENBQUM7QUFDdEQsT0FBTyxDQUFDLEdBQUcsQ0FBQyxhQUFhLEVBQUUsT0FBTyxDQUFDLFNBQVMsQ0FBQyxDQUFDO0FBQzlDLE9BQU8sQ0FBQyxHQUFHLENBQUMsWUFBWSxFQUFFLE9BQU8sQ0FBQyxRQUFRLENBQUMsQ0FBQyIsInNvdXJjZXMiOlsid2VicGFjazovL3R5cGVzY3JpcHRfZGVwZW5kZW5jaWVzLy4vanMvbWFpbi50cyJdLCJzb3VyY2VzQ29udGVudCI6WyJpbnRlcmZhY2UgVGVhY2hlciB7XG4gIHJlYWRvbmx5IGZpcnN0TmFtZTogc3RyaW5nO1xuICByZWFkb25seSBsYXN0TmFtZTogc3RyaW5nO1xuICBmdWxsVGltZUVtcGxveWVlOiBib29sZWFuO1xuICB5ZWFyc09mRXhwZXJpZW5jZT86IG51bWJlcjtcbiAgbG9jYXRpb246IHN0cmluZztcbiAgW2F1dHJlUHJvcHJpZXRlOiBzdHJpbmddOiBhbnk7XG59XG5cbmNvbnN0IHRlYWNoZXI6IFRlYWNoZXIgPSB7XG4gIGZpcnN0TmFtZTogJ0pvaG4nLFxuICBsYXN0TmFtZTogJ0RvZScsXG4gIGZ1bGxUaW1lRW1wbG95ZWU6IGZhbHNlLFxuICBsb2NhdGlvbjogJ0xvbmRvbicsXG4gIGNvbnRyYWN0OiBmYWxzZSxcbn07XG5cbmNvbnNvbGUubG9nKCdUZWFjaGVyOiAnLCB0ZWFjaGVyKTtcblxuaW50ZXJmYWNlIERpcmVjdG9ycyBleHRlbmRzIFRlYWNoZXIge1xuICBudW1iZXJPZlJlcG9ydHM6IG51bWJlcjtcbn1cblxuY29uc3QgZGlyZWN0b3I6IERpcmVjdG9ycyA9IHtcbiAgZmlyc3ROYW1lOiAnQWxidXMnLFxuICBsYXN0TmFtZTogJ0R1bWJsZWRvcmUnLFxuICBmdWxsVGltZUVtcGxveWVlOiB0cnVlLFxuICB5ZWFyc09mRXhwZXJpZW5jZTogMTUsXG4gIGxvY2F0aW9uOiAnUG91ZGxhcmQnLFxuICBudW1iZXJPZlJlcG9ydHM6IDE1LFxufTtcblxuY29uc29sZS5sb2coJ0RpcmVjdG9yOiAnLCBkaXJlY3Rvcik7XG5cbmZ1bmN0aW9uIHByaW50VGVhY2hlcihmaXJzdE5hbWU6c3RyaW5nLCBsYXN0TmFtZTpzdHJpbmcpIHtcbiAgcmV0dXJuIGAke2ZpcnN0TmFtZVswXX0uICR7bGFzdE5hbWV9JGA7XG59XG5cbmNvbnNvbGUubG9nKHByaW50VGVhY2hlcignSm9obicsICdEb2UnKSk7XG5cbi8vIEludGVyZmFjZSBjbGFzc2U6IENvbnRyYXQgcXVlIGxhIGNsYXNzZSBkb2l0IHJlc3BlY3RlclxuaW50ZXJmYWNlIFN0dWRlbnRDbGFzc0ludGVyZmFjZSB7XG4gIGZpcnN0TmFtZTogc3RyaW5nOyAvLyBQcm9wcmnDqXTDqXMgb2JsaWdhdG9pcmVzXG4gIGxhc3ROYW1lOiBzdHJpbmc7IC8vIFByb3ByacOpdMOpcyBvYmxpZ2F0b2lyZXNcbiAgd29ya09uSG9tZXdvcmsoKTogc3RyaW5nOyAvLyBNw6l0aG9kZXMgb2JsaWdhdG9pcmVzXG4gIGRpc3BsYXlOYW1lKCk6IHN0cmluZzsgLy8gTcOpdGhvZGVzIG9ibGlnYXRvaXJlc1xufVxuXG4vLyBJbnRlcmZhY2UgY29uc3RydWN0ZXVyOiBkZXNjcmlwdGlvbiBjcsOpYXRpb24gb2JqZXRcbmludGVyZmFjZSBTdHVkZW50Q29uc3RydWN0b3Ige1xuICBuZXcoZmlyc3ROYW1lOiBzdHJpbmcsIGxhc3ROYW1lOiBzdHJpbmcpOiBTdHVkZW50Q2xhc3NJbnRlcmZhY2U7XG59XG5cbi8vIEltcGzDqW1lbnRhdGlvbiBjb250cmF0XG5jbGFzcyBTdHVkZW50Q2xhc3MgaW1wbGVtZW50cyBTdHVkZW50Q2xhc3NJbnRlcmZhY2Uge1xuICBmaXJzdE5hbWU6IHN0cmluZztcbiAgbGFzdE5hbWU6IHN0cmluZztcblxuICAvLyBJbml0aWFsaXNhdGlvbiBwcm9wcmnDqXTDqXNcbiAgY29uc3RydWN0b3IoZmlyc3ROYW1lOiBzdHJpbmcsIGxhc3ROYW1lOiBzdHJpbmcpIHtcbiAgICB0aGlzLmZpcnN0TmFtZSA9IGZpcnN0TmFtZTtcbiAgICB0aGlzLmxhc3ROYW1lID0gbGFzdE5hbWU7XG4gIH1cblxuICB3b3JrT25Ib21ld29yaygpOiBzdHJpbmcge1xuICAgIHJldHVybiBcIkN1cnJlbnRseSB3b3JraW5nXCI7XG4gIH1cblxuICBkaXNwbGF5TmFtZSgpOiBzdHJpbmcge1xuICAgIHJldHVybiB0aGlzLmZpcnN0TmFtZTtcbiAgfVxufVxuXG4vLyBUZXN0cyBkZSBsYSBjbGFzc2VcbmNvbnN0IHN0dWRlbnQgPSBuZXcgU3R1ZGVudENsYXNzKFwiSGFycnlcIiwgXCJQb3R0ZXJcIik7XG5cbi8vIFRlc3QgZGVzIG3DqXRob2Rlc1xuY29uc29sZS5sb2coXCI9PT0gVGVzdHMgU3R1ZGVudENsYXNzID09PVwiKTtcbmNvbnNvbGUubG9nKFwiU3R1ZGVudCAxOlwiLCBzdHVkZW50KTtcbmNvbnNvbGUubG9nKFwiRGlzcGxheSBOYW1lOlwiLCBzdHVkZW50LmRpc3BsYXlOYW1lKCkpO1xuY29uc29sZS5sb2coXCJXb3JrIFN0YXR1czpcIiwgc3R1ZGVudC53b3JrT25Ib21ld29yaygpKTtcbmNvbnNvbGUubG9nKFwiRmlyc3QgTmFtZTpcIiwgc3R1ZGVudC5maXJzdE5hbWUpO1xuY29uc29sZS5sb2coXCJMYXN0IE5hbWU6XCIsIHN0dWRlbnQubGFzdE5hbWUpO1xuIl0sIm5hbWVzIjpbXSwic291cmNlUm9vdCI6IiJ9