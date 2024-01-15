// // Mahsulotning kilogram narxi
// var kilogramNarxi = 100000; // Misol uchun, 15,000 so'm

// // Foydalanuvchi so'rovnoma
// var mahsulotMiqdoriKg = prompt(" Go'sht nechta kilogram bo'lsin?");

// // Mahsulot narxini hisoblash
// var mahsulotNarxi = kilogramNarxi * mahsulotMiqdoriKg;

// // Natija
// console.log("Siz hohlagan cha go'shtning  narxi: " + mahsulotNarxi + " so'm");


// 5. a dan b gacha bo'lgan butun sonlar yig'indisi
// function sumOfIntegers(a, b) {
//     let sum = 0;
//     for (let i = a; i <= b; i++) {
//       sum += i;
//     }
//     return sum;
//   }
  
//   console.log("5. Yig'indisi:", sumOfIntegers(3, 8));
  
//   // 6. a dan b gacha bo'lgan butun sonlar ko'paytmasi
//   function productOfIntegers(a, b) {
//     let product = 1;
//     for (let i = a; i <= b; i++) {
//       product *= i;
//     }
//     return product;
//   }
  
//   console.log("6. Ko'paytma:", productOfIntegers(2, 5));
  
//   // 7. a dan b gacha bo'lgan butun sonlar kvadratlarining yig'indisi
//   function sumOfSquares(a, b) {
//     let sum = 0;
//     for (let i = a; i <= b; i++) {
//       sum += i * i;
//     }
//     return sum;
//   }
  
//   console.log("7. Kvadratlar yig'indisi:", sumOfSquares(2, 5));
  
//   // 8. n butun soni berilgan (n > 0). Quyidagi yig'indini hisoblovchi dastur
//   function harmonicSum(n) {
//     let sum = 0;
//     for (let i = 1; i <= n; i++) {
//       sum += 1 / i;
//     }
//     return sum;
//   }
  
//   console.log("8. Yig'indisi:", harmonicSum(5));
  
//   // 9. n butun soni berilgan (n > 0). Quyidagi ko'paytmani hisoblovchi dastur
//   function productSeries(n) {
//     let product = 1;
//     for (let i = 1.1; i <= n + 0.1; i += 0.1) {
//       product *= i;
//     }
//     return product;
//   }
  
//   console.log("9. Ko'paytma:", productSeries(4));
  
//   // 10. n butun soni berilgan (n > 0). Shu sonning kvadratini quyidagi formula asosida hisoblovchi dastur
//   function squareSumFormula(n) {
//     let sum = 0;
//     for (let i = 1; i <= 2 * n - 1; i += 2) {
//       sum += i;
//     }
//     return sum;
//   }
  
//   console.log("10. Kvadrat formula:", squareSumFormula(3));
  
