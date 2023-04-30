"use strict";
// 1. რიცხვები 5-დან - 100-მდე
for (let i = 5; i <= 100; i++) {
  console.log(i);
}

// 2. რიცხვები რომლებიც მეტია 0-ზე და ნაკლებია 10-ზე
let array1 = [1, 2, 4, -1, -3, 8, 7, 0, -5, 18, 12];
for (let item1 of array1) {
  if (item1 > 0 && item1 < 100) {
    console.log(item1);
  }
}

// 3. თუ არის რიცხვი 5 - მაშინ დალოგეთ - ‘არის’ და გააჩერეთ ციკლი
let array2 = [1, 2, 3, 4, 5, 6, 7, 8, 9];
for (let item2 of array2) {
  if (item2 == 5) {
    console.log("არის");
    break;
  }
}

// 4. რიცხვების ჯამი
let array3 = [1, 2, 3, 4, 5];
let sum = 0;
for (let item3 = 0; item3 < array3.length; item3++) {
  sum += array3[item3];
}
console.log(sum);

// 5. საშუალო არითმტიკული
let array4 = [1, 2, 3, 7, 6, 9];
let total = 0;
for (let item4 = 0; item4 < array4.length; item4++) {
  total += array4[item4];
}
console.log(total / array4.length);

// 6. ყველა რიცხვი 7-ის გარდა
let array5 = [1, 2, 3, 7, 6, 9];
for (let item5 of array5) {
  if (item5 != 7) {
    console.log(item5);
  } else continue;
}

// 7. user ცვლადის სტუდენტის სტატუსი
let user1 = {
  firstName: "giorgi",
  lastName: "smith",
  age: 25,
  studentStatus: "active",
};
console.log(user1["studentStatus"]);

// 8. ტექსტის დაბეჭდვა პირობების მიხედვით
let user2 = {
  name: "giorgi",
  age: 20,
  studentStatus: "active",
};
let result =
  user2["age"] < 18 && user2["studentStatus"] == "active"
    ? "Hello"
    : user2["name"] == "levani"
    ? `Hello ${user2["name"]}`
    : user2["studentStatus"] == "active" || user2["age"] < 25
    ? "Hello world"
    : "error";
console.log(result);

// 8 (2) ჩანაწერის მე-2 ვარიანტი:
// if (user2["age"] < 18 && user2["studentStatus"] == "active") {
//   console.log("Hello");
// } else if (user2["name"] == "levani") {
//   console.log(`Hello ${user2["name"]}`);
// } else if (user2["studentStatus"] == "active" || user2["age"] < 25) {
//   console.log("Hello world");
// } else {
//   console.log("error");
// }

// 9. მხოლოდ დადებითი რიცხვები
let array6 = [
  [2, -3, 5, 10],
  [25, -24, -11, 100],
  [-6, -7, 10],
];
for (let item6 of array6) {
  for (let newItem6 of item6) {
    if (newItem6 > 0) console.log(newItem6);
  }
}

// 10.1 მხოლოდ ლუწი რიცხვები
let array7 = [2, 3, 5, 10, 25, 24, 11, 100, 6, 7, 10];
for (let item7 of array7) {
  if (item7 % 2 == 0 && item7 != 0) {
    console.log(item7);
  }
}
// 10.2 მხოლოდ კენტი რიცხვები
for (let item8 of array7) {
  if (item8 % 2 == 1) {
    console.log(item8);
  }
}
