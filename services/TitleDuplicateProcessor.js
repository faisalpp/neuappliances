

function TitleDuplicateProcessor(inputString) {
    // Define a regular expression pattern to match "(duplicate X)"
    var regex = /\(duplicate (\d+)\)/;
    
    // Check if the input string contains the pattern
    var match = inputString.match(regex);
    
    if (match) {
      // If the pattern is found, extract the number and increment it by 1
      var currentNumber = parseInt(match[1]);
      var newNumber = currentNumber + 1;
    
      // Update the string with the new duplicate number
      var updatedString = inputString.replace(regex, "(duplicate " + newNumber + ")");
      return updatedString;
    } else {
      // If the pattern is not found, add a new "(duplicate 1)" string
      return inputString + " (duplicate 1)";
    }
}

module.exports = TitleDuplicateProcessor
