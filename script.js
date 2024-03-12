var name = prompt("ismingizni kiriting");

while (name.length === 0) {
  var name = prompt("ismingizni kiriting");
}
console.log("ismim " + name);

var age = prompt("yoshingizni yozing");
var yosh = "yoshingizni yozing";
var notogri = "yoshingizni raqamda yozing";

while(!!isNaN(age)){
    var age = prompt(notogri)
}

var age = prompt(yosh);
while (!!isNaN(age) || age.length === 0) {
  var age = prompt(notogri);
}

console.log("mening yoshim " + age + " yoshda");

var age = prompt('yoshingizni yozing')

// 

// while (!!isNaN(masala1)) {
//     masala1 = prompt('iltimos son kiriting"')
// }

var masala1 = prompt("misolni yeching: 5+4=?");

while (!!isNaN(masala1) || masala1.length === 0) {
  masala1 = prompt("iltimos son kiriting: 5+4=?");
}
if (masala1 == 9) console.log("javobingiz togri " + masala1);
else console.log("javobingiz xato " + masala1);

// 

var masala2 = prompt("misolni yeching: 8*8=?");
while (!!isNaN(masala2) || masala2.length === 0) {
    masala2 = prompt("iltimos son kiriting: 8*8=?");
  }
if (masala2 == 64) {
  console.log("javobingiz togri " + masala2);
} else console.log("javobingiz xato " + masala2);

// 

var masala3 = prompt("misolni yechin: 9*5=?");
while (!!isNaN(masala3) || masala3.length === 0) {
    masala3 = prompt("iltimos son kiriting: 9*5=?");
  }
if (masala3 == 45) {
  console.log("javobingiz togri ") + masala3;
} else console.log("javobingiz xato " + masala3);

// 

var masala4 = prompt("misolni yeching: 5*5=?");

while (!!isNaN(masala4) || masala4.length === 0) {
    masala4 = prompt("iltimos son kiriting: 5*5=?");
  }

if (masala4 == 25) {
  console.log("javobingiz togri " + masala4);
} else console.log("javobingiz xato " + masala4);


alert("javoblaringizni console da korishingiz mumkin");



// var i = 5
// i = i + 1
// console.log(i++);
// console.log(+i);

// var a = +prompt('son kiriting')
// while (isNaN(a)) {
//     a = +prompt('sanga son kirit dvommman')
// }
// console.log(a);



// const son_1 = Math.floor(Math.random() * 10) + 1;
// const son_2 = Math.floor(Math.random() * 10) + 1;

// while (true) {
//   const son_ = prompt(`${son_1} + ${son_2} = `);
//   if (!isNaN(son_)) {
//     if (parseInt(son_) === son_1 + son_2) {
//       console.log("To'g'ri topdingiz");
//     } else {
//       son_ = prompt("Noto'g'ri, qayta urunib ko'ring");
//     }
//   } else {
//     son_ = prompt("Iltimos, raqam kiriting");
//   }
// }



// while (true) {
//     const raqam_ = prompt(`${son_1} + ${son_2} = `);
//     if (!isNaN(raqam_)) {
//       if (parseInt(raqam_) === son_1 + son_2) {
//         console.log("To'g'ri topdingiz");
//       } else {
//         raqam_ = prompt("Noto'g'ri, qayta urunib ko'ring");
//       }
//     } else {
//       raqam_ = prompt("Iltimos, raqam kiriting");
//     }
//   }
