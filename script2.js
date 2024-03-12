var name = 'ismingizni kiriting'
var age = 'yoshingizni yozing'
var masala1 = 'misolni yeching: 5+4=?'


if(name.length !== 0){
    console.log('ismim ' + name);
 } else {
    console.log('ismim yoqs ')
 }


console.log('mening yoshim ' + age + ' yoshda');
while (isNaN(age)) {
    age = +prompt('iltimos yoshingiz yozing')
}

// 
// while(isNaN(masala1)){
//     masala1= +prompt('iltimos son kiriting')
// }
// if(masala1 == 9) (
//     console.log('javobingiz togri ' + masala1)
// )
// else(
//     console.log('javobingiz xato ' + masala1)
// )

// var masala2 = prompt('misolni yeching: 8*8=?')
// while(isNaN(masala2)){
//     masala2= +prompt('iltimos son kiriting')
// }
// if (masala2 == 64) {
//     console.log("javobingiz togri " + masala2);
// }else (
//     console.log('javobingiz xato ' + masala2)
// )

// var masala3 = prompt("misolni yechin: 9*5=?")
// while(isNaN(masala3)){
//     masala3= +prompt('iltimos son kiriting')
// }
// if (masala3 == 45) {
//     console.log('javobingiz togri ') + masala3;
// }else(
//     console.log('javobingiz xato ' + masala3)
// )

// var masala4 = prompt('misolni yeching: 5*5=?')

// while(isNaN(masala4)){
//     masala4= +prompt('iltimos son kiriting')
// }

// if (masala4 == 25) {
//     console.log('javobingiz togri ' + masala4)
// }else(
//     console.log('javobingiz xato ' + masala4)
// )


// // var i = 5
// // i = i + 1
// // console.log(i++);
// // console.log(+i);

// // var a = +prompt('son kiriting')
// // while (isNaN(a)) {
// //     a = +prompt('sanga son kirit dvommman')
// // }
// // console.log(a);
// alert('javoblaringizni console da korishingiz mumkin')