{

/*
    function func1 (){
   var arr=[];
   var sum=0;
arr[0] = document.getElementById("test").value;
arr[1] = document.getElementById("test1").value;
arr[2] = document.getElementById("test2").value;

sum=(parseInt(arr[0])+parseInt(arr[1])+parseInt(arr[2]));
document.getElementById("print").innerHTML=arr;
//document.getElementById("print2").innerHTML=sum;
document.getElementById("print2").innerHTML=sum/arr.length;

//alert(arr);
}
*/
function func2 (){
var arr1=['a','b'];
var arr2=['m','i','c','r'];
var arr3=['o','r','r','r','r'];
var arr4=['s','v','c','o','l','l','e','g','e'];

var checkmax=(funcmax(arr1,arr2,arr3,arr4));
var checkmin=(funcmin(arr1,arr2,arr3,arr4));

alert(checkmax);
alert (checkmin);


var letter1;
letter1=checkmax.slice(checkmax.length-checkmin.length);
checkmin.push(letter1);
alert(checkmin);

var i=checkmin.length-1;


while (i ){
    checkmax.pop();
    i--;
    
}

alert(checkmax);
}

function funcmax (arr1,arr2,arr3,arr4){
    var max;
    max=arr1;
    
    if(arr2.length>max.length){
    max=arr2;
    }
    if(arr3.lengt>max.length){
        max=arr3;
    }
    if(arr4.length>max.length){
        max=arr4;
    }
    return(max);
  

}
function funcmin (arr1,arr2,arr3,arr4){
    var min;
    min=arr1;
    
    if(arr2.length<min.length)
        min=arr2;
    
    if(arr3.length<min.length)
        min=arr3;
    
    if(arr4.length<min.length)
        min=arr4;
    
    return (min);
  

}
}



// var temp= arr1.slice(0,3);
// var temp1=arr2.concat(temp);

// alert(temp1);

// var firstl=arr2.shift();
// var lastL=arr2.pop();
// arr2.push(firstl);
// arr2.unshift(lastL);

// alert(arr2);









// function func1 (){
//     var arr=[];
//   //   var sum=0;
//  arr.push ( document.getElementById("test").value);
//  arr.push ( document.getElementById("test1").value);
//  arr.push (document.getElementById("test2").value);
 
//  //sum=(parseInt(arr[0])+parseInt(arr[1])+parseInt(arr[2]));
//  //document.getElementById("print").innerHTML=arr;
//  document.getElementById("print").innerHTML=arr.toString();
// }






    
