function setNumber(num){
    var input = document.getElementById("number")
    var operators = ["+", "-", "*", "/" , "%"];
    var lastChar = input.value.slice(-1);
  if (operators.includes(lastChar) && operators.includes(num)) {
    return;
  }
    input.value += num
}

function result() {
    var inputValue = document.getElementById("number");
    try {
      var output = eval(inputValue.value);
      if (output === Infinity || output === -Infinity || isNaN(output)) {
        throw new Error("Error");
      }
      inputValue.value = output;
    } catch (err) {
      inputValue.value = "Error";
    }
  }
  


function clearScreen() {
    var inputValue = document.getElementById("number")
    inputValue.value = " ";
}

function delScreen(){
    var inputValue = document.getElementById("number")
    if (inputValue.value !== "Error") {
        inputValue.value = inputValue.value.slice(0,-1);
      }
}