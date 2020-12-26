// Remember, we're gonna use strict mode in all scripts now!
'use strict';

/* 
// 59. Using Google, Stackoverflow, and MDN
const temperatures = [3, -2, -6, -1, `error`, 9, 13, 17, 15, 14, 9, 5];

const calcTempAmplitude = function (t1, t2) {
  const temps = t1.concat(t2);

  let max = temps[0];
  let min = temps[0];

  for (let i = 0; i < temps.length; i++) {
    const currTemp = temps[i];
    if (typeof currTemp !== `number`) continue;

    if (max < currTemp) max = currTemp;
    if (min > currTemp) min = currTemp;
  }
  return max - min;
};

const amplitude = calcTempAmplitude([3, 5, `23`, 1], [9, 0, 5]);
console.log(amplitude);


// 61.DEBUGGING W/ THE CONSOLE AND BREAKPOINTS
// 1)
const measureKelvin = function () {
  const measurement = {
    type: `temp`,
    unit: `celsius`,
    value: 10,
    // value: Number(prompt(`Degrees celsius:`)),
  };

  console.table(measurement);
  console.log(measurement.value);
  const kelvin = measurement.value + 273;
  return kelvin;
};

console.log(measureKelvin());

// 2.
const temperatures = [3, -2, -6, -1, `error`, 9, 13, 17, 15, 14, 9, 5];

const calcTempAmplitudeBug = function (t1, t2) {
  const temps = t1.concat(t2);

  let max = 0;
  let min = 0;

  for (let i = 0; i < temps.length; i++) {
    const currTemp = temps[i];
    if (typeof currTemp !== `number`) continue;

    // debugger; //put a breakpoint
    if (max < currTemp) max = currTemp;
    if (min > currTemp) min = currTemp;
  }

  console.log(max, min);
  return max - min;
};

const amplitude = calcTempAmplitudeBug([3, 5, 1], [9, 4, 5]);
console.log(amplitude);

// 62. Coding Challenge #1
const temp1 = [17, 21, 23];
const temp2 = [12, 5, -5, 0, 4];

const printForecast = function (arr) {
  let str = ``;
  for (let i = 0; i < arr.length; i++) {
    str += ` ... ${arr[i]} C in ${i + 1} days`;
  }
  str += ` ... `;
  console.log(str);
};

printForecast(temp1);
printForecast(temp2);
*/
