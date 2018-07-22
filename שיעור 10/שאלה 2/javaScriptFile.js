{
var str="svcollege",ln,subStr;
ln=str.length;
if(ln>10)
document.writeln(str.charAt(ln-1));
else if(ln<=9 &&ln >=6)
{
    if((str.indexOf('a')||str.indexOf('A'))!=-1)
    document.writeln("great");
    else
    document.writeln("NotGood");

}
else if(ln<=5 &&ln >=1){
subStr=str.substring(2,4);
if((subStr.indexOf('l')||subStr.indexOf('L'))!=-1)
document.writeln("L :)");
else
document.writeln("L :(");
}
else
document.writeln("null");

}
