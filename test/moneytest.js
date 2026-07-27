import {FormatCurrency} from "../scripts/utilis/money.js"
console.log("test suite : Formatcurrency")
console.log('convert cents into dollars')
if (FormatCurrency(2095)==="20.95"){
console.log("passed");
}else{
    console.log("failed");
}
console.log("Works with zero")
if(FormatCurrency(0)=== "0.00"){
    console.log("passed");
}else{
    console.log("failed")
}
console.log("rounds up to the nearest cents")
//situation=test-case
// two types of test cases basic test cases and edge cases
// basic test cases tests if the code is working 
// edge  cases test with values that are tricky
if (FormatCurrency(2000.5)==="20.01"){
    console.log("passed")
}else{
    console.log("failed")
}
console.log("rounds up to the nearest cents")
if (FormatCurrency(2000.4)==="20.00"){
    console.log("passed")
}else{
    console.log("failed")
}