// Given a string s containing just the characters '(', ')', '{', '}', '[' and ']', determine if the input string is valid.

// An input string is valid if:

// Open brackets must be closed by the same type of brackets.
// Open brackets must be closed in the correct order.
// Every close bracket has a corresponding open bracket of the same type.


// Example 1:

// Input: s = "()"
// Output: true
// Example 2:

// Input: s = "()[]{}"
// Output: true
// Example 3:

// Input: s = "(]"
// Output: false






var isValid = function (s) {

    let st = [];
    for (let i = 0; i < s.length; i++) {
        let top = st[st.length - 1];
        if (s[i] == "(" || s[i] == "{" || s[i] == "[") {
            st.push(s[i]);
        }
        else if (s[i] == ')' && top == "(" || s[i] == '}' && top == "{" || s[i] == ']' && top == "[") {
            st.pop()
        } else return false;
    }
    if (st.length == 0) {
        return true;
    }
    if (st.length != 0) {
        return false;
    }
};
console.log(isValid("()[]{}"))