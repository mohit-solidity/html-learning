const names = ['Mohit','Rohit','Ritika','Gourav','Ankit','Ayush','Jatin']

console.log(names)


// Accessing Array Elements
console.log(names[1]);
console.log(names[2])
console.log(names[0])

//Adding Elements
names.push('Keshav')
console.log(names)

//POP
names.pop();
console.log(names)

//Update Elements
// Index 0
names[0] = 'Rahul'
console.log(names)

//Iterating Array
for(let i=0; i<names.length;i++){
    console.log(names[i])
}


// Basic array methods
console.log("Number of Students:", names.length);
console.log("Has Student Named Gourav:", names.includes("Gourav"));