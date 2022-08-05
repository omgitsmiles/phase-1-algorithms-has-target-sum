function hasTargetSum(array, target) {
  for(let i = 0; i <= array.length; i++) { //TC had -1 at array.length
   let complementaryNum =  target - array[i]
    console.log(complementaryNum)
    for (let j = i + 1; j <= array.length; j++) { // TC had -1 at array.length
      console.log(array[j])
      if (array[j] === complementaryNum) {
        return true
      }
    }
  }
return false
}

 // let j = array.length - 1 - i
// let sumArray = array[i] + array[j]
    // if (array.includes(complementaryNum)){
    //   return true
    //   } else {
    //     return false
    //   }
    // } 
/* 
  Write the Big O time complexity of your function here
  O(n2)
*/

/* 
  Add your pseudocode here
  write a for loop with length divided by 2
  use another variable to count from the end of array
  if the sum of each of the numbers === the target
  return true
*/

/*
  Add written explanation of your solution here
*/

// You can run `node index.js` to view these console logs
if (require.main === module) {
  // add your own custom tests in here
  console.log("Expecting: true");
  console.log("=>", hasTargetSum([3, 8, 12, 4, 11, 7], 10));

  console.log("");

  console.log("Expecting: true");
  console.log("=>", hasTargetSum([22, 19, 4, 6, 30], 25));

  console.log("");

  console.log("Expecting: false");
  console.log("=>", hasTargetSum([1, 2, 5], 4));
}

module.exports = hasTargetSum;
