// Q No.18 of 100 days of coding challenge.
var placeToVisit = ["Taj Mahal", "Burj Khalifa", "Eifel tower", "Moen jo Daro", "Angel Waterfall"];
// Print in original order.
console.log("Original Order :", placeToVisit);
// in alphabetical order without modifying the actual list.
console.log(" Alphabetical Order : ", placeToVisit.slice().sort());
// printing original array.
console.log("Original Order:", placeToVisit);
// reverse alphabetical order without changing the original order.
console.log("Reverse Order:", placeToVisit.slice().sort().reverse());
// showing that the original is in its original order.
console.log("Original Order:", placeToVisit);
// reverse the order of list then print the array to show that its order has changed
console.log("Its order has change");
placeToVisit.reverse();
console.log(placeToVisit);
// reverse the order of the list & it is in its original order.
console.log("Original Order", placeToVisit.sort());
console.log(placeToVisit);
// sort array in alphabetical order , and print the array that its order has changed.
console.log("reverse alphabetical order changed");
placeToVisit.reverse();
console.log(placeToVisit);
// sort to your array so its stored in reverse alphabetical order.  print the list to show that its order has changed
console.log("Its order has changed");
placeToVisit.reverse();
console.log(placeToVisit);
