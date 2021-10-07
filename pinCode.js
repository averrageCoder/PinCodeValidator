let arguments = process.argv;
arguments.splice(0,2);

//uc1
let pinCodeRegex = RegExp('^[0-9]{6}');

arguments.forEach(element => {
    console.log(element+": ", pinCodeRegexUC1.test(element));
});