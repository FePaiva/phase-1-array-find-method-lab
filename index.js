// Write a function called superbowlWin() in index.js:

// The function should receive 1 argument, an Array of JavaScript Objects
// Each object has two properties: year and result
// It should use find() to test each Object to see if the result is "W" — a win!
// It should return the year when the win occurred (if it occurred at all!)
// If no win is found, it should return, sadly, undefined


// function superbowlWin(element) {
//     return element.year === 'W'
// }

function superbowlWin(record) {
    let yearWin = record.find(record => record.result === 'W')
    return yearWin ? yearWin.year : undefined
}  
//     yearWin.year 
//     let winYear = record.find(result => result === 'W');
// }
// superbowlWin(record)

// function superbowlWin(array){
//     const newObj = array.find(array => array.result === 'W')
//     return !!newObj ? newObj.year : undefined
// }