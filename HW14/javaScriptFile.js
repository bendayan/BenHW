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

function func1() {
  var mydivImg= document.getElementById("divPic").style.visibility="visible";
  document.getElementById("idpic2").src="apple1.png";
   // document.getElementById("p1").style.color="blue";
  
  }

function func2() {
  var TextColor=document.getElementById("IdColorInput").value;
  var coloframe=document.getElementById("divPic").style.color=TextColor;
  //  document.getElementById("p1").style.color="red";
  //  document.getElementById("idpic2").src="apple1.png";
  
  }

    function func3() {
    //  -------------change size pic----------
      var img= document.getElementById("idpic2");
      var w=img.clientWidth;
      w=parseInt(w)+50;
      document.getElementById("idpic2").style.width=w;

    }

    function func3minus() {
      //  -------------change size pic----------
        var img= document.getElementById("idpic2");
        var w=img.clientWidth;
        w=parseInt(w)-50;
        document.getElementById("idpic2").style.width=w;
  
      }
      

    function funcmovedown() {
    //  ---------move pic----------------
         var img= document.getElementById("idpic2");
         var position=img.getBoundingClientRect();
         var top=position.top;
      
      document.getElementById("idpic2").style.top=parseInt(top)-100+"px";
    }
    function funcmoveup1() {
      //  ---------move pic----------------
           var img= document.getElementById("idpic2");
           var position=img.getBoundingClientRect();
           var top1=(parseInt(position.top)+40);
        
        document.getElementById("idpic2").style.top=-top1;
      }
      function funcmoveleft1() {
        //  ---------move pic----------------
             var img= document.getElementById("idpic2");
             var position=img.getBoundingClientRect();
             var top1=(parseInt(position.left)+10);
          
          document.getElementById("idpic2").style.left=-top1;
        }
        function funcmoveright1() {
          //  ---------move pic----------------
               var img= document.getElementById("idpic2");
               var position=img.getBoundingClientRect();
               var top1=(parseInt(position.left)+10);
            
            document.getElementById("idpic2").style.left=top1;
          }
  

  //var myImg= document.getElementById("idpic2").value;
   //   var buttonwith= document.getElementById("Bwithplus").value;
   //  while(buttonwith)

   
  
  function func4() {
    var myImg= document.getElementById("idpic2").style.width="400px";
//var myImg= document.getElementById("idpic2").value;
 //   var buttonwith= document.getElementById("Bwithminus").value;
 //  while(buttonwith)
 
}
function ViewControlsfunc(){
  var divControls= document.getElementById("buttonMoveWithPic").style.visibility="visible";
}
      
function selectedImage() {

  var selectBox = document.getElementById("selectb");

  var selectedValue = selectb.options[selectb.selectedIndex].value;

  switch(selectedValue){
      case "img1":document.getElementById("idpic2").src="apple1.png";
      break;

      case "img2":document.getElementById("idpic2").src="linux1.png";
      break;

      case "img3":document.getElementById("idpic2").src="space.jpg";
      break;
      case "img4":document.getElementById("idpic2").src="android1.png";
      break;
 
      default:document.getElementById("idpic2").src="apple1.png";
      break;

  }
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