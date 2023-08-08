/* function cubeNumber(number){
    let result = number * number * number;
    console.log(result);
    return result;
}

cubeNumber("tarek"); */

// -----------------------------

/* function matchFinder(string1, string2) {
    // const string1 = 'John Doe'
    const existString = string1.includes(string2);
    console.log(existString);
    }

matchFinder('Peter Parker','Pet'); */

// -----------------------------

/* function sortMaker(arr) {
    for (let i = arr.length-1; i >= 0; i--){
        let element = arr[i];
        console.log(element);
        }
    }

const arr = [4, -2];
sortMaker(arr); */

// -----------------------------

function findAddress(obj) {
    // const properties = Object.keys(obj);
    const propertyValues = Object.values(obj);
    console.log(propertyValues);
}

const obj = {street: 10,society: 'Earth Perfect'};

findAddress(obj);