function bubbleSort(arr) {
    const n = arr.length;

    for (let i = 0; i < n; i++) {
        for (let j = 0; j < n - i - 1; j++) {
            if (arr[j] > arr[j + 1]) {
                // Swap arr[j] and arr[j + 1]
                [arr[j], arr[j + 1]] = [arr[j + 1], arr[j]];
            }
        }
    }
}

// Input list of numbers
const numbers = [21, 400, 8, -3, 77, 99, -16, 55, 111, -36, 28];

// Sort the numbers in ascending order
bubbleSort(numbers);

// Print the sorted list
console.log(numbers);
