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
var arr1=[];
var name4 = document.getElementById("test3").value;

var letter=name4.length;
if(letter>4)
alert("too much");

else  if(letter==3 ){
arr1.push(name4.charAt(0));
arr1.push(name4.charAt(1));
arr1.push(name4.charAt(2));
alert(arr1.join(" "));
}
else if(letter==2){
arr1.push(name4.charAt(0));
arr1.push(name4.charAt(1));
 arr1.push("$");
 alert(arr1);
}
 else if (letter==1)
 {
     name4=name4.toLowercae();
     alert(name4);
}





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

    
