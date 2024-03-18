function calculate() {
  let billAmount = document.getElementById("bill").value;
  let tip = document.getElementById("tip").value;
  let tipvalue = billAmount * (tip / 100);
  let result = Number(billAmount) + tipvalue;
  document.getElementById("result").innerText = result;
}
