// Given a string S1 and another string S2, find whether S1 can become empty by deleting S2 from S1 again and again. You are allowed to delete S2 from S1 any number of times.

//Input:
//     cocodede
//     code

//     where:
// First line represents string S1.
// Second line represents string S2.

// Output:

//     Yes

// Explanation:
// In the string S1= "cocodede", we can first delete the substring "code". S1 now becomes "code". We can again delete sub-string "code". Now the string S1 becomes empty.
 
function canBecomeEmpty(s1, s2) {
    while (s1.indexOf(s2) !== -1) {
        s1 = s1.replace(s2, "");
    }
    return s1 === "" ? "Yes" : "No";
}

// Example usage
const s1 = "cocodede";
const s2 = "code";
console.log(canBecomeEmpty(s1, s2));   // Output: Yes
