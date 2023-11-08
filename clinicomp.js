// Question one

function solution(name, surname, age) {
  // Get the first two letters of name and surname
  // Return the abbreviations and age in one string

  const firstNameAbbr = name.slice(0, 2);
  const lastNameAbbr = surname.slice(0, 2);

  return firstNameAbbr + lastNameAbbr + age;
};

// Question two (SQL)

SELECT name, -- Get entries by name
    SUM(CASE WHEN money > 0 -- If value is > 0
        THEN money -- Then add that value
        ELSE 0 -- Else add 0
        END) AS sum_of_deposits, -- Put sum into sum_of_deposits column
    SUM(CASE WHEN money < 0 -- If value is < 0
        THEN ABS(money) -- Add the absolute value
        ELSE 0 -- Else add 0
        END) AS sum_of_withdrawals -- Put sum of values into sum_of_withdrawals
FROM transfers -- From transfers table
GROUP BY name
ORDER BY name;

// Question three
// *Incomplete*

function solution(A, B) {
    // Make an empty variable 'result'
    // Make 'currentA' and 'currentB' with A and B as their values
    // Find the difference between A and B
    // Make a while loop while A or B are greater than 0
    // If the difference is >= 2 and A > B, add 'aa' to result and 'b' to result. Subtract 2 from currentA and 1 from currentB
    // If difference is >= 2 and B > A, add 'bb' and 'a' to result.
    // If the difference is 0, add 'a' and 'b' to result
    // 
  
    let result = '';
    let currentA = A;
    let currentB = B;
    let difference = Math.abs(A - B);
  
    while (currentA > 0 || currentB > 0) {
      if (difference >= 2 && A > B) {
        if (currentA === 1) {
          result += 'a'
          currentA--;
        } else {
          result += 'aa';
          currentA -= 2;
          result += 'b';
          currentB -= 1;
        }
      } else if (difference >= 2 && B > A) {
        if (currentB === 1) {
          result += 'b';
          currentB--;
        } else {
          result += 'a';
          currentA -= 1;
          result += 'bb';
          currentB -= 2;
        }
      } else if (difference === 0) {
        result += 'a';
        currentA--;
        result += 'b';
        currentB--;
      } 
    }
  
    return result;
}