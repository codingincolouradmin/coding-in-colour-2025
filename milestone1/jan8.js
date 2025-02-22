/**
 * IsUnique algorithm
 */
function isUnique(arr) {
  for (let i = 0; i < arr.length; i++) {
    for (let j = i + 1; j < arr.length; j++) {
      if (arr[i] === arr[j]) {
        return false
      }
    }
  }
  return true;
}

/**
 * CheckPermutation algorithm: Runtime cost of O(nlogn), Space cost of O(n)
 * "apple"  "elapp" -> "aelpp" 0 1 2 3 4
 */
function isPermutation(a, b) {
  // Sort both arrays
  const arrayA = Array.from(a).sort()
  const arrayB = Array.from(b).sort()
  // Check length same
  if (arrayA.length !== arrayB.length) {
    return false;
  }
  // Check the values
  for (let i = 0; i < a.length; i++) {
    // Why am I doing this?
    if (arrayA[i] !== arrayB[i]) {
      return false;
    }
  }
  return true;
}


/**
 * Check Permutation using Array
 */

function checkPermutationAlt(a, b) {
  // Check the lengths
  if (a.length !== b.length) {
    return false;
  }
  // Create a count array
  let countArray = new Array(256).fill(0)
  // Increment appropriately
  for (let i = 0; i < a.length; i++) {
    const iIndex = a.charCodeAt(i)
    countArray[iIndex]+= 1;
    const jIndex = b.charCodeAt(i)
    countArray[jIndex]-= 1;
  }
  // Confirm they are permutations
  for (let k = 0; k < countArray.length; k++) {
    if (countArray[k] !== 0) {
      return false;
    }
  }
  return true;
}

console.log(checkPermutationAlt("apple", "eppla"))
console.log(checkPermutationAlt("eidboaoo", "ooabideo"))
console.log(checkPermutationAlt("apple", "banana"))
console.log(checkPermutationAlt("radio", "redio"))
