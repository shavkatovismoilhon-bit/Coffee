// let son = 10;
// let son1 = 19;
// let son2 = 25;
// let ism = prompt("Ismingizni kirting");
// alert("Salom " + ism)
// let yosh = prompt("Yoshingizni kiriting");
// alert("Rahmat");
// let shahar = prompt("Shahringizni kiriting ");
// alert("Hush kelibsiz");
// console.log("Ismi " + ism + "." );
// console.log("Yoshi " + yosh + " da.");
// console.log("Shahri " + shahar + ".");
// console.log(son + son1 + son2);
// console.log("Salom mening ismim " + ism + ". Mening yoshim " + yosh + " da. Men " + shahar + "da yashayman.");
// let son = prompt("Son kiriting")
// alert("Siz kiritgan son:  " + son)

// let son0 = prompt("Son kiriting")
// let son1 = prompt("Yana bir martta kiriting")
// son0 = Number(son0)
// son1 = Number(son1)
// alert(("Siz kiritgan sonlar yig'indisi:  ") + (son0 + son1))

// let son3 = prompt("Son kiriting")
// let son4 = prompt("Yana bir martta kiriting")
// son3 = Number(son3)
// son4 = Number(son4)
// alert(("Siz kiritgan sonlar ko'paytmasi:  ") + (son3 * son4))
// alert(("Siz kiritgan sonlar bo'linmasi:  ") + (son3 / son4))

// let son5 = prompt("Son kiriting")
// son5 = Number(son5)
// alert(("Siz kiritgan songa bir qo'shilgani:  ") + (son5 + 1))
// alert(("Siz kiritgan sondan bir ayrilgani:  ") + (son5 - 1))

// let son6 = prompt("Matn kiriting")
// son6 = Boolean(son6)
// alert("Siz kiritgan so'z boolean da: " + son6)

// let son7 = prompt("Son kiriting")
// let son8 = prompt("Yana bir martta kiriting")
// console.log("son7" > "son8")
// alert("son7" > "son8")

// ==================================
// 1-topshiriq
// let harorat = prompt("Haroratni kiriting")
// if (harorat < 0) {
//    alert("Harorat sovuq")
// }
// if (harorat > 0) {
//    alert("Harorat iliq")
// }

// =================================
// 9-topshiriq
// let parol = prompt("Parol kiriting.")
// let parol0 = prompt("Parolni tasdiqlang.")
// if (parol === parol0) {
//    alert("Parol tasdiqlandi.")
// }
// else {
//    alert("Noto'g'ri parol. Qayta urinib ko'ring.")
// }
// ===========================
// 2-topshiriq
// let son = prompt("Bu smester to'plagan ballingizni kiriting:");
// son = Number(son);

// if (son >= 90) {
//    alert("Siz bu semestr A ball oldingiz");
// } else if (son >= 80) {
//    alert("Siz bu semestr B ball oldingiz");
// } else if (son >= 70) {
//    alert("Siz bu semestr C ball oldingiz");
// } else if (son >= 60) {
//    alert("Siz bu semestr D ball oldingiz");
// } else {
//    alert("Siz bu semestr F ball oldingiz");
// }

// ===============================
// 4-topshiriq
// let son0 = prompt("Hohlagan raqamingizni kiriting");
// if (son0 % 5 === 0) {
//    alert("Siz kiritgan son 5 ga bo'linadi");
// } 
// else {
//    alert("Siz kiritgan son 5 ga bo'linmaydi")
// }

// ===============================
// 5-topshriq
// let ish = prompt("Haftasiga necha soat ishlaysiz")
// if (ish <= 40) {
//    alert("Oddiy ish haftasi")
// }
// else {
//    alert("Ish ortiqcha bajarilgan")
// }
// ===============================
// 7-topshiriq
// let yil = prompt("Nechanchi yilda tugilgansiz")
// if (yil > 2026){
//     alert("Noto'g'ri yil kiritdingiz")
// } else {alert("Sizning yoshingiz " + (2026 - yil) + " da")}

// ==============================
// 10-topshiriq
// let sonlar = prompt("Oy raqamini kiriting.")
// sonlar = Number(sonlar)

// if (sonlar == 1 || sonlar == 2 || sonlar == 12) {
//    alert("Hozir qish fasli")
// } else if (sonlar == 3 || sonlar == 4 || sonlar == 5) {
//    alert("Hozir bahor fasli")
// } else if (sonlar == 6 || sonlar == 7 || sonlar == 8) {
//    alert("Hozir yoz fasli")
// } else if (sonlar == 9 || sonlar === 10 || sonlar == 11) {
//    alert("Hozir kuz fasli")
// } else {
//    alert("Noto'g'ri oy raqami")
// +}


// let ism = prompt("Parol kiriting")                               
// let ism1 = prompt("Parolni tasdiqlang")` 
// ism = number(ism)
// if (ism === ism1) {
//    alert("Parolingiz tasdiqlandi")
// } else{
//     alert("Parolingiz tasdiqlanmadi. Qayta urinib ko'ring")
//  }
// let parol5 = prompt("Parol kiriting")
// let parol6 = prompt("Parolni tasdiqlang")
// parol5 === parol6? alert("Parol tasdiqlandi") : alert("Parol noto'g'ri. Qayta urinib ko'ring");

// let yil = prompt("Yilingizni kiriting")
// alert("Sizning yoshingiz: " + (2025 - yil) + " da.")


// ==========================
// 1-topshiriq
// let ism = prompt("Ismingizni kiriting: ")

// switch (ism) {
//     case "":
//         alert("Ism kiritilmagan")
//         break;
//     default:
//         alert("Salom, " + ism)
// }

// ========================
// 2-topshiriq
// let narx = prompt("Mahsulotning narxini kiriting: ")

// switch (narx) {
//     case "":
//         alert("Standart narx: 10$")
//         break;
//     default:
//         alert("Mahsulotning narxi: " + narx)
// }

// =========================
// 3-topshiriq
// let hafta = prompt("Hafta kunining raqamini kiring")

// switch (+hafta) {
//     case 1: 
//         alert("Dushanba")
//         break;
//     case 2: 
//         alert("Seshanba")
//         break;
//     case 3: 
//         alert("Chorshanba")
//         break;
//     case 4: 
//         alert("Payshanba")
//         break;
//     case 5: 
//         alert("Juma")
//         break;
//     case 6: 
//         alert("Shanba")
//         break;
//     case 7: 
//         alert("Yakshanba")
//         break;
//         default: 
//         alert("Noto'g'ri hafta kunining soni")
// }

// ==========================
// 4-topshiriq
// let yosh = prompt("Yoshingizni kiriting: ")

// switch (yosh) {
//     case "":
//         alert("Yosh kiritilmagan")
//         break;
//     default:
//         alert("Sizning yoshingiz: " + yosh)
// }

// ===========================
// 5-topshiriq
// let oy = prompt("Oy raqamini kiriting.");

// switch (+oy) {
//     case 1:
//     case 2:
//         alert("Hozir qish fasli.");
//         break;
//     case 3:
//     case 4:
//     case 5:
//         alert("Hozir bahor fasli.");
//         break;
//     case 6:
//     case 7:
//     case 8:
//         alert("Hozir yoz fasli.");
//         break;
//     case 9:
//     case 10:
//     case 11:
//         alert("Hozir kuz fasli.");
//         break;
//     case 12:
//         alert("Hozir qish fasli");
//         break;
//     default:
//         alert("Noto'g'ri oy raqamni kiritdingiz");
// }

// ============================
// 6-toshiriq
// let car = prompt("Mashina turlaridan birini tanlang: (Toyota, BMW, Tesla" .tolovercase())

// switch (car) {
//     case "Tayota":
//         alert("Bu Toyota mashinasi")
//         break;
//     case "BMW":
//         alert("Bu BMW mashinasi")
//         break;
//     case "Tesla":
//         alert("Bu Tesla mashinasi")
//     default:
//         alert("Noma'lum mashina brendi")
// }

// =======================================
// 7-topshiriq
// let til = prompt("Qaysi dasturlash tili haqida bilishni hohlaysiz? (HTML, Java, Python).")
// switch (til) {
//     case "html":
//     case "HTML":
//         alert("HTML (ing. Hypertext Markup Language) — veb-sahifalar yaratish uchun standart til bo'lib, matnni formatlash va undagi tarkibiy qismlarni (sarlavhalar, paragraflar, rasmlar va h.k.) belgilash uchun ishlatiladi.")
//         break;
//     case "Java":
//     case "java":
//         alert("Java — bu Sun Microsystems (hozirda Oracle tomonidan qoʻllab-quvvatlanadi) tomonidan ishlab chiqilgan, keng tarqalgan dasturlash tilidir.")
//         break;
//     case "python":
//     case "Python":
//         alert("Python - bu yuqori darajadagi, umumiy maqsadli dasturlash tili bo'lib, o'zining soddaligi va o'qilishi qulay sintaksisi bilan mashhurdir. U Guido van Rossum tomonidan 1991-yilda yaratilgan. ")
//     default:
//         alert("Noma'lum dasturlash tili")
// }

// ====================================
// 8-topshiriq
// let nima = prompt("Bu saytga nima uchun kirdingiz?")
// switch (nima) {
//     case "":
//         alert("Malu'mot kiritilmagan")
//         break;
//     default:
//         alert("Yaxshi")
// }

// ====================================
// 9-topshiriq
// let ism1 = prompt("Ismingizni kiriting");
// let yosh1 = prompt("Yoshingizni kiriting");
// let ish = prompt("Kasbingizni kiriting");

// switch (ism1) {
//     case "":
//         alert("Ma'lumot kiritilmagan");
//         break;
// }

// switch (yosh1) {
//     case "":
//         alert("Ma'lumot kiritilmagan");
//         break;
// }

// switch (ish) {
//     case "":
//         alert("Ma'lumot kiritilmagan");
//         break;

//     default:
//         alert("Ismi: " + ism1 + ". Yoshi: " + yosh1 + ". Kasbi: " + ish + ".");
// }

// ======================================
// 10-topshiriq
// let bosqich = prompt("Ta'lim bosqichini kiriting (maktab, kollej, universitet):");

// switch (bosqich) {
//     case "maktab":
//         alert("Siz maktab o'quvchisisiz.")
//         break;
//     case "kollej":
//         alert("Siz kollej o'quvchisisiz.")
//         break;
//     case "universitet":
//         alert("Siz universitet talabasisiz.")
//         break;
//     default:
//         alert("Noto'g'ri bosqich kiritildi!")
// }


// =============================
// 1-topshiriq

// for(let i = 1; i <= 20; i++) {
//     if(i % 2 === 0) console.log(i);
// }

// =============================
// 2-topshiriq

// for(let i = 10; i >= 0; i--) {
//     console.log(i);
// }

// ============================
// 4-topshiriq

// for(let i = 1; i <= 50; i++) {  
//     if(i % 5 === 0)
//    console.log(i);
// }

// ============================
// 5-topshiriq

// let sum = 0;
// for (let i = 1; i <= 15; i++) {
//   sum + i;
// }
// console.log("Yig‘indi:", sum);

// ============================
// 8-topshiriq

//  for(let i = 1; i <= 50; i++) {  
//     if(i % 5 ===0) {
//    alert(i);
//     }
// }

// ===========================
// 9-topshiriq

// let raqam = prompt("Son kiriting:");
// for (let i = 1; i <= raqam; i++) {
//   if (raqam % i === 0) {
//     console.log(i);
//   }
// }

// =========================
// 1-topshiriq
// function son(son) {
//   if (son % 2 === 0) {
//     console.log("Siz kiritgan son juft son.");
//   } else {
//     console.log("Siz kiritgan son juft son emas.");
//   }
// }

// ============================
// 2-topshiriq
// function kub(son22){
//   return son22*son22*son22;
// }

// ============================
// 3-topshiriq
// function qiymat(musbat) {
//   if (musbat < 0) { console.log("Siz kiritgan son musbat");}
//   else if (musbat > 0) {console.log("Siz kiritgan son manfiy");}
//   else {console.log("Siz kiritgan son 0 ga teng");}
// }

// ==========================
// 4-topshiriq
// function sonla(sonla, sonl) {
//   if (sonla > sonl) {
//     console.log("Siz kiritgan birinchi son ikkinchisidan kotta");
//   }
//   else if (sonla < sonl) {
//     console.log("Siz kiritgan birinchi son ikkinchisidani kichik");
//   }
//   else {
//     console.log("Sonlar teng");
//   }
// }

// =============================
// 5-topshiriq
// function mashq(matn, matn1) {
//    console.log(matn + matn1);
// }

// ==============================
// 8-topshiriq
// function six(salom) {
//   if (salom % 3 === 0)  {console.log(buzz);
//   }
//   if (salom % 5 ===0)  {console.log(bizz);
//   }
//   if (salom % 5 === 0 && salom % 3 === 0) {console.log(buzzbizz);
//   }
// }

// ===========================================
// 1-topshiriq
// const car = {
//   model: "Malibu",
//   rang: "white",
//   yil: 2021
// };

// console.log("Mashinaning modeli: ", car.model);
// console.log("Mashinaning rangi: ", car.rang);
// console.log("Mashinaning yili: ", car.yil);


// // =========================================== 
// // 2-topshiriq
// const student = {
//    ism: "Shahnoza",
//    yosh: 21,
//    kasb: "IT" };

// console.log("Ism:", student.ism);
// console.log("Yosh:", student.yosh);
// console.log("Kasbi:", student.kasb);

// // ===========================================
// // 3-topshiriq
// const book = {
//   title: "Kitob",
//   author: "Ali",
//   year: 2020
// };

// book.pages = 300

// book.title = "Yangi kitob"

// delete book.year

// // ===========================================
// // 4-topshiriq
// const settings = {
//   language: "en",
//   fontSize: "medium"
// };

// settings.language = "uz"

// // ===========================================
// // 5-topshiriq
// const user = {
//   name: "Ali",
//   age: 25,
// };

// if ("email" in user) {
//   console.log(user.email);
// } else {
//   console.log("Email yo'q")
// }

// // ===========================================
// // 6-topshiriq
// const laptop = {
//   brand: "HP",
//   model: "Pavilion",
// };

// if ("batteryLife" in laptop) {
//   laptop.batteryLife += 2;
//   console.log(laptop.batteryLife);
// } else {
//   console.log("Batterfly ma'lumoti mavjud emas");
// }

// // ===========================================
// // 7-topshiriq
// const person = {
//   name: "Diyor",
//   city: "Tashkent",
//   age: 28
// };

// console.log(person.name);
// console.log(person.city);
// console.log(person.age);
// let son = 255;

// console.log( son.toString(16))
// console.log( son.toString(2))
// delete console.log(son)

// // =====================================================
// // 1-topshiriq
// let son = Number(prompt("Son kiriting"))
// let ozgartirish = son.toString()
// console.log(ozgartirish)
// console.log(typeof ozgartirish)

// // =======================================================
// //  2-topshiriq
// let price = 12.456;
// console.log(price.toFixed(2));


// //  ====================================================
// //  3-topshiriq
// let x = 5.67;
// console.log(Math.floor(x));
// console.log(Math.ceil(x));
// console.log(Math.round(x));
// console.log(Math.trunc(x));

// // =======================================================
// //  4-topshiriq
// let a = "123";
// let b = "hello";
// let c = NaN;
// let d = 45;

// console.log(isNaN(a));
// console.log(isNaN(b));
// console.log(isNaN(c));
// console.log(isNaN(d));


// =======================================================
//  5-topshiriq
//  let son =  "34.89 kg"
//  son = Number(son)
//  console.log(parseInt(son, typeof son));
//  console.log(parseFloat(son, typeof son));

// =======================================================
//  6-topshiriq
// console.log(Math.round(Math.random(1) * 10));


// =======================================================
//  7-topshiriq
// console.log(Math.max( a = 34, b = 12, c = 98, d = 5));
// console.log(Math.min( a = 34, b = 12, c = 98, d = 5));


// =======================================================
//  8-topshiriq
// console.log(Math.pow(7, 2));
// console.log(Math.pow(7, 3));


// =======================================================
//  10-topshiriq
// let total = 987.654321;
// console.log(total.toFixed(3));
// console.log(total.toString(2));





// let what = prompt("Parol kiriting");

// if (what === "1234") {
//   alert("Parol tasdiqlandi");
// } else {
//   alert("Parol noto'g'ri");
// }

// let sen = prompt("Parol kiriting")
// if (sen === r)  {}

// let aboutMe = 'Men "IT Academy" da tahsil olaman'
// let aboutMe1 = "Men 'IT Academy' da tahsil olaman"
// console.log(aboutMe1);

// nnnnnnnnnnnnnnnnnnnnnnnnnnnnnn
// nnnnnn                         nnnn
// nnnnnnn                          nnnn
// nnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnn
// nnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnn
// nnnnnnnn                           nnn
// nnnnnnnn    nnnnnnnn     nnnnnnn   nnn
// nnnnnnnn      nnnnnnn      nnn     nnn
// nnnnnnnn      nnnnnnnn     nnn     nnn
// nnnnnnnn      nnnnnnnnnn   nnn     nnn
// nnnnnnnn      nnn nnnnnnn  nnn     nnn
// nnnnnnnn      nnn  nnnnnnnnnnn     nnn
// nnnnnnnn      nnn   nnnnnnnnnn     nnn
// nnnnnnnn      nnn     nnnnnnnn     nnn
// nnnnnnnn      nnn      nnnnnnn     nnn
// nnnnnnnn    nnnnnnnn    nnnnnn     nnn
//   nnnnnn                           nnn
//     nnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnn

// ========================================
//  1-topshiriq
// let str = "   Hello World!   "
// console.log(str.trim());



// ========================================
// 2-topshiriq
// let message = "Hello World!";
// console.log(message.slice(0, 5));


// =============================================
// 3-topshiriq
// let text = "I love learning JavaScript every day!";
// console.log(text.indexOf("JavaScript"));


// ============================================
// 5-topshiriq
// let uc = ["frontend", "backend", "fullstack"];
// console.log(uc[0].toUpperCase());
// console.log(uc[1].toUpperCase());
// console.log(uc[2].toUpperCase());

// ===========================================
// 6-topshiriq
// let link = "https://example.com";
// console.log(link.startsWith("http"))

// ========================================
// 7-topshiriq
// let quote = "Time is the most valuable thing in life.";
// console.log(quote.substr(35, 4));

// =======================================
// 8-topshiriq
// let str = "I am learning html and css.";

// if (str.includes("html")) {
//   console.log("Topildi"); 
// } else {
//   console.log("Topilmadi");
// }

// =======================================
// 9-topshiriq
// let name = "mUROD";
// let javob = name[0].toUpperCase() + name.slice(1).toLowerCase();
// console.log(natija);

// =======================================
// 10-topshiriq
// let sentence = 'JavaScript is a powerful programming language'
// let natija = (sentence.toString(sentence.length))
// console.log(natija);


// let men = confirm("Talabamisiz")
// if (men = "OK") {
//     console.log();
// }   else {
//     console.log(false);
// }subclass_change 507
// const a = prompt(6 + 5)
// console.log(a);



// // ========================================
// // 1-topshiriq
// const numbers = [10, 20, 30, 40, 50, 60];
// console.log(numbers.at(3));

// // ========================================
// // 2-topshiriq
// const fruits = ["olma", "banan", "nok"];
// console.log(fruits.push("anor"));
// console.log(fruits.shift(0));

// // ========================================
// // 3-topshiriq
// const cars = ["BMW", "Toyota", "Tesla"];
// console.log(cars.pop(0));
// console.log(cars.unshift("Ferrari"));
// console.log(cars);

// // =======================================
// // 4-topshiriq
// const colors = ["qizil", "ko‘k", "yashil", "sariq", "qora"];
// console.log(colors.slice(0, 3));

// // ======================================
// // 6-topshiriq
// const newNumbers = new Array();
// newNumbers.push(2011, 2012, 2013, 2014)
// console.log(newNumbers);

// // =====================================
// // 7-topshiriq
// const names = ["Ali", "Vali", "Hasan"];
// const stringNames = names.join(", ");
// console.log(stringNames);
// const arrayNames = stringNames.split(", ");
// console.log(arrayNames); 

// // =====================================
// // 8-topshiriq
// const boys = ["Ali", "Vali"];
// const girls = ["Zuhra", "Madina"];
// const togather = (boys.concat(girls))
// console.log(togather);



// =================================================
// topshiriq
// let kitoblar = ["Kitob1", "Kitob2", "Kitob3", "Kitob4", "Kitob5"]
// for (let index = 0; index < kitoblar.length; index++) {
//     console.log(kitoblar[index]);
//     console.log(index);
// }


// ==============================================================
// 1-topshiriq
// const colors = ["qizil", "ko‘k", "yashil", "sariq", "qora", "pushti"];
// console.log(colors.slice(2, 5));



// ==============================================================
// 2-topshiriq
// const fruits = ["olma", "banan", "nok", "gilos"];
// fruits.splice(0, 1, "ananas", "shaftoli");
// console.log(fruits);



// ==============================================================
// 3-topshiriq
// const fruitList = ["olma", "nok", "gilos", "shaftoli"];
// console.log(fruitList.includes("banan"));



// ==============================================================
// 4-topshiriq
// const rainbowColors = ["qizil", "ko‘k", "yashil", "sariq"];
// console.log(rainbowColors.indexOf("ko‘k"));



// ==============================================================
// 5-topshiriq
// const numbers = [5, 10, 15, 10, 20, 10, 25];
// console.log(numbers.lastIndexOf(10));



// ==============================================================
// 6-topshiriq
// const ages = [12, 15, 22, 19, 30];
// const result = ages.find(age => age > 18);
// console.log(result);



// 7-topshiriq
// const ageList = [10, 16, 18, 21, 25];
// const result = ageList.findIndex(age => age > 18)
// console.log(result);



// ==============================================================
// 8-topshiriq
// const mixedAges = [22, 17, 16, 20, 19, 18, 21];
// const result = mixedAges.findLastIndex(age => age > 18)
// console.log(result); 


// ===================================================
// 1-topshiriq
// const students = [
//   { name: "Ali", grade: "A" },
//   { name: "Vali", grade: "B" },
//   { name: "Hasan", grade: "A" },
//   { name: "Husan", grade: "C" }
// ];
// console.log(students.filter((item) => item.grade === "A"));

// ===================================================
// 2-topshiriq
// const products = [
//   { name: "Telefon", price: 1200 },
//   { name: "Noutbuk", price: 900 },
//   { name: "Quloqchin", price: 100 },
//   { name: "Monitor", price: 300 }
// ];
// console.log(products.sort((a, b) => b.price - a.price));

// ===================================================
// 3-topshiriq
// const items = [
//   { id: 1, name: "Sut", price: 5000 },
//   { id: 2, name: "Non", price: 3000 },
//   { id: 3, name: "Shakar", price: 8000 }
// ];
// const newitems = items.map(items => items.name);
// console.log(newitems);

// ===================================================
// 4-topshiriq
// const employees = ["Javohir", "Dilshod", "Shoxruh", "Umid"];
// console.log(employees.forEach((employees) => employees = "Hurmatli") );

// ===================================================
// 5-topshiriq
// const numbers = [2, 5, 8, 10, -1];
// console.log(numbers.every((item) => item > 0))

// ===================================================
// 6-topshiriq
// const users = [
//   { name: "Murod", age: 16 },
//   { name: "Dilnoza", age: 21 },
//   { name: "Otabek", age: 17 }
// ];
// console.log(users.some((item) => item.age > 18))

// ===================================================
// 7-topshiriq
// const emptyArray = new Array(10);
// emptyArray.fill(null)
// console.log(emptyArray);

// ===================================================
// 8-topshiriq
// const copyArray = ["A", "B", "C", "D", "E", "F"];
// copyArray.copyWithin(3, 0)
// console.log(copyArray);

// ===================================================
// 9-topshiriq
// const nestedArray = [1, [2, 3], [4, [5, 6, [7, 8]]]];
// console.log(nestedArray.flat(Infinity));

// ===================================================
// 10-topshiriq
// const customers = [
//   { name: "Jasur", balance: 5000 },
//   { name: "Madina", balance: 12000 },
//   { name: "Shavkat", balance: 8000 }
// ];
// console.log(customers.reduce((item) => item.balance + item.balance))


// const now = new Date();

// const year = now.getFullYear();
// const month = now.getMonth();
// const day = now.getDate();

// const hour = now.getHours();
// const minute = now.getMinutes();
// const second = now.getSeconds();

// console.log('Bugun:', year, month, day);
// console.log('Hozirgi vaqt:', hour, minute, second);
// //===========================================================================================================================>

// const start = new Date();
// const target = new Date(start.getTime() + 5000);

// const h = start.getHours();
// const m = start.getMinutes();
// const s = start.getSeconds();

// console.log('Hozirgi vaqt:', h, m, s);
// console.log("Xabar 5 soniyadan keyin chiqadi...");

// setTimeout(() => {
//   const hh = target.getHours();
//   const mm = target.getMinutes();
//   const ss = target.getSeconds();

//   console.log('Vaqt yetdi!', hh, mm, ss);
// }, 5000);

// DOM => document objekt model => hujjat(html)ning obyekt ko'rinishi
// console.log(document);
// console.log(window);

// let input = document.querySelector("#username")
// let head = document.querySelector("#head")
// let lists = document.querySelector("ul")

// head.addEventListener('click', () => {
//   let yasash = document.createElement("li")
//   yasash.innerHTML = input.value
//   lists.append(yasash)
//   input.value = ""
// })
let lorem = document.getElementById("lorem");

let sariq = document.getElementById("sariq");
let kok = document.getElementById("kok");
let qizil = document.getElementById("qizil");

let sm = document.getElementById("sm");
let mid = document.getElementById("mid");
let lg = document.getElementById("lg");


let natija = document.getElementById("natija");

sariq.addEventListener("click", () => {
  if (true) {
    lorem.style.color = "yellow";
  }
});

kok.addEventListener("click", () => {
  if (true) {
    lorem.style.color = "blue";
  }
});

qizil.addEventListener("click", () => {
  if (true) {
    lorem.style.color = "red";
  }
});

sm.addEventListener("click", () => {
  lorem.style.fontSize = "8px";
});

mid.addEventListener("click", () => {
  lorem.style.fontSize = "16px";
});

lg.addEventListener("click", () => {
  lorem.style.fontSize = "28px";
});

let a = document.getElementById("a");
let b = document.getElementById("b");


document.getElementById("+").addEventListener("click", () => {
  natija.innerHTML = Number(a.value) + Number(b.value);
});

document.getElementById("-").addEventListener("click", () => {
  natija.innerHTML = Number(a.value) - Number(b.value);
});

document.getElementById("*").addEventListener("click", () => {
  natija.innerHTML = Number(a.value) * Number(b.value);
});

document.getElementById("/").addEventListener("click", () => {
  natija.innerHTML = Number(a.value) / Number(b.value);
});

document.getElementById("//").addEventListener("click", () => {
  a.value = "";
  b.value = "";
  natija.innerHTML = "";
});
let chaqimchi = alert("Dadov akam o'yin o'ynayabdi?!!")
let w = 