function count() {
  let input = document.getElementById("string1").value.toLowerCase();
  let test = "aeiou";
  let vowels = 0;
  let consonants = 0;

  for (let char of input) {
    if (test.includes(char)) {
      vowels++;
    } else if (/[a-z]/.test(char)) {
      consonants++;
    }
  }
  const vowelinput = document.getElementById("vowels");
  vowelinput.innerText = vowels;
  const constinput = document.getElementById("consonants");
  constinput.innerText = consonants;
}
