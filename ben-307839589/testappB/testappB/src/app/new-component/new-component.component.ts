import { Component, OnInit } from '@angular/core';
import { $ } from '../../../node_modules/protractor';
import { coin } from './coin';

@Component({
  selector: 'app-new-component',
  templateUrl: './new-component.component.html',
  styleUrls: ['./new-component.component.css']
})
export class NewComponentComponent implements OnInit {

  c1:coin={
    _typecoin:"",
    _valuecoin:0
 
  };
  objectKeys = Object.keys;
  arrcoin:coin[]=[];


  dropdownSelectedFrom:string="";
  dropdownSelectedTo:string="";
  inputCoin:number;
selectValue:string;
newCoinType:string;
newCoinValue:number;


coinsCalcArr:string[]=[];
result:number=0;
  funcdetailscoins():void{
 
    document.getElementById("mainPageSection").style.display="block";
    document.getElementById("detailscoins").style.display="block";
  }
  funcupdatetable():void{
 
    document.getElementById("mainPageSection").style.display="none";
    document.getElementById("updatetable").style.display="block";
  }

  funcbackbtn():void{
 
    document.getElementById("updatetable").style.display="none";
    document.getElementById("mainPageSection").style.display="block";
  }
  updateCoin(){
  
  for(let i=0; i<this.arrcoin.length; i++){
    if(this.newCoinType==this.arrcoin[i]._typecoin){
      this.arrcoin[i]._valuecoin=this.newCoinValue;
      return;
    }
  
  }
  this.c1=new coin(this.newCoinType,this.newCoinValue);
  this.arrcoin.push(this.c1);

  }

  


curfell:string="";
calcex(){
    
    let fromnum:number=this.getvalueByType(this.dropdownSelectedFrom);
    let fromTo:number=this.getvalueByType(this.dropdownSelectedTo);
    if(fromnum !=0 && fromTo !=0 && this.inputCoin.toString.length !=0){
  alert((fromnum*this.inputCoin)/fromTo);
  
  //alert( fromnum+"");

  // alert( this.dropdownSelectedFrom
  //   +"");
  // alert( this.dropdownSelectedTo+"");
  // alert(this.inputCoin+"");
 // alert(this.result);
  this.saveCurrentCalc();
    }
  }
    saveCurrentCalc():void{
      var str:string="";
      str="#"+this.coinsCalcArr.length+"\n"+"From "+this.dropdownSelectedFrom+" To "+
      this.dropdownSelectedTo+"\n"+this.inputCoin+"="+this.result;
      this.coinsCalcArr.push(str);
    //alert(str);
    }
    
    getvalueByType(exachangeType):number{

      for(let i=0; i<this.arrcoin.length; i++){
        if(this.arrcoin[i]._typecoin==exachangeType)
        return this.arrcoin[i]._valuecoin;
      }
      return 0;
    }
     
   
    
    
    


  constructor() { 
    var c1=new coin("Shekel",1);
    var c2=new coin("Dolar",4);
    var c3=new coin("Euro",5);
    this.arrcoin.push(c1);
    this.arrcoin.push(c2);
    this.arrcoin.push(c3);
  }

  ngOnInit() {
  }


}
