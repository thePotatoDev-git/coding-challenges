// Challenge 3

function solution(A, B) {
    // Make an empty variable 'result'
    // Make 'currentA' and 'currentB' with A and B as their values
    // Make a while loop while A or B are greater than 2
    // If A > B, add 'aa' to result and 'b' to result. Subtract 2 from currentA and 1 from currentB
    // If B > A, add 'bb' and 'a' to result.
    // If A is equal to B add 'ab' to result
    // Once currentA or currentB are <= 2, add the remaining 'a's and 'b's to the result
  
    let result = '';
    let currentA = A;
    let currentB = B;
  
  
    while (currentA > 2 || currentB > 2) {
      if (currentA > currentB) {
        result += 'aa';
        currentA -= 2;
        result += 'b';
        currentB -= 1;
      } else if (currentA < currentB) {
        result += 'bb';
        currentB -= 2;
        result += 'a';
        currentA -= 1;
      } else if (currentA === currentB) {
        result += 'ab';
        currentA--;
        currentB--;
      }
    }
  
    if (result[result.length - 1] === 'a') {
      result += 'b'.repeat(currentB);
      result += 'a'.repeat(currentA);
    } else {
      result += 'a'.repeat(currentA);
      result += 'b'.repeat(currentB);
    }
  
    return result;
  }