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

$(document).ready(function(){
  $("#b1").click(function(){
      $("#div1").load("txt1.txt");
    
      });

      $("#b2").click(function(){
  var inp=document.getElementById("input1").value;
var divv=document.getElementById("div1").innerHTML;
if(divv.indexOf(inp) != -1)
{
  document.getElementById("div2").innerHTML="found"+divv.indexOf(inp);

}
else
{
  document.getElementById("div2").innerHTML="Not found";

}
$("#div2").slideDown();
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