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
    return "".concat(firstName.charAt(0), ". ").concat(lastName, "$");
}
console.log(printTeacher('John', 'Doe'));

/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYnVuZGxlLmpzIiwibWFwcGluZ3MiOiI7Ozs7OztBQVNBLElBQU0sT0FBTyxHQUFZO0lBQ3ZCLFNBQVMsRUFBRSxNQUFNO0lBQ2pCLFFBQVEsRUFBRSxLQUFLO0lBQ2YsZ0JBQWdCLEVBQUUsS0FBSztJQUN2QixRQUFRLEVBQUUsUUFBUTtJQUNsQixRQUFRLEVBQUUsS0FBSztDQUNoQixDQUFDO0FBRUYsT0FBTyxDQUFDLEdBQUcsQ0FBQyxXQUFXLEVBQUUsT0FBTyxDQUFDLENBQUM7QUFNbEMsSUFBTSxRQUFRLEdBQWM7SUFDMUIsU0FBUyxFQUFFLE9BQU87SUFDbEIsUUFBUSxFQUFFLFlBQVk7SUFDdEIsZ0JBQWdCLEVBQUUsSUFBSTtJQUN0QixpQkFBaUIsRUFBRSxFQUFFO0lBQ3JCLFFBQVEsRUFBRSxVQUFVO0lBQ3BCLGVBQWUsRUFBRSxFQUFFO0NBQ3BCLENBQUM7QUFFRixPQUFPLENBQUMsR0FBRyxDQUFDLFlBQVksRUFBRSxRQUFRLENBQUMsQ0FBQztBQUVwQyxTQUFTLFlBQVksQ0FBQyxTQUFnQixFQUFFLFFBQWU7SUFDckQsT0FBTyxVQUFHLFNBQVMsQ0FBQyxNQUFNLENBQUMsQ0FBQyxDQUFDLGVBQUssUUFBUSxNQUFHLENBQUM7QUFDaEQsQ0FBQztBQUVELE9BQU8sQ0FBQyxHQUFHLENBQUMsWUFBWSxDQUFDLE1BQU0sRUFBRSxLQUFLLENBQUMsQ0FBQyxDQUFDIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vdHlwZXNjcmlwdF9kZXBlbmRlbmNpZXMvLi9qcy9tYWluLnRzIl0sInNvdXJjZXNDb250ZW50IjpbImludGVyZmFjZSBUZWFjaGVyIHtcbiAgcmVhZG9ubHkgZmlyc3ROYW1lOiBzdHJpbmc7XG4gIHJlYWRvbmx5IGxhc3ROYW1lOiBzdHJpbmc7XG4gIGZ1bGxUaW1lRW1wbG95ZWU6IGJvb2xlYW47XG4gIHllYXJzT2ZFeHBlcmllbmNlPzogbnVtYmVyO1xuICBsb2NhdGlvbjogc3RyaW5nO1xuICBbYXV0cmVQcm9wcmlldGU6IHN0cmluZ106IGFueTtcbn1cblxuY29uc3QgdGVhY2hlcjogVGVhY2hlciA9IHtcbiAgZmlyc3ROYW1lOiAnSm9obicsXG4gIGxhc3ROYW1lOiAnRG9lJyxcbiAgZnVsbFRpbWVFbXBsb3llZTogZmFsc2UsXG4gIGxvY2F0aW9uOiAnTG9uZG9uJyxcbiAgY29udHJhY3Q6IGZhbHNlLFxufTtcblxuY29uc29sZS5sb2coJ1RlYWNoZXI6ICcsIHRlYWNoZXIpO1xuXG5pbnRlcmZhY2UgRGlyZWN0b3JzIGV4dGVuZHMgVGVhY2hlciB7XG4gIG51bWJlck9mUmVwb3J0czogbnVtYmVyO1xufVxuXG5jb25zdCBkaXJlY3RvcjogRGlyZWN0b3JzID0ge1xuICBmaXJzdE5hbWU6ICdBbGJ1cycsXG4gIGxhc3ROYW1lOiAnRHVtYmxlZG9yZScsXG4gIGZ1bGxUaW1lRW1wbG95ZWU6IHRydWUsXG4gIHllYXJzT2ZFeHBlcmllbmNlOiAxNSxcbiAgbG9jYXRpb246ICdQb3VkbGFyZCcsXG4gIG51bWJlck9mUmVwb3J0czogMTUsXG59O1xuXG5jb25zb2xlLmxvZygnRGlyZWN0b3I6ICcsIGRpcmVjdG9yKTtcblxuZnVuY3Rpb24gcHJpbnRUZWFjaGVyKGZpcnN0TmFtZTpzdHJpbmcsIGxhc3ROYW1lOnN0cmluZykge1xuICByZXR1cm4gYCR7Zmlyc3ROYW1lLmNoYXJBdCgwKX0uICR7bGFzdE5hbWV9JGA7XG59XG5cbmNvbnNvbGUubG9nKHByaW50VGVhY2hlcignSm9obicsICdEb2UnKSk7Il0sIm5hbWVzIjpbXSwic291cmNlUm9vdCI6IiJ9