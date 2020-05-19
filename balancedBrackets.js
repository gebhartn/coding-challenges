// If the current character is an opening bracket, push to stack
// If the current character is a closing bracket:
// Pop the stack, compare if popped element is a closing bracket for that character
// if it is not, return NO
// otherwise, return yes once stack is empty

function isBalanced(s) {
  const arr = s.split("");
  const stack = [];

  const brackets = {
    "(": ")",
    "{": "}",
    "[": "]",
  };

  for (let i = 0; i < arr.length; i++) {
    let current = arr[i];
    if (current in brackets) {
      stack.push(brackets[current]);
      console.log(stack);
    } else {
      if (stack.pop() !== current) {
        return "NO";
      }
    }
  }
  // Can it be greater than 0 here? I don't think so
  return stack;
}

// console.log(isBalanced("{[()]}"));
// console.log(
//   isBalanced("()[{}()]([[][]()[[]]]{()})([]()){[]{}}{{}}{}(){([[{}([]{})]])}")
// );
console.log(isBalanced("{[||]}"));
