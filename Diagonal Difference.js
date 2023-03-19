// Given a square matrix, calculate the absolute difference between the sums of its diagonals.

// For example, the square matrix arr is shown below:

// 1 2 3
// 4 5 6
// 9 8 9  


function diagonalDifference(arr) {
    let left=0;
    let right=0;
    
    for(let i=0;i<arr.length;i++){
        left+=arr[i][i];
        right+=arr[i][arr.length-i-1];
    }
      let ans=Math.abs(left-right);
      return ans;
}
