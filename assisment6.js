// create a form validation web page like email name age


let name = "mithun"
let email = "Mithun.s@pw.live";
let age = 18

if ( typeof name !=="string") {
    console.log("Name should be a string ");
}
else if( typeof email !=="string"){
     console.log("email should be a string");
}
else if( typeof age !== "number"){
    console.log(" age should be a number");
}
else{
    console.log("waoh all detail are correct");
}
