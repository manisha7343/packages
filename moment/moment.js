const { log } = require("console");
const moment = require("moment")

//Current date-time
console.log(moment());



//formate YYYY-MM-DD
console.log(moment().format('YYYY-MM-DD'));

//formate hh:mm A
console.log(moment().format('hh:mm A'));

//Add subtract time
console.log( moment().add(5, 'days'));
console.log(moment().subtract(2, 'months'));


//Check before/after
console.log(moment('2026-04-10').isAfter('2026-04-01'));
console.log(moment('2026-04-01').isBefore('2026-04-10'));


// Relative time
console.log( moment('2026-04-20').fromNow());


//10 days after today
const future = moment().add(10, "days");
console.log(future.format('YYYY-MM-DD'));

//differbec between two dates
const d1 = moment('2026-04-01')
const d2 = moment('2026-04-28')
console.log(d2.diff(d1, 'days'));

//check thate date is in future or past
const date = moment('2026-05-01')
if(date.isAfter(moment())){
    console.log("future date");
    
}else{
    console.log("paste date");
    
}

//kitne din baki hai is date me 
const today = moment();
const target = moment('2026-05-10');

console.log(target.diff(today, 'days'), `days are left`);


//age calculator
const birth = moment('2007-03-28')
const Today = moment();
console.log(Today.diff(birth, 'years'), `years`);


// Deadline tracker 
const tasks = [
    { name:"Assignment", due: "2026-05-01"},
    { name: "project", deu: '2026-04-20'}
];

