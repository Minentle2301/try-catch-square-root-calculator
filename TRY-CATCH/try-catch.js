//try statement for executing a code
try {
   if (Value < 0) {
     throw new Error(
       
     );
   }
 
   // Catch statement catching an error
 } catch (error) {
   console.log(error.message);
 }
 console.log("Please enter a valid number");
 
 // method to get the square root of any number entered
 function valueButton(e) {
   calculatorForm.screen.value += e.value;
 }
 function Calculate() {
   calculatorForm.screen.value = Math.sqrt(calculatorForm.screen.value);
 }
 
 // 
 const result = Calculate(Value);
 console.log(result);