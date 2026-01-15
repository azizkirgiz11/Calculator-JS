function plusNumbers() {
    let a = document.getElementById("n1").value;
    let b = document.getElementById("n2").value;

    let result = Number(a) + parseInt(b);

    document.getElementById("r").textContent = "result : " + result;

}

function minusNumbers() {
    let a = document.getElementById("n1").value;
    let b = document.getElementById("n2").value;

    let result = Number(a) - parseInt(b);

    document.getElementById("r").textContent = "result : " + result;

}

function mupliticationNumbers() {
    let a = document.getElementById("n1").value;
    let b = document.getElementById("n2").value;

    let result = Number(a) ** parseInt(b);

    document.getElementById("r").textContent = "result : " + result;

}

function divideNumbers() {
    let a = document.getElementById("n1").value;
    let b = document.getElementById("n2").value;

    let result = Number(a) / parseInt(b);

    document.getElementById("r").textContent = "result : " + result;

}
