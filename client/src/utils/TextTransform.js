
class JWTService{
 
    static capitalizeWords(inputString){
    // Split the string into an array of words
    const words = inputString.split(' ');
    // Capitalize the first letter of each word
    const capitalizedWords = words.map(word => {
      // Check if the word is not empty
      if (word.length > 0) {
        return word.charAt(0).toUpperCase() + word.slice(1);
      } else {
        return word; // Keep empty words as they are
      }
    });
    // Join the capitalized words back into a string
    return capitalizedWords.join(' ');
    }

    //  Capitalize first Character
   static Cap1Char(str){
    if(str){
      return str.charAt(0).toUpperCase() + str.slice(1);
    } else{
      return str
    }
  }

}

export default JWTService;