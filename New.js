// let name = prompt("Please enter your name");
// let age = prompt("please enter your age");
// let order = prompt("please enter your order name");
// function gendar() {
//   gendar = prompt("please enter your gendar");
// }

// while (gendar !== "female" && gendar !== "male") {
//   gendar = prompt("please enter your gendar");
// }
// if (gendar == "male") {
//   alert("welcome Mr: " + name);
// } else {
//   alert("welcome Ms: " + name);
// }
// let hero1 = document.getElementsByClassName("img");
// let maneTage = document.createElement("div");
// maneTage.setAttribute("id", "maneTage");
// document.body.appendChild(maneTage);

// let para = document.createElement("p");
// maneTage.appendChild(para);
// para.innerText = name;

// let orderList = document.createElement("ol");
// document.body.appendChild(orderList);

// for (i = 0; i < 3; i++) {
//   let list = document.createElement("li");
//   orderList.appendChild(list);
//   if (i == 0) {
//     list.innerText = gendar;
//   } else if (i == 1) {
//     list.innerText = age;
//   } else {
//     list.innerText = order;
//   }
// }

// console.log(5 * 3);

// confirm("are you want to order donut or drinks or any things other");
// alert("there order is getting prepared");

// var values = [name, gendar, order];
// for (i = 0; i < values.length; i++) {
//   console.log(values[i]);
// }
let li = document.createElement("li");
let li1 = document.createElement("li");
let li2 = document.createElement("li");
let li3 = document.createElement("li");
let li4 = document.createElement("li");
// let li5 = document.createElement("li");
function sup(event) {
  event.preventDefault();
  let div3 = document.getElementById("infor");

  let name = document.getElementById("username").value;
  li.innerText = name;
  div3.appendChild(li);

  let age = document.getElementById("age").value;
  li1.innerText = age;
  div3.appendChild(li1);

  let gender = document.getElementById("gender").value;
  li2.innerText = gender;
  div3.appendChild(li2);

  let order = document.getElementById("Ordertype").value;
  li3.innerText = order;
  div3.appendChild(li3);

  let hot = document.getElementById("hot");

  let cold = document.getElementById("cold");
  // li5.innerText = cold.value;
  div3.appendChild(li4);

  if (hot.checked === true) {
    li4.innerText = hot.value;
  } else if (cold.checked === true) {
    li4.innerText = cold.value;
  }
}

// let form = document.getElementById("form");
document.getElementById("form").addEventListener("submit", sup);
