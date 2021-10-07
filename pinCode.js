let arguments = process.argv;
arguments.splice(0,2);

//uc1
console.log("======= UC 1 =======")
let pinCodeRegex = RegExp('[0-9]{6}');
arguments.forEach(element => {
    console.log(element+": ", pinCodeRegex.test(element));
});

//uc2
console.log("======= UC 2 =======")
pinCodeRegex = RegExp('^[0-9]{6}');
arguments.forEach(element => {
    console.log(element+": ", pinCodeRegex.test(element));
});

//uc3
console.log("======= UC 3 =======")
pinCodeRegex = RegExp('^[0-9]{6}$');
arguments.forEach(element => {
    console.log(element+": ", pinCodeRegex.test(element));
});