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
function fun1(){
var input=document.getElementById("input1").value;
$(document).ready(function(){

 
    if(input==1){
      $("#div1").fadeOut();
      
    }
else if(input==2){
  $("#div2").fadeOut(5000);
}
else if(input==3){
  $("#div3").fadeOut("slow");
}
else
{
  $("#div1").fadeOut();
  $("#div2").fadeOut();
  $("#div3").fadeOut();
}


});
}
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