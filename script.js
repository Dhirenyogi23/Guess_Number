let btn = document.getElementById("btn");
let output = document.getElementById("outputtext");

let number = Math.floor(Math.random() * 100);
console.log(number);

btn.addEventListener("click", function () {
  let input = document.getElementById("userinput").value;
 

  if (input == number) {
    let right = (output.innerHTML = `Congtatulation! You Guess right number. ${number}`);
    console.log(right);
  }
   else if (input < number) {
    let low = (output.innerHTML = `you guessed Low Number. Please Guess High Number`);
    console.log(low);
  }
   else if (input > number) {
    let high = (output.innerHTML = `you guessed High Number. Please Guess Low Number`);
    console.log(high);
  }

});
