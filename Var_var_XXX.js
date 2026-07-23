var name  = "Raviraj";

console.log(name);

// Scope of variable 

function nameAccess(){
name = "Ade";

console.log(name)

} 
nameAccess();
console.log(name);