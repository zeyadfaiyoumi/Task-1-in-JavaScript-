let name = prompt("Please enter your name")
let gendar=prompt("please enter your gendar")
while(gendar !=="female"&& gendar !=="male")
    {
   gendar=prompt("please enter your gendar")
}
   if(gendar=="male"){
   alert("welcome Mr: "+name);
   }

else {
    alert("welcome Ms: "+name);
   
}
console.log(5*3)


// confirm("are you want to order donut or drinks or any things other")
// let order = prompt ("please enter your order name")
// alert("there order is getting prepared")


var values=[name,gendar,order]
for(i=0;i<values.length;i++){
console.log(values[i]);}

