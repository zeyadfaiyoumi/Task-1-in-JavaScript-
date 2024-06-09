let name = prompt("Please enter your name")
let age=prompt("please enter your age")
let order = prompt ("please enter your order name")
function gendar(){gendar=prompt("please enter your gendar")}

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
let hero1=document.getElementsByClassName("img")
let maneTage=document.createElement("div");
        maneTage.setAttribute("id","maneTage");
        document.body.appendChild(maneTage);
        
        
        let para=document.createElement("p");
        maneTage.appendChild(para);
        para.innerText=name;

let orderList=document.createElement("ol");
document.body.appendChild(orderList);

for(i=0;i<3;i++){
    let list=document.createElement("li")
    orderList.appendChild(list)
    if(i==0){
        list.innerText=gendar;
    }
    else if(i==1){list.innerText=age;}

    else{ list.innerText=order;}
}

console.log(5*3)


confirm("are you want to order donut or drinks or any things other")
alert("there order is getting prepared")


var values=[name,gendar,order]
for(i=0;i<values.length;i++){
console.log(values[i]);}

