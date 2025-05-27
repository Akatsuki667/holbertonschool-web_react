/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/*!********************!*\
  !*** ./js/main.ts ***!
  \********************/

var Director = /** @class */ (function () {
    function Director() {
    }
    Director.prototype.workFromHome = function () {
        return "Working from home";
    };
    Director.prototype.getCoffeeBreak = function () {
        return "Getting coffee break";
    };
    Director.prototype.workDirectorTasks = function () {
        return "Getting to director tasks";
    };
    return Director;
}());
var Teacher = /** @class */ (function () {
    function Teacher() {
    }
    Teacher.prototype.workFromHome = function () {
        return "Cannot work from home";
    };
    Teacher.prototype.getCoffeeBreak = function () {
        return "Cannot have a break";
    };
    Teacher.prototype.workTeacherTasks = function () {
        return "Getting to work";
    };
    return Teacher;
}());
function createEmployee(salary) {
    if (typeof salary === "number" && salary < 500) {
        return new Teacher();
    }
    else {
        return new Director();
    }
}
// Fonction isDirector - Type predicate
function isDirector(employee) {
    // Vérifier si l'employé a la méthode workDirectorTasks
    return 'workDirectorTasks' in employee;
}
// Fonction executeWork
function executeWork(employee) {
    if (isDirector(employee)) {
        // Si c'est un Director, appeler workDirectorTasks
        return employee.workDirectorTasks();
    }
    else {
        // Si c'est un Teacher, appeler workTeacherTasks
        return employee.workTeacherTasks();
    }
}
function teachClass(todayClass) {
    if (todayClass === "Math") {
        return "Teaching Math";
    }
    else {
        return "Teaching History";
    }
}
// Tests des fonctions
console.log("=== Tests des fonctions ===");
// Créer des employés
var teacher = createEmployee(200);
var director = createEmployee(1000);
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
var teacherDirect = new Teacher();
var directorDirect = new Director();
console.log("Direct teacher work:", executeWork(teacherDirect));
console.log("Direct director work:", executeWork(directorDirect));
// Tester avec différents salaires
var employee1 = createEmployee(300);
var employee2 = createEmployee("high");
console.log("Employee with salary 300:", executeWork(employee1));
console.log("Employee with salary 'high':", executeWork(employee2));

/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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LElBQUksT0FBTyxFQUFFLENBQUM7QUFDcEMsSUFBTSxjQUFjLEdBQUcsSUFBSSxRQUFRLEVBQUUsQ0FBQztBQUV0QyxPQUFPLENBQUMsR0FBRyxDQUFDLHNCQUFzQixFQUFFLFdBQVcsQ0FBQyxhQUFhLENBQUMsQ0FBQyxDQUFDO0FBQ2hFLE9BQU8sQ0FBQyxHQUFHLENBQUMsdUJBQXVCLEVBQUUsV0FBVyxDQUFDLGNBQWMsQ0FBQyxDQUFDLENBQUM7QUFFbEUsa0NBQWtDO0FBQ2xDLElBQU0sU0FBUyxHQUFHLGNBQWMsQ0FBQyxHQUFHLENBQUMsQ0FBQztBQUN0QyxJQUFNLFNBQVMsR0FBRyxjQUFjLENBQUMsTUFBTSxDQUFDLENBQUM7QUFFekMsT0FBTyxDQUFDLEdBQUcsQ0FBQywyQkFBMkIsRUFBRSxXQUFXLENBQUMsU0FBUyxDQUFDLENBQUMsQ0FBQztBQUNqRSxPQUFPLENBQUMsR0FBRyxDQUFDLDhCQUE4QixFQUFFLFdBQVcsQ0FBQyxTQUFTLENBQUMsQ0FBQyxDQUFDIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vdHlwZXNjcmlwdF9kZXBlbmRlbmNpZXMvLi9qcy9tYWluLnRzIl0sInNvdXJjZXNDb250ZW50IjpbIi8vIGludGVyZmFjZXMgZXQgY2xhc3NlcyBleGlzdGFudGVzXG5pbnRlcmZhY2UgRGlyZWN0b3JJbnRlcmZhY2Uge1xuICB3b3JrRnJvbUhvbWUoKTogc3RyaW5nO1xuICBnZXRDb2ZmZWVCcmVhaygpOiBzdHJpbmc7XG4gIHdvcmtEaXJlY3RvclRhc2tzKCk6IHN0cmluZztcbn1cblxuaW50ZXJmYWNlIFRlYWNoZXJJbnRlcmZhY2Uge1xuICB3b3JrRnJvbUhvbWUoKTogc3RyaW5nO1xuICBnZXRDb2ZmZWVCcmVhaygpOiBzdHJpbmc7XG4gIHdvcmtUZWFjaGVyVGFza3MoKTogc3RyaW5nO1xufVxuXG5jbGFzcyBEaXJlY3RvciBpbXBsZW1lbnRzIERpcmVjdG9ySW50ZXJmYWNlIHtcbiAgd29ya0Zyb21Ib21lKCk6IHN0cmluZyB7XG4gICAgcmV0dXJuIFwiV29ya2luZyBmcm9tIGhvbWVcIjtcbiAgfVxuXG4gIGdldENvZmZlZUJyZWFrKCk6IHN0cmluZyB7XG4gICAgcmV0dXJuIFwiR2V0dGluZyBjb2ZmZWUgYnJlYWtcIjtcbiAgfVxuXG4gIHdvcmtEaXJlY3RvclRhc2tzKCk6IHN0cmluZyB7XG4gICAgcmV0dXJuIFwiR2V0dGluZyB0byBkaXJlY3RvciB0YXNrc1wiO1xuICB9XG59XG5cbmNsYXNzIFRlYWNoZXIgaW1wbGVtZW50cyBUZWFjaGVySW50ZXJmYWNlIHtcbiAgd29ya0Zyb21Ib21lKCk6IHN0cmluZyB7XG4gICAgcmV0dXJuIFwiQ2Fubm90IHdvcmsgZnJvbSBob21lXCI7XG4gIH1cblxuICBnZXRDb2ZmZWVCcmVhaygpOiBzdHJpbmcge1xuICAgIHJldHVybiBcIkNhbm5vdCBoYXZlIGEgYnJlYWtcIjtcbiAgfVxuXG4gIHdvcmtUZWFjaGVyVGFza3MoKTogc3RyaW5nIHtcbiAgICByZXR1cm4gXCJHZXR0aW5nIHRvIHdvcmtcIjtcbiAgfVxufVxuXG5mdW5jdGlvbiBjcmVhdGVFbXBsb3llZShzYWxhcnk6IG51bWJlciB8IHN0cmluZyk6IFRlYWNoZXIgfCBEaXJlY3RvciB7XG4gIGlmICh0eXBlb2Ygc2FsYXJ5ID09PSBcIm51bWJlclwiICYmIHNhbGFyeSA8IDUwMCkge1xuICAgIHJldHVybiBuZXcgVGVhY2hlcigpO1xuICB9IGVsc2Uge1xuICAgIHJldHVybiBuZXcgRGlyZWN0b3IoKTtcbiAgfVxufVxuXG4vLyBGb25jdGlvbiBpc0RpcmVjdG9yIC0gVHlwZSBwcmVkaWNhdGVcbmZ1bmN0aW9uIGlzRGlyZWN0b3IoZW1wbG95ZWU6IFRlYWNoZXIgfCBEaXJlY3Rvcik6IGVtcGxveWVlIGlzIERpcmVjdG9yIHtcbiAgLy8gVsOpcmlmaWVyIHNpIGwnZW1wbG95w6kgYSBsYSBtw6l0aG9kZSB3b3JrRGlyZWN0b3JUYXNrc1xuICByZXR1cm4gJ3dvcmtEaXJlY3RvclRhc2tzJyBpbiBlbXBsb3llZTtcbn1cblxuLy8gRm9uY3Rpb24gZXhlY3V0ZVdvcmtcbmZ1bmN0aW9uIGV4ZWN1dGVXb3JrKGVtcGxveWVlOiBUZWFjaGVyIHwgRGlyZWN0b3IpOiBzdHJpbmcge1xuICBpZiAoaXNEaXJlY3RvcihlbXBsb3llZSkpIHtcbiAgICAvLyBTaSBjJ2VzdCB1biBEaXJlY3RvciwgYXBwZWxlciB3b3JrRGlyZWN0b3JUYXNrc1xuICAgIHJldHVybiBlbXBsb3llZS53b3JrRGlyZWN0b3JUYXNrcygpO1xuICB9IGVsc2Uge1xuICAgIC8vIFNpIGMnZXN0IHVuIFRlYWNoZXIsIGFwcGVsZXIgd29ya1RlYWNoZXJUYXNrc1xuICAgIHJldHVybiBlbXBsb3llZS53b3JrVGVhY2hlclRhc2tzKCk7XG4gIH1cbn1cblxudHlwZSBTdWJqZWN0cyA9IFwiTWF0aFwiIHwgXCJIaXN0b3J5XCI7XG5cbmZ1bmN0aW9uIHRlYWNoQ2xhc3ModG9kYXlDbGFzczogU3ViamVjdHMpOiBzdHJpbmcge1xuICBpZiAodG9kYXlDbGFzcyA9PT0gXCJNYXRoXCIpIHtcbiAgICByZXR1cm4gXCJUZWFjaGluZyBNYXRoXCI7XG4gIH0gZWxzZSB7XG4gICAgcmV0dXJuIFwiVGVhY2hpbmcgSGlzdG9yeVwiO1xuICB9XG59XG5cbi8vIFRlc3RzIGRlcyBmb25jdGlvbnNcbmNvbnNvbGUubG9nKFwiPT09IFRlc3RzIGRlcyBmb25jdGlvbnMgPT09XCIpO1xuXG4vLyBDcsOpZXIgZGVzIGVtcGxvecOpc1xuY29uc3QgdGVhY2hlciA9IGNyZWF0ZUVtcGxveWVlKDIwMCk7XG5jb25zdCBkaXJlY3RvciA9IGNyZWF0ZUVtcGxveWVlKDEwMDApO1xuXG5jb25zb2xlLmxvZyhcIkVtcGxveWVlIDEgKHNhbGFyeSAyMDApOlwiLCB0ZWFjaGVyKTtcbmNvbnNvbGUubG9nKFwiRW1wbG95ZWUgMiAoc2FsYXJ5IDEwMDApOlwiLCBkaXJlY3Rvcik7XG5cbi8vIFRlc3RlciBpc0RpcmVjdG9yXG5jb25zb2xlLmxvZyhcIklzIHRlYWNoZXIgYSBkaXJlY3Rvcj9cIiwgaXNEaXJlY3Rvcih0ZWFjaGVyKSk7XG5jb25zb2xlLmxvZyhcIklzIGRpcmVjdG9yIGEgZGlyZWN0b3I/XCIsIGlzRGlyZWN0b3IoZGlyZWN0b3IpKTtcblxuLy8gVGVzdGVyIGV4ZWN1dGVXb3JrXG5jb25zb2xlLmxvZyhcIlRlYWNoZXIgd29yazpcIiwgZXhlY3V0ZVdvcmsodGVhY2hlcikpO1xuY29uc29sZS5sb2coXCJEaXJlY3RvciB3b3JrOlwiLCBleGVjdXRlV29yayhkaXJlY3RvcikpO1xuXG4vLyBUZXN0ZXIgdGVhY2hDbGFzc1xuY29uc29sZS5sb2codGVhY2hDbGFzcyhcIk1hdGhcIikpO1xuY29uc29sZS5sb2codGVhY2hDbGFzcyhcIkhpc3RvcnlcIikpO1xuXG4vLyBUZXN0cyBzdXBwbMOpbWVudGFpcmVzXG5jb25zb2xlLmxvZyhcIlxcbj09PSBUZXN0cyBzdXBwbMOpbWVudGFpcmVzID09PVwiKTtcblxuLy8gQ3LDqWVyIGRpcmVjdGVtZW50IGRlcyBvYmpldHNcbmNvbnN0IHRlYWNoZXJEaXJlY3QgPSBuZXcgVGVhY2hlcigpO1xuY29uc3QgZGlyZWN0b3JEaXJlY3QgPSBuZXcgRGlyZWN0b3IoKTtcblxuY29uc29sZS5sb2coXCJEaXJlY3QgdGVhY2hlciB3b3JrOlwiLCBleGVjdXRlV29yayh0ZWFjaGVyRGlyZWN0KSk7XG5jb25zb2xlLmxvZyhcIkRpcmVjdCBkaXJlY3RvciB3b3JrOlwiLCBleGVjdXRlV29yayhkaXJlY3RvckRpcmVjdCkpO1xuXG4vLyBUZXN0ZXIgYXZlYyBkaWZmw6lyZW50cyBzYWxhaXJlc1xuY29uc3QgZW1wbG95ZWUxID0gY3JlYXRlRW1wbG95ZWUoMzAwKTtcbmNvbnN0IGVtcGxveWVlMiA9IGNyZWF0ZUVtcGxveWVlKFwiaGlnaFwiKTtcblxuY29uc29sZS5sb2coXCJFbXBsb3llZSB3aXRoIHNhbGFyeSAzMDA6XCIsIGV4ZWN1dGVXb3JrKGVtcGxveWVlMSkpO1xuY29uc29sZS5sb2coXCJFbXBsb3llZSB3aXRoIHNhbGFyeSAnaGlnaCc6XCIsIGV4ZWN1dGVXb3JrKGVtcGxveWVlMikpO1xuIl0sIm5hbWVzIjpbXSwic291cmNlUm9vdCI6IiJ9