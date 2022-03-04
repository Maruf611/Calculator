let result = document.getElementById("input_text");

let calculate = (number) => {
    result.value += number;
}

let Result = () => {
    try {
        result.value = eval(result.value);
    } catch (err) {
        alert("Input Wrong");


    }
}

function Clear() {
    result.value = " ";
}

function Delete() {
    result.value = result.value.slice(0, -1);
}