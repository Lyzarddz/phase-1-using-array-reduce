const batteryBatches = [4, 5, 3, 4, 4, 6, 5];

// Code your solution here



const totalBatteries = batteryBatches.reduce(addTogether)

function addTogether(num, total){
    return num + total;
}
console.log(batteryBatches.reduce(addTogether));