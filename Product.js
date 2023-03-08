// Display the product of array elements
// Tags:	Array
// Given an array of integers, write a program to display the product of array elements.

// Input:
//     6
//     1 2 3 4 5 6

// Output:720
// 
// Explanation: Product of elements in the array: 1*2*3*4*5*6 = 720.

 
//  method 1
function me(arr){
   let ans=1
    for(let i=0;i<=arr.length-1;i++){
        ans= ans*arr[i]
    }
  
    return ans

}
 console.log(me([1,2,3,4,5,6]))



//  method 2
 let count = (arr) => {
    let ans=1
    for(let i=0;i<=arr.length-1;i++){
        ans= ans*arr[i]
    }
  
    return ans

}
console.log(count([1,2,3,4,5,6]));