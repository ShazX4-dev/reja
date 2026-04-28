// console.log("Jack Ma maslaxatlari");
// const list = [
//   "Yaxshi talaba bo'ling", // 0-20
//   "To'g'ri boshliq tanlang va koproq hato qiling", //20-30
//   "uzingizni ishingizni boshlang", //30-40
//   "siz kuchli bo'lgan narsalarni qiling", // 40-50
//   "yoshlarga invetsisiya qiling", // 50-60
//   "endi asosiy examenga tayyorlaning", // 60
// ];

// function maslahatBering(a, callback) {
//   if (typeof a !== "number") callback("insert number", null);
//   else if (a <= 20) callback(null, list[0]);
//   else if (a > 20 && a <= 30) callback(null, list[1]);
//   else if (a > 30 && a <= 40) callback(null, list[2]);
//   else if (a > 40 && a <= 50) callback(null, list[3]);
//   else if (a > 50 && a <= 60) callback(null, list[4]);
//   else {
// setTimeout(function () {
//     useCallback(null, list[5]);
// }, 5000);
//     callback(null, list[5]);
//   }
// }

// maslahatBering(20, (err, data) => {
//   if (err) console.log("ERROR:", err);
//   else {
//     console.log("javob:", data);
//   }
// });

// biz shuvaqtgacha ishlatgan xamma functionlar scnrinos functionlar edi. ================================

// ******** CALL BACK functionlar **************

// async function maslahatBering(a) {
//   if (typeof a !== "number") throw new Error("insert number", null);
//   else if (a <= 20) return list[0];
//   else if (a > 20 && a <= 30) return list[1];
//   else if (a > 30 && a <= 40) return list[2];
//   else if (a > 40 && a <= 50) return list[3];
//   else if (a > 50 && a <= 60) return list[4];
//   else {
//     return new Promise((resolve, reject) => {
//       setTimeout(() => {
//         resolve(list[5]);
//       }, 5000);
//     });
// setTimeout(function () {
// }, 5000); //(*****  async function ichida set timeout bilan time interval ishlamaydi ishlatish uchun Promise bilan ishlatish kk. *******)
//   }
// }
//  than, catch methodidan foydalandik
// maslahatBering(25)
//   // agar 25 dan keyin keyingi qiymatni javobini oladigan bulsak than dan keyin yana qayta yozishimiz kk bu promise hell buladi yani ichma ich murakab kode.
//   .then((data) => {
//     //     maslahatBering(25)
//     //       .then((data) => {
//     //         console.log("javob:", data);
//     //       })
//     //       .catch((err) => {
//     //         console.log("ERROR:", err);
//     //       });
//     console.log("javob:", data);
//   })
//   .catch((err) => {
//     console.log("ERROR:", err);
//   });
//  syncrinos functionlar ishga tushib bulgach nodejs asycn functionlar bilan ishlay boshlaydi

//********* asyn/await   ********* */
// async function run() {
//   let javob = await maslahatBering(25);
//   console.log(javob);
//   javob = await maslahatBering(65);
//   console.log(javob);
//   javob = await maslahatBering(42);
//   console.log(javob);
// }
// run();

//  -----------------      MIT Task A  --------------------

// // Sync versiya
// function countLetterSync(letter, word) {
//   let count = 0;
//   // bu FOR...OF sikli u word so'zidagi xar bir belgini navbatma navbat olib chiqadi
//   for (let char of word) {
//     if (char === letter) count++;
//   }
//   return count;
// }

// // Test
// console.log(countLetterSync("a", "mexanizatsiyalashtirolmaganingizdandurda")); // 3

// B-TASK: ad2a54y79wet0sfgb9

function countDigits(matn) {
  let sonlarSoni = 0;
  for (let i = 0; i < matn.length; i++) {
    let harf = matn[i];
    if (harf >= "0" && harf <= "9") {
      sonlarSoni++;
    }
  }
  return sonlarSoni;
}

console.log(countDigits("ad2a54y79wet0sfgb9"));
