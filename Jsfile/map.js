// const numbers = [1, 2, 3 ,4 ,5 ];
// const squares = numbers.map(square);
// const cubes = numbers.map(cube)


// console.log(cubes);

// function square(element){
//     return Math.pow(element, 2)
// }
// function cube(element){
//     return Math.pow(element, 3)
// }


// const students = ["maulana","niko","galang"];
// const studentsUpper = students.map(uppercase);
// const studentslower = students.map(lowercase);

// console.log(studentslower);

// function uppercase(element){
//     return element.toUpperCase()
// }

// function lowercase(element){
//     return element.toLowerCase()
// }

const date = ["2009-7-3", "2009-7-1","2036-7-17"];
const formattedDates = date.map(formatdates);

console.log(formattedDates);

function formatdates(element){
    const parts = element.split("-");
    return `${parts[1]}/${parts[2]}/${parts[0]}`;
}
