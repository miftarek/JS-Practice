function sortMaker(arr) {
    if (arr[0] < 0 || arr[1] < 0) {
        console.log('invalid input');
    } else if (arr[0] === arr[1]) {
        console.log('equal');
    } else {
        for (let i = arr.length-1; i >= 0; i--){
            let element = arr[i];
            console.log(element);
            }
    }
}

const arr = [6, 9];
sortMaker(arr);


