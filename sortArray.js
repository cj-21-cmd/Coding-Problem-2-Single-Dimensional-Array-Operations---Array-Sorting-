function codingProblem2() {
    // Note:  Using literal arrays instead of prompt() for clarity and ease of testing.  For a submitted assignment, replace these with appropriate user input methods.
  
    const numbers = [24, 65, 21, 5, 9, 32, 42, 80, 57];
    const names = ["Zenvo", "Erica", "Jordie", "Alicia", "Redon"];
  
    // Merge arrays
    const mergedArray = numbers.concat(names);
    console.log("Merged array:", mergedArray);
  
    // Sort numbers in reverse order
    const sortedNumbersReverse = [...numbers].sort((a, b) => b - a); // Create a copy to avoid modifying the original
    console.log("Numbers sorted in reverse:", sortedNumbersReverse);
  
    // Sort names alphabetically
    const sortedNames = [...names].sort(); // Create a copy to avoid modifying the original
    console.log("Names sorted alphabetically:", sortedNames);
  }
  
  codingProblem2();