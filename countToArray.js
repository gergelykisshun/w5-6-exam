/* const countToArray = (firstNumber, lastNumber) => {
    let numbers = [];
    for (let i = firstNumber; i < lastNumber; i++)
        numbers.push(i.toString());
    return numbers;
}; */



/* 
const countToArray = (firstNumber, lastNumber) => {
    let toArray = Array(lastNumber - firstNumber);
    const fillArray = Array.from(toArray);
    const updateArray = fillArray.map((item, index) => `${firstNumber + index}`);
    return updateArray;
};
 */

const countToArray = (firstNumber, lastNumber) =>  Array.from(Array(lastNumber - firstNumber)).map((item, index) => `${firstNumber + index}`);


console.log(countToArray(10, 30));