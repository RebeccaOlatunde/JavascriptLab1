
let name = "rebecca";
let age = 33;
let birthday = "January 24";
let detroitGC = true;
let lifeEvents = [
"I was born in Nigeria", 
"I moved to the United States",
"I went to law school",
"I kind of like coding"
];
 if(detroitGC){
    console.log(`My name is ${name} and I am a student at Grandcircus in Detroit, Michigan. I am currently ${age} years old and my birthday is on ${birthday}`);

 } else {
    console.log(`My name is ${name} and I am a student at Grandcircus in Grandrapids, Michigan. I am currently ${age} years old and my birthday is on ${brithday}`);

}
for (i = 0; i < lifeEvents.length; i++) {
    console.log(lifeEvents[i]);
}


let counter = 0;
let randomNumber = 0;

while (randomNumber !== 5) {
  randomNumber = Math.floor(Math.random() * 10 + 1);
  if (randomNumber !== 5) {
    counter++;
    console.log(`${randomNumber} does not equal 5`);
  } else {
    counter++;
    console.log(
      `${randomNumber} === 5. it took ${counter} iterations to randomly generate the number 5`
    );
  }
}

let hours = prompt("please type the number of hours your worked");
let wage = prompt("Enter the number for your hourly wage without the dollar sign");
let totalPaycheck;

if (hours <= 40) {
let paycheck=hours * wage;
  console.log(paycheck);
} else {
  let overtime = (hours - 40)*(wage * 1.5);
  let paycheck = 40 * wage + overtime;
  let weeks = math.ceil(1000000 / Paycheck);
   console.log('with wage=${wage} and hours = ${hours} it would take ${weeks} 
