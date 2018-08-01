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


// function func2 (){
//     var numInput= document.getElementById("idnum").value;

// var arr1=[1,2,2,4,5];

// var count=0;
// var i=0;

// while (i<arr1.length){

//     if(arr1[i]==numInput){
//     count++;
    
        
//     }
//     i++;
// }
 

//     alert(count);
    


// }

/*
//JQuery
$(document).ready(function(){
  $("#input1").mouseenter(function(){
      $("#input1").css("background-color","blue");
});
$("#input1").mouseleave(function(){
  $("#input1").css("background-color","yellow");

});
$("#input1").mousedown(function(){
  $("#input1").css("background-color","red");
});

});
*/

/*
$(document).ready(function(){
$("#b1").dblclick(function(){
  $("#div1").animate({
 width:'+=200px',
 height:'+=200px',
 opacity:'0.5',

*/
$(document).ready(function(){
$("#b1").click(function(){
  $("#div1").animate({
   
    left: '40%',
    opacity:'0.9'
    
 
  });
  $("#div1").animate({
   
    top: '40%',
    opacity:'0.7'
  
 
  });
  $("#div1").animate({
   
    left: '0%',
    opacity:'0.2'
  
 
  });
  $("#div1").animate({
   
    top: '0%',
    opacity:'0.1'
  
 
  });
});
});

/*
function func2() {
  document.getElementById("p1").style.color="red";
  document.getElementById("p1").innerHTML="hello";

}
function func1() {
    
    document.getElementById("p1").style.color="blue";
  
  }



*/

/*
var arr =[];
 arr=document.getElementById("inputarray").value;
var i=0;
for(i=0; i<arr.length; i++)
if(arr[i]>arr[i+1])
alert(arr[i]);

}
*/













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