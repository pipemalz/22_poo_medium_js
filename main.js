const juan = {
    name: "Juanito",
    age: 18,
    approvedCourses : ['Curso1'],
    addCourse(course){
        console.log(this);
        console.log(`this.approvedCourses `, this.approvedCourses);
        this.approvedCourses.push(course);
    }
}
// //1
// console.log('Object.keys(): ', Object.keys(juan));
// //2
// console.log(`Object.getOwnPropertyNames(): `, Object.getOwnPropertyNames(juan));
// //3
// console.log(`Object.entries(): `, Object.entries(juan));
// //4
// console.log(`Object.getOwnPropertyDescriptors(): `, Object.getOwnPropertyDescriptors(juan))
// //5
// Object.defineProperty(juan, 'pruebaNASA', {
//     value: 'Extraterrestres',
//     writable: false,
//     enumerable: true,
//     configurable: true
// })
// //6

Object.defineProperty(juan, 'pruebaNasa', {
    value: 'Extraterrestres',
    writable: false,
    enumerable: false,
    configurable: false
})

Object.defineProperty(juan, 'navigator', {
    value: 'Chrome',
    writable: true, 
    enumerable: false, //Al estar anumerable en false, esta propiedad no se lista con Object.keys()
    configurable: true
})

Object.defineProperty(juan, 'editor', {
    value: 'VSCode',
    writable: false, //Al estar writable en false, no se le podra modificar el  valor a la propiedad
    enumerable: true,
    configurable: true
})

Object.defineProperty(juan, 'terminal', {
    value: 'WSL',
    writable: true,
    enumerable: true,
    configurable: false //Al estar configurable en false, no se podra eliminar la propiedad
})

Object.seal(juan); //Establece configurable en false para todas las propiedades del objeto juan

// Object.freeze(juan); //Establece writable en false para todas las propiedades del objeto juan

console.log(`Object.getOwnPropertyDescriptors(): `, Object.getOwnPropertyDescriptors(juan))