{

        //var MYworld ="";
        //var flag=true;

        
     //   alert(celdata);
      // alert(celdata[0]);
     //  alert(celdata[0][0]);
    
    
  
       function findRowName(db,name){
      
        let i=1;
        let j=0;
        var tempName="";
        for(;i<db.length;i++){
    for(j=0;db[i][j]!=',';j++)
             tempName+=db[i][j];
        if(tempName==name)
          return i;//return the db row its found

       tempName="";
        }
      
        return -1;//in name not found in db
           
      }
              
         
function selectedchoise(){

  var selectdrop = document.getElementById("selected1");
  var selectvalue1= selectdrop.options[selectdrop.selectedIndex].value;

$(document).ready(function(){

  $.ajax({
    url:"txt1.csv",
    dataType:"text",
    success:function(data)
    {
      var celdata = data.split(/\r?\n|\r/);
      var row=findRowName(celdata,selectvalue1);
      printinfo(row,celdata);
    }
  });
});
function printinfo(row,cellData){
     var firstName ="";
       var lastName ="";
       var phone ="";
       var email ="";
   
       var i,j;
       var cnt=0;
       for(i=row,j=0; j<cellData[row].length; j++){
        
        if(cellData[i][j]==','){
          cnt++;
          continue;
          }
     if(cnt==0)
     firstName+=cellData[i][j];
     else if(cnt==1)
     lastName+=cellData[i][j];
    else if(cnt==2)
     phone+=cellData[i][j];
    else  
      email+=cellData[i][j];
   

       }
       alert(phone);
      }


//    document.getElementById("idinputname").innerHTML=fname;
   

//    document.getElementById("idinputlastname").innerHTML=lname;
  

// document.getElementById("idinputnum").innerHTML=phonenumber;

//  document.getElementById("idinputemail").innerHTML=email1;
}



}