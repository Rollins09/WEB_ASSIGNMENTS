let nos = [1, 2, 3, 4, 5];
console.log("The initial array is:", nos);
let fno = nos.shift();
console.log("Array after shift:", nos);
console.log("The no got shifted:", fno);
nos.unshift(10);
console.log("Array after unshift:", nos);
let nums = [1, 2, 3, 4, 5];
nums.splice(0,1,8);
console.log("Array ater splice insertion:", nums);