let username = "admin"
let password = 12345

if (username === "admin") {
    if (password === 12345) {
        console.log("Login Successful");
    }
    else{
        console.log("invalid credebtials");
    }
}
else{
    console.log("invalid credebtials");
}
// use and to solve this 

if (username === "admin" && password === 12345) {
    console.log("Login Successful");
}
else{
    console.log("invalid credebtials");
}
