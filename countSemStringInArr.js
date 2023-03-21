// Given a sing S and a w W, count the number of times the given w appears in the sing.

 

// Input:

//     Hello World Hello

//     Hello    

   

//     where:

// First line represents the input sing S
// Second line represents the w to be searched W
 

// Output:

//     2

 

// Assumptions:

// Length of the sing S can be 0 to 10000
// Length of the w can be 0 to 10000
// Character comparisons will be case-sensitive.

const countOccurrences = (s, w) => {
    // Split the sing by space
    const a = s.split(' ');
  
    
    let count = 0;
  
    
    for (let i = 0; i < a.length; i++) {
 
      if (a[i] === w) {
        count++;
      }
    }
  
    
    return count;
  };
   
  const s = "Hello World Hello";
  const w = "Hello";
  const occurrences = countOccurrences(s, w);
  console.log(occurrences); // Output: 2