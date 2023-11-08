// Challenge one

function solution(name, surname, age) {
    // Get the first two letters of name and surname
    // Return the abbreviations and age in one string
  
    const firstNameAbbr = name.slice(0, 2);
    const lastNameAbbr = surname.slice(0, 2);
  
    return firstNameAbbr + lastNameAbbr + age;
};