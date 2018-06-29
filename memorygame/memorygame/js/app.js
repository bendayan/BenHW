
var elprevcard=null;
var couplescount=2;
var flipedcoupleCount=0;

var audioWin= new Audio ('sound/win.mp3');
var audioRight= new Audio ('sound/right.mp3');
var audioWorng= new Audio ('sound/wrong.mp3');
var myVar = setInterval(myTimer ,1000);
function myTimer() {
  var d = new Date();
  document.getElementById("demo").innerHTML = d.toLocaleTimeString();

}
function cardClicked(elcard){
    if(elcard.classList.contains('fliped'))
        return;
    
  elcard.classList.add('fliped');
  

}

if(elprevcard === null){
    console.log('first card');
    elprevcard=elcard;
}else{
console.log('second card');
vcard.getAttribute('data-card');
var card2=elcard.getAttribute('data-card');
console.log(card1,card2);

if(card1===card2){
    console.log('Right!');
    audioRight.play();
    flipedcoupleCount++;
    
    setTimeout(function(){
    
    if(flipedcoupleCount ===couplescount ){
     
        alert("Victory!, " + localStorage.getItem("first_name"));
    
        audioWin.play();
     
    }
},2000);
    elprevcard=null;

}else{
    console.log('wrong!');
    audioWorng.play();

    setTimeout(function(){
    elprevcard.classList.remove('fliped');
    elcard.classList.remove('fliped');
    elprevcard=null;
    },1000);
      }

   }
   if(localStorage){
	$(document).ready(function(){
		$(".save").click(function(){
			// Get input name
			var firstName = $("#firstName").val();
			
			// Store data
    		localStorage.setItem("first_name", firstName);
			alert("Your first name is saved.");
		});
		$(".access").click(function(){
			// Retrieve data
    		alert("Hi, " + localStorage.getItem("first_name"));
		});
	});
} else{
    alert("Sorry, your browser do not support local storage.");
}

var age = 20;
console.log(age);




   

