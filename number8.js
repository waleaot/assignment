today=new Date();
var x_mas = new Date(today.getFullYear(),11,25);
 if (today.getMonth()==11 && today.getDate()>25)
 { 
    x_mas.setFullyear(x_mas.getFullYear()+ 1);
 }
var days_left = 1000*60*60*24;
console.log(Math.ceil(Math.round (x_mas.getTime()-today.getTime())/(days_left)) + " days left to christmas");