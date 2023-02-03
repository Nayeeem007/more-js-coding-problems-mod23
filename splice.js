const friends = [12, 45, 95, 65, 69, 46, 89, 19];

// Removes elements from an array
//  and, if necessary, inserts new elements in their place, returning the deleted elements.
// will change the original array


const partial = friends.splice(2,5,32,59,9555);
console.log(partial);
console.log(friends);