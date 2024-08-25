function solution(roman) {
    const romanNumerals = {
      'I': 1,
      'V': 5,
      'X': 10,
      'L': 50,
      'C': 100,
      'D': 500,
      'M': 1000
    };
  
    let total = 0;
    let previousValue = 0;
  
    for (let element = roman.length - 1; element >= 0; element--) {
      const currentValue = romanNumerals[roman[element]];
      total += (currentValue < previousValue) ? -currentValue : currentValue;
      previousValue = currentValue;
    }
  
    return total;
  }
  