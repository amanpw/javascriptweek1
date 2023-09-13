//let standard = "might takes 3-5 days"
//let express = " 1-2 days"
//let overnight = " next day"

let typeOfPackage = "overnight"

switch (typeOfPackage) {
    case "standard":
        console.log(" package will we deliverd in 2 -3 days");
        break;
    case "express":
        console.log(" package will we deliverd in 1 -2 days");
        break;
    case "overnight":
        console.log(" package will we deliverd in next days");
        break;

    default:
        console.log("invalid package type!!");
        break;
}