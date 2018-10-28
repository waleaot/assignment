year = window.prompt("Input a Year : ");
leap_year = (year % 100 === 0) && (year % 400 === 0) && (year % 4 === 0);
console.log(leap_year);