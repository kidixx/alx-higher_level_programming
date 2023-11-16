#!/usr/bin/node
const findSecondLargest = (...args) => {
    if (args.length <= 1) {
        console.log(0);
        return;
    }

    const numbers = args.map(Number);
    numbers.sort((a, b) => b - a);

    console.log(numbers[1]);
};

// Example usage:
findSecondLargest(3, 1, 4, 6, 2);  // Output: 4
findSecondLargest(5);               // Output: 0
findSecondLargest();                // Output: 0	
