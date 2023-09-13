
const array = [ 1 , 2 , 999 , 56 , "Mithun" , 1234 , "PW"
];

for(i = 0 ; i<=array.length ; i++){
    if ( typeof array [i] === "string" ) {
        console.log("Found the firest string :" + array[i]);
        break
    } 

}