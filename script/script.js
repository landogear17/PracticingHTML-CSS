function myFunction(){
    document.getElementById("demo").innerHTML= 5+6;
    //document.write(5+6)
    window.alert("This is an Alert");
    console.log("This in a log in the console");
    document.getElementById("demo").style.fontSize ="35px";
    document.getElementById("result").innerHTML = "Did you see the result?";
}

function multiplication(n1, n2){
    return n1 * n2;
}

let result = multiplication(3,4);

console.log(result);

document.getElementById("result").innerHTML = result + " this is the result";

//document.getElementById("demo").innerHTML =  product;
