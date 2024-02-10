# Solution Codes

### Project - 1 (Color Changer)
```javascript
const buttons = document.querySelectorAll('.button')
const body = document.querySelector('body')

buttons.forEach(function(button){
    button.addEventListener('click', function(e){
        switch (e.target.id) {
            case 'grey':
                body.style.backgroundColor = e.target.id;
                break;
            case 'white':
                body.style.backgroundColor = e.target.id;
                break;
            case 'blue':
                body.style.backgroundColor = e.target.id;
                break;
            case 'yellow':
                body.style.backgroundColor = e.target.id;
                break;
            case 'purple':
                body.style.backgroundColor = e.target.id;
                break;
        
            default:
                break;
        }
    });

})
```

### Project - 2 (BMI Calculator)
```javascript 
const form = document.querySelector('form');
// this usecase will give you empty
// const height = parseInt(document.querySelector('#height').value)

form.addEventListener('submit', function (e) {
  e.preventDefault();

  const height = parseInt(document.querySelector('#height').value);
  const weight = parseInt(document.querySelector('#weight').value);
  const results = document.querySelector('#results');

  if (height === '' || height < 0 || isNaN(height)) {
    results.innerHTML = `Please give a valid height ${height}`;
  } else if (weight === '' || weight < 0 || isNaN(weight)) {
    results.innerHTML = `Please give a valid weight ${weight}`;
  } else {
    const bmi = (weight / ((height * height) / 10000)).toFixed(2);
    //show the result

    results.innerHTML = `<span>${bmi}</span>`;
    if (bmi < 18.6){
      results.innerHTML = `Your BMI is ${bmi}, You are underweight`
    }
    else if (bmi >= 18.6 && bmi <= 24.6){
      results.innerHTML = `Your BMI is ${bmi}, You are Normal weight`
    }
    else if (bmi > 24.6){
      results.innerHTML = `Your BMI is ${bmi}, You are Overweight`
  }
}
});
```

## Project - 3 (Digital Clock)
```javascript
const clock = document.getElementById('clock');
// const clock = document.querySelector('#clock')

setInterval(function () {
  let date = new Date();
  // console.log(date.toLocaleTimeString());
  clock.innerHTML = date.toLocaleTimeString();
}, 1000);
```