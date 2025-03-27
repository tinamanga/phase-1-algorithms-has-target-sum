function hasTargetSum(arr, target) {
  // Write your algorithm here
  const seen = new Set(); // This will store the numbers we've encountered so far
    
    for (let num of arr) {
        const complement = target - num; // Find the complement that would add up to the target
        
        if (seen.has(complement)) {  // Check if we've already seen the complement
            return true;  // If we have, return true because we found a pair
        }
        
        seen.add(num); // Otherwise, add the current number to the set
    }
    
    return false;  // If we fini
}

/* 
  Write the Big O time complexity of your function here
*/

/* 
  Add your pseudocode here
console.log(hasTargetSum([3, 8, 12, 4, 11, 7], 10)); // true (3 + 7 = 10)
console.log(hasTargetSum([22, 19, 4, 6, 30], 25));  // true (19 + 6 = 25)
console.log(hasTargetSum([1, 2, 5], 4));            // false (no pair sums to 4)
console.log(hasTargetSum([1, 3, 5, 7], 8));         // true (3 + 5 = 8)
console.log(hasTargetSum([1, 1, 1, 1], 2));         // true (1 + 1 = 2)

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
