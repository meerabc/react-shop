export const validateEmail = (email) => {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/;
    return emailRegex.test(email) && !email.includes('..');
  };
  
export const validatePassword = (password) => {
    const passwordRegex =
      /^(?=.*[A-Za-z])(?=.*\d)(?=.*[@$!%*?&^(){}[\]<>.,;:'"`~|\\])[A-Za-z\d@$!%*?&^(){}[\]<>.,;:'"`~|\\]{8,}$/;
    return passwordRegex.test(password);
  };
  
  export const validateFullName = (fullName) => {
    const fullNameRegex = /^[A-Za-z]{2,25}\s[A-Za-z]{2,25}$/;
    return fullNameRegex.test(fullName);
  };
  
  export const validateFullName1To3Words = (value) => {
    const words = value.trim().split(/\s+/); // Split by any whitespace
    if (words.length > 3) {
      return false; // More than 3 words, invalid
    }
  
    return words.every(word => /^[A-Za-z]{2,25}$/.test(word)); // Ensure each word is 2-25 characters and letters only
  };


