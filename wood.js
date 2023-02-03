/*
fixed : per item wood requirements

1. chair --> 3cft
1. table --> 10cft
1. bed --> 50cft

vary : quantity 
*/

function woodCalculator(chairQuantity, tableQuantity, bedQuantity) {
    const perChairWood = 3;
    const perTableWood = 10;
    const perBedWood = 50;

    const chairWood = chairQuantity * perChairWood;
    const tableWood = tableQuantity * perTableWood;
    const bedWood = bedQuantity * perBedWood;
    const totalWood = chairWood + tableWood + bedWood;
    console.log(chairQuantity, tableQuantity, bedQuantity)
    return totalWood;
  
}

const totalWood = woodCalculator(2, 2, 5);
console.log('total wood required',totalWood);