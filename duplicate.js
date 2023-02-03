const names = ['Nayeem', 'Momen', 'Sakib', 'Tofael', 'Azaz', 'Miraj', 'Nayeem', 'Nayeem', 'Tofael', 'Nayeem', 'Sakib', 'Momen', 'Nayeem', 'Momen'];

function removeDuplicate(names) {
    const unique = [];
    for (let i = 0; i < names.length; i++) {
        const name = names[i];
        if(unique.includes(name) === false){
            unique.push(name);
        }
     }
     return unique;
}


const uniqueNames = removeDuplicate(names);
console.log(removeDuplicate);   