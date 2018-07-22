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
var arr1=['s','v','c','o','l','l','e','g','e'];
var arr2=['m','i','c','r','o','s','o','f','t'];
var arr3=['a','b','c','d','e','f','g','i','j'];



var temp= arr1.slice(0,3);
var temp1=arr2.concat(temp);

alert(temp1);

var firstl=arr2.shift();
var lastL=arr2.pop();
arr2.push(firstl);
arr2.unshift(lastL);

alert(arr2);





}



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




}

    
