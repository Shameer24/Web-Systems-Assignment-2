function check() {
  let num = document.getElementById("input").value;
  let numStr = num.toString();
  let result = numStr.split("").reverse().join("");
  let output = document.getElementById("result");
  if (numStr === result) {
    output.innerText = "It is a palindrome";
  } else {
    output.innerText = "It is not a palindrome";
  }
}
