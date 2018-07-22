{

//fing max string anf find space and print string lentgh

    function func1 (){
   
var name = document.getElementById("test").value;
var name1 = document.getElementById("test1").value;
var name2 = document.getElementById("test2").value;
var max;

max=name;

if(name1.length>max.length){
    max=name1;
}
 if(name2.length>max.length){
max=name2;


}

if(max.indexOf(' ') != -1){
    alert("space");

    }

alert(max);
alert(max.length);


}
//change string[0] to UPPERCASE
function func2(){

    var name = document.getElementById("test").value;
    var name1 = document.getElementById("test1").value;
    var name2 = document.getElementById("test2").value;

    name=name.replace(name.charAt(0),name.charAt(0).toUpperCase());
    name1=name1.replace(name1.charAt(0),name1.charAt(0).toUpperCase());
    name2=name2.replace(name2.charAt(0),name2.charAt(0).toUpperCase());

    document.getElementById("test").value= name;
    document.getElementById("test1").value= name1;
    document.getElementById("test2").value= name2;

}
}

    
