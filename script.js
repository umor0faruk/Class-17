
var calculate = document.querySelector('.calculate');
calculate.addEventListener('click', function () {
  var height_ft = +document.querySelector('#height_ft').value;
  var height_in = +document.querySelector('#height_in').value;
  var height = parseFloat(height_ft * 12) + parseFloat(height_in);
  var weight = +document.querySelector('#weight').value;
  // check height & weight are a valid number
  if (height_ft <= 0 || height_in <= 0 || weight <= 0 || isNaN(height_ft) || isNaN(height_in) || isNaN(weight)) {
    alert('Please fill all fields with valid numbers');
    return;
  }
  // convert height to meters
  height = height * 0.0254;
  var bmi = weight / (height * height);
  showResult(bmi);
});
function showResult(bmi) {
  var result = document.querySelector('.result');
  var bmiStatus;
  if (bmi < 18.5) {
    bmiStatus = 'Underweight';
  } else if (bmi < 25) {
    bmiStatus = 'Normal';
  } else if (bmi < 30) {
    bmiStatus = 'Overweight';
  } else {
    bmiStatus = 'Obese';
  }
  result.innerHTML = `<div class=${bmiStatus}>Your BMI is ${bmi.toFixed(2)} and you are ${bmiStatus}.</div>`;
}