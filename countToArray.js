const countToArray = (firstNumber, lastNumber) => {
    let numbers = [];
    for (let i = firstNumber; i < lastNumber; i++)
        numbers.push(i.toString());
    return numbers;
};

console.log(countToArray(10, 30));