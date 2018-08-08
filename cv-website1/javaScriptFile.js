{



   
        function func1 (){
   
            var UserName = document.getElementById("userN").value;
            
            var FullN= document.getElementById("idFname").value;

            var Password1= document.getElementById("idPass").value;

            var confirm= document.getElementById("idConfPass").value;

            var Email= document.getElementById("idemail").value;


            var checkfunckuser= (fcheckname (UserName));
            var checkfuncname=(FuncFName(FullN));
            var checkfuncPass =(funcPass(Password1));
            var checkconfirm = (funcconfirm(confirm));
            var checkEMail=(funcchekEmail(Email));
        if( checkfunckuser.length  !=0)
       //  alert(checkfunckuser);
      document.getElementById("spanuserN").innerHTML= checkfunckuser ;

      if(checkfuncname.length !=0)
      alert(checkfuncname);
     // document.getElementById("idspanFname").innerHTML= checkfuncname ;
        
     if(checkfuncPass !=0)
     alert(checkfuncPass);

     if(confirm !=Password1)
     alert ("pass not match");

     if(checkEMail !=0)
     alert (checkEMail);

     if ((checkfuncname.length ==0) && (checkfuncPass ==0) && (confirm ==Password1) && (funcchekEmail ==0) )
     document.getElementById("divdetails").innerHTML= (UserName + " " + FullN +" "+ Password1+" " + Email );
    // document.getElementById("divdetails").innerHTML= FullN ;
    // document.getElementById("divdetails").innerHTML= Password1 ;
    // document.getElementById("divdetails").innerHTML= Email ;
     

            
        }
            
            
            
            function fcheckname (UserName){
              
             if(UserName.length==0)
    
            return "empty";

            if(UserName.charAt(0) >=0 && UserName.charAt(0) <=9)
            return "Must first letter";
           

              if (!(UserName.charAt(0)>='a' && UserName.charAt(0)<= 'z' || UserName.charAt(0)>= 'A' && UserName.charAt(0)<= 'Z'))
              return "only first letter ";
           
              if(UserName.length <=3)
              return "at four letters" ;

              if (UserName.indexOf(' ') != -1)
              return "not space";
             return "details";
        





    
}

    function FuncFName (FullN){

    if(FullN.length ==0)

    return "empty";
    if (!(FullN.indexOf(' ') != -1))

        return "must two word" ;
        return  "details1";



}

function funcPass (Password1){

if(Password1.length == 0)
return "empty";

if(!(Password1.length >=8 && Password1.length <=12))
return "Must be between 8 and 12 characters";

if ((Password1.indexOf(0) >=0 && Password1.indexOf(0)<=9 ) || (Password1.indexOf(0) >='a' && Password1.indexOf(0)<='z' )
 ||  (Password1.indexOf(0) >='A' && Password1.indexOf(0)<='A' ))
return 1;

if ((Password1.indexOf(1) >=0 && Password1.indexOf(1)<=9 ) || (Password1.indexOf(0) >='a' && Password1.indexOf(0)<='z' ) 
||  (Password1.indexOf(0) >='A' && Password1.indexOf(0)<='A' ))
return 1;

if ((Password1.indexOf(2) >=0 && Password1.indexOf(2)<=9 ) || (Password1.indexOf(0) >='a' && Password1.indexOf(0)<='z' ) 
||  (Password1.indexOf(0) >='A' && Password1.indexOf(0)<='A' ))
return 1;

if ((Password1.indexOf(3) >=0 && Password1.indexOf(3)<=9 ) || (Password1.indexOf(0) >='a' && Password1.indexOf(0)<='z' ) 
||  (Password1.indexOf(0) >='A' && Password1.indexOf(0)<='A' ))
return 1;

if ((Password1.indexOf(4) >=0 && Password1.indexOf(4)<=9 ) || (Password1.indexOf(0) >='a' && Password1.indexOf(0)<='z' ) 
||  (Password1.indexOf(0) >='A' && Password1.indexOf(0)<='A' ))
return 1;
if ((Password1.indexOf(5) >=0 && Password1.indexOf(5)<=9 ) || (Password1.indexOf(0) >='a' && Password1.indexOf(0)<='z' ) 
||  (Password1.indexOf(0) >='A' && Password1.indexOf(0)<='A' ))
return 1;

if ((Password1.indexOf(6) >=0 && Password1.indexOf(6)<=9 ) || (Password1.indexOf(0) >='a' && Password1.indexOf(0)<='z' ) 
||  (Password1.indexOf(0) >='A' && Password1.indexOf(0)<='A' ))
return 1;
if ((Password1.indexOf(7) >=0 && Password1.indexOf(7)<=9 ) || (Password1.indexOf(0) >='a' && Password1.indexOf(0)<='z' ) 
||  (Password1.indexOf(0) >='A' && Password1.indexOf(0)<='A' ))
return 1;
if(Password1.length == 9)
if ((Password1.indexOf(8) >=0 && Password1.indexOf(8)<=9 ) || (Password1.indexOf(0) >='a' && Password1.indexOf(0)<='z' )
||  (Password1.indexOf(0) >='A' && Password1.indexOf(0)<='A' ))
return 1;
if(Password1.length == 10)
if ((Password1.indexOf(9) >=0 && Password1.indexOf(9)<=9 ) || (Password1.indexOf(0) >='a' && Password1.indexOf(0)<='z' ) 
||  (Password1.indexOf(0) >='A' && Password1.indexOf(0)<='A' ))
return 1;
if(Password1.length == 11)
if ((Password1.indexOf(10) >=0 && Password1.indexOf(10)<=9 ) || (Password1.indexOf(0) >='a' && Password1.indexOf(0)<='z' )
 ||  (Password1.indexOf(0) >='A' && Password1.indexOf(0)<='A' ))
return 1;
if(Password1.length == 12)
if ((Password1.indexOf(11) >=0 && Password1.indexOf(11)<=9 ) || (Password1.indexOf(0) >='a' && Password1.indexOf(0)<='z' )
 ||  (Password1.indexOf(0) >='A' && Password1.indexOf(0)<='A' ))
return 1;
return "ok";

}


function funcconfirm (confirm){
    if(confirm.length==0)
    return "empty";
}

function funcchekEmail (Email){

    if(Email.length==0)
    return "empty";

    if(Email.charAt(0)=="@")
    return "legal";

    if (Email.charAt(Email.length-1)=="@")
    return "legal";
    return "ok";

    
}

}
/*
    function func1 (){
   
var UserName = document.getElementById("userN").value;

var checkfunckuser= (fcheckname (userN));

if(checkfunckuser.length !=0)
alert("sdfs");
}



function fcheckname (UserName){

    var firrstletter= userN.charAt(0);
    
    if(userN.length==0)
 // alert("sdfs");
  //return "dfs";
    
    
    }
}
 
*/


// if(name.indexOf(' ') != -1){
//     document.getElementById("span").innerHTML="perimeter is";
//     alert("check your details");

//     }
    
    




//change string[0] to UPPERCASE
// function func2(){

//     var name = document.getElementById("test").value;
//     var name1 = document.getElementById("test1").value;
//     var name2 = document.getElementById("test2").value;

//     name=name.replace(name.charAt(0),name.charAt(0).toUpperCase());
//     name1=name1.replace(name1.charAt(0),name1.charAt(0).toUpperCase());
//     name2=name2.replace(name2.charAt(0),name2.charAt(0).toUpperCase());

//     document.getElementById("test").value= name;
//     document.getElementById("test1").value= name1;
//     document.getElementById("test2").value= name2;

// }


    
