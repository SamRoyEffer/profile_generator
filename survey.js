const readline = require('readline');

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});
const filledAnswers = [];
rl.question('What is your name? ', (answer) => {
  console.log(`Thank you for your valuable feedback: ${answer}`);
  filledAnswers.push(answer)
  rl.question('2. What is an activity you like doing? ', (answer) => {
    filledAnswers.push(answer)
    console.log(`Thank you for your valuable feedback: ${answer}`);
    rl.question('3. What is your favorite music genre? ', (answer) => {
      filledAnswers.push(answer)
      console.log(`Thank you for your valuable feedback: ${answer}`);
      rl.question('4. What meal would you eat constantly? ', (answer) => {
        filledAnswers.push(answer)
        console.log(`Thank you for your valuable feedback: ${answer}`);
        rl.question('5. Which sport is your favorite? ', (answer) => {
          filledAnswers.push(answer)
          console.log(`Thank you for your valuable feedback: ${answer}`);
          rl.question('6. What average super power would you want? ', (answer) => {
            filledAnswers.push(answer)
            console.log(`Thank you for your valuable feedback: ${answer}`);
            rl.question('7. When would you like to time travel to? ', (answer) => {
              filledAnswers.push(answer)
              console.log(`Thank you for your valuable feedback: ${answer}`);
              console.log(filledAnswers)
              rl.close();
            });
            
          });
          
        });
        
      });
      
    });
    
    
  });
  
});




