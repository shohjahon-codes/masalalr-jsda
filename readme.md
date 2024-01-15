# Loop (Qayta Takrorlash) Haqida Malumotlar

Bu README.md fayli loop mavzusidagi dasturlash haqida malumotlarni o'z ichiga oladi.

## For Loop

"For" loop dastur boshqarish uchun ishlatiladi. U boshlang'ich qiymatni belgilaydi, shartni tekshiradi va har takrorlashda bitta qadamni o'tkazadi.

```javascript
for (let i = 0; i < 5; i++) {
  console.log("Qayta takrorlash #", i + 1);
}
While Loop
"While" loop ham shartni tekshiradi va shart bajarilguncha takrorlanadi. Bu, boshqa shart bajarilishi kutilmagan vaqtchada yana takrorlanishi mumkin.

javascript
Copy code
let j = 0;
while (j < 5) {
  console.log("Yana bir qayta takrorlash #", j + 1);
  j++;
}
Do-While Loop
"Do-while" loop, avval dastur takrorlanadi, keyin shartni tekshiradi. Bu, dasturni kamida bir marta ishlatishni ta'minlaydi.

javascript
Copy code
let k = 0;
do {
  console.log("Yana bir qayta takrorlash #", k + 1);
  k++;
} while (k < 5);
Foydalanish
Bu misollar orqali loop (qayta takrorlash) konseptini o'rganib, dastur boshqarishda qanday ishlatishni ko'rish uchun quyidagi qadamni kuzating:

"For" loop: Boshlang'ich qiymat, shart va qadamni o'zgartiring.
"While" loop: Shartni tekshirib, dastur bajarilguncha takrorlashingiz mumkin.
"Do-while" loop: Dastur bajarilguncha bir marta ishlatishingiz mumkin, keyin shartni tekshirishingiz mumkin.
Qo'shimcha Ma'lumotlar
Agar siz qo'shimcha ma'lumotlarga ehtiyoj borsangiz, ularni shu bo'limda qo'shishingiz mumkin.

Litsenziya
Bu misollar MIT litsenziyasi bilan litsenziyalangan. Qo'shimcha ma'lumotlar uchun litsenziya faylini o'qing.

Iltimos, misollar va ma'lumotlar sizning proyektin