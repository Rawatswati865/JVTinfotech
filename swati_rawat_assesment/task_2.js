// to run this file, write in terminal ---> node task_2.js

var array = [1, 2, 3, 4, 5, 6, 7, 8, 9, 9, 8, 6, 5, 12, 3, 12, 2, 3, 3, 4, 4]

var outputArray = [];

var count = 0;

var start = false;

for (j = 0; j < array.length; j++) {
    for (k = 0; k < outputArray.length; k++) {
        if (array[j] == outputArray[k]) {
            start = true;
        }
    }
    count++;
    if (count == 1 && start == false) {
        outputArray.push(array[j]);
    }
    start = false;
    count = 0;
}

console.log(outputArray);
