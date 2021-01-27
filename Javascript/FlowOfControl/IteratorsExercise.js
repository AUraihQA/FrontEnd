'use strict';

let a = 199;
while (a <= 200) {
  a++;
  console.log(`a = ${a}`);
}

let b = 199;
while (b <= 200) {
  if (b % 2 == 0) {
    console.log("-");
  } else {
    console.log("*");
  }
  b++;
}

for (let i = 0; i < 10; i++) {
    for (let j = 1; j <= 10; j++) {
      console.log(j);
    }
 }  

 let day = new Date().getDay();
switch (day) {
  case 0:
    console.log(`It's Sunday`);
    break;
  case 1:
    console.log(`It's Monday`);
    break;
  case 2:
    console.log(`It's Tuesday`);
    break;
  case 3:
    console.log(`It's Wednesday`);
    break;
  case 4:  
  console.log(`It's Thursday`);
  break;
  case 5:
    console.log(`It's Friday`);
    break;
  case 6:
    console.log(`It's a Saturday`);
    break;
}