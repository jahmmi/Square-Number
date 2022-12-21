function findSquare(formId){
    var inputNUm = formId.textin.value;

    if (inputNUm >= 1 && inputNUm <= 100){
        result= inputNUm * inputNUm;
        alert("The square of " + inputNUm + " is " + result);
    }else{
        alert("Invalid Number");
        // result = "Invalid Number"
    }
    document.getElementById("result").innerHTML = result;
}