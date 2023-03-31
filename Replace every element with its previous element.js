// Given an array of N elements, find all the unique pairs that can be formed using the elements of a given array.

 

// Input:

//     3

//     1 1 2

 

//     where:

// First line represents the number of elements in the array.
// Second line represents the elements in the array.
 

// Output:

//     4

 

// Explanation: (1, 1) (1, 2) (2, 1) and (2, 2) are all the unique pairs, their count is 4, hence the output 4.

 

 




function replaceWithPrevious(A) {
    const n = A.length;
    const result = [-1];
    
    for (let i = 1; i < n; i++) {
      result[i] = A[i-1];
    }
    
    return result;
  }
  
  // Example usage:
  const A = [1, 2, 3, 4];
  const result = replaceWithPrevious(A);
  console.log(result); // Output: [-1, 1, 2, 3]