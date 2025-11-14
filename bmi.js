
function calc(){
  let h = parseFloat(document.getElementById('h').value)/100;
  let w = parseFloat(document.getElementById('w').value);
  if(!h || !w){ alert('Enter values'); return; }
  let bmi = w/(h*h);
  document.getElementById('result').innerHTML = "BMI: "+bmi.toFixed(2);
}
