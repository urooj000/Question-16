"use strict";
// More Guests: You just found a bigger dinner table, so now more space is available. Think of three more guests to invite to dinner.
// • Start with your program from Exercise 15. Add a print statement to the end of your program informing people that you found a bigger dinner table.
// • Add one new guest to the beginning of your array.
// • Add one new guest to the middle of your array. • Use append() to add one new guest to the end of your list. • Print a new set of invitation messages, one for each person in your list.
let guestArr = ["Yusra", "Hasnain", "Imran", "Zaviyar"];
let canNotAttend = "Hasnain";
let newGuest = "Amna";
guestArr[guestArr.indexOf(canNotAttend)] = newGuest;
console.log(guestArr);
// guestArr.map((item) => (
// console.log(`Dear ${item}, I found a bigger Dinner Table`)
// ));
let guestBegin = "Ansa";
guestArr.unshift(guestBegin);
// console.log(guestArr)
let middleGuest = "Hammad";
let middleIndex = guestArr.length / 2;
guestArr.splice(middleIndex, 0, middleGuest);
//console.log(guestArr)
guestArr.push("urooj");
console.log(guestArr);
guestArr.map((item) => (console.log(`Dear ${item}, I found a bigger Dinner Table`)));
