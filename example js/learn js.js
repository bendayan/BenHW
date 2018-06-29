

/*var age = 80;
//console.log(age);

var name = 'benchu' ;
console.log(name + age);

var lastName= prompt('what are your last name?');
console.log(lastName);




var birhtday = 2018 - 25;

console.log(birhtday);
*/




/*
var age =26;
var name='ben';
var ismarried='yes';

if(ismarried==='yes'){
    console.log(name +' is marry!');
}else
console.log(name + ' is no married hope fully soon');
*/





/*
var age =21;

if(age<20){
    console.log('teenagers');
}else if(age > 20 && age <30){
console.log('young man') ;  
}else{
console.log('man');
}


*/





/*

//var job ='driver';
job=prompt ('what does ben do ?');
switch(job){
    case 'teacher':
    console.log('ben is teacher');
    break;

    case 'driver':
    console.log('ben is driver');
    break;

    default:
    console.log('ben does somethiong else');
}

*/


/*
function calculateage(Year){
    var Age= 2018-Year;
    return Age;
}

var AgeBen=calculateage(1993);
console.log(AgeBen);


function yearuntil(name,year){
    var age= calculateage(year);
    var retirement=65-age;
    console.log(retirement);

}

yearuntil('ben',1993);



*/

/*
var names =['ben','or','moshe'];

console.log(names);
console.log(names[1]);
 names [1]='dor';
 console.log(names);
 console.log(names[1]);


 var color =['yellow','green',500,'red'];
 color.push('blue'); // push in end array

 console.log(color);
 console.log(color[2]);

 color.unshift('mr.'); // push in array[o]
 color.pop(); //remove 'blue' end array
 color.shift(); // return array of start   var color =['yellow','green',500,'red'];

  console.log(color);

 alert (color.indexOf('green')); // indexof run of array anf find 'green' and print location in array

 if(color.indexOf('yellow')=== -1){ //run of array and check if have 
     console.log('dont have this color');

 }else
 console.log('have a this color');
 alert (color.indexOf('yellow'));

 var ben ={

    name : 'ben',
    lastName: 'dayan',
    Age: 24

 };

 console.log(ben);
console.log(ben.lastName); //print vars in object  same same 
console.log(ben['lastName']); //print vars in object same same 

var gil = new Object();

gil.name = 'gill' ;
gil.lastName ='bbb';
gil['Age'] = 1996;
console.log (gil);
 
*/
//*******for loops */  
/*
for(var i =0; i<10; i++)
console.log(i);

var names = ['jon','ben','dor','eli','or'];

for(var i =0; i<names.length; i++){
    console.log(names[i]);
}

for(var i = names.length-1; i>=0; i--)
{
console.log(names[i]);
}
*/
/*
// while loops
var names = ['jon','ben','dor','eli','or'];
var i=0 ; 
while (i<names.length){
    console.log(names[i]);
    i++;
}
*/


function printfullage(years){

var age=[];
var fullAge=[];
for(var i=0; i<years.length; i++){
    age[i]=2018-years[i];
}


for(i=0; i<age.length; i++){
    if(age[i]>=18){
        console.log('person  '+( i + 1) + ' is ' + age[i] + ' years old,and is full age');
        fullAge.push(true);
    }
        else{
        console.log('person '+ (i + 1) + ' is ' + age[i] + ' and is not full age');
        fullAge.push(false);
        }
    }
    return fullAge;
}
var years= [2001,1995,1994,2014,1973];
var full1= printfullage(years);
var full2= printfullage([2012,1915,1999]);

/*
var a = 'hello';
first();

function first(){
    var b = 'hi';
    second();

    function second(){
        var c ='hey';
       third();
       function third() {
        var d = 'ben';
        console.log( a + b + c + d );
        //outpot =hellohiheyben
}
}

}
*/