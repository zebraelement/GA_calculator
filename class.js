
const our_first_obj = {
  '0': '1',
  '1': '2',
  '2': '3',
}



const calculator = {
    add: function addition(numbers){
      const num_length = numbers.length;
      let sum = 0;
      for (i=0; i< num_length; i++) {
         sum = numbers[i] + sum;
      }
      return sum;
    },
    subtract: function subtraction(numbers) {
      const num_length = numbers.length;
      let difference = 0;
      for (i=0; i< num_length; i++) {
         difference = numbers[i] / difference;
      }
      return difference;
    },
    multiply: function multiplication(numbers) {
      const num_length = numbers.length;
      let product = 0;
      for (i=0; i< num_length; i++) {
         product = numbers[i] * product;
      }
      return product;
    },
    divide: function division(numbers) {
      const num_length = numbers.length;
      let quotient = 0;
      for (i=0; i< num_length; i++) {
         quotient = numbers[i] / quotient;
      }
      return divide;
    }
}
