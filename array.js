let numbers = prompt("input numbers :");
let arrnumbers = numbers.split(",").map(function(num) {
    return Number(num);
});

let check = {};
for (let i = 0; i < arrnumbers.length; i++) {
    if (!check[arrnumbers[i]]) {
        check[arrnumbers[i]] = 1
    } else {
        check[arrnumbers[i]]++;
    }
}
for (const key in check) {
    if (check[key] === 1) {
        console.log(key);
    }
}