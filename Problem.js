function cubeNumber(number){
    if (typeof number !== 'number'){
        return 'Your Input Is Not Valid';
    }
    let result = number * number * number;
    return result;
    
}

cubeNumber('asdf');
// ----------------------------- Done

/* function matchFinder(string1, string2) {
    if (typeof string1 !== 'string' || typeof string2 !== 'string'){
        console.log('Please write strong input');
        return;
    }
    const existString = string1.includes(string2);
    console.log(existString);
    }

matchFinder('Peter Parker', 2); */

// ----------------------------- Done

/* function sortMaker(arr) {
    if (arr[0] < 0 || arr[1] < 0){
        console.log('invalid input');
    } else if( arr[0] === arr[1]){
        console.log('equal');
    } else {
        for (let i = arr.length-1; i >= 0; i--){
            let element = arr[i];
            console.log(element);
            }
    }
    }
const arr = [5, 4];
sortMaker(arr); */

// -----------------------------

/* function findAddress(obj) {
    // const properties = Object.keys(obj);
    const propertyStreet = obj.street || "__";
    const propertyHouse = obj.house || "__";
    const propertySociety = obj.society || "__";
    console.log(propertyStreet, propertyHouse, propertySociety);
}

const obj = {street:10,society:'Earth Perfect'};

findAddress(obj); */

// -----------------------------

/* function canPay(changeArray, totalDue) {
    if (typeof changeArray[0] !== typeof 0){
        return 'Your Input Is Not Correct';
    }
    let arrSum = 0;
    for (let i = 0; i < changeArray.length; i++){
        let element = changeArray[i];
        arrSum = arrSum + element;
    } 
    if (totalDue > arrSum){
        return true;
    } else
    return false;
}


const changeArray = [1, 2, 5];
const totalDue = 10;
console.log(canPay(changeArray, totalDue)); */


