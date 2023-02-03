const country = 'Bangladesh';
const age = 52;
const isIndependent = true;
const student = {id: 65, class: 14, name: 'Nayeem'};
const friends = [13, 14, 19, 23, 11, 14, 10, 9 ];
function add(num1,num2){
    return num1 + num2;
}

console.log(typeof country);
console.log(typeof age);
console.log(typeof isIndependent);
console.log(typeof student);
console.log(Array.isArray(friends));
console.log(typeof add);


console.log(friends.includes(19));
console.log(friends.includes(21));

if(friends.indexOf(19) !== -1 ){
     
}


// concat
const newFriendsAge = [11, 13, 18, 9];
const allFriends = newFriendsAge.concat(friends);
console.log(allFriends);
