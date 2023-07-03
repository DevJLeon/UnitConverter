const $magnitudesDiv = document.querySelector(".magnitudes");
const $unitSelector = document.querySelector("#unitSelector");
const $quantityInput = document.querySelector("#quantityInput");
const $resultInput = document.querySelector("#resultInput");
console.log($unitSelector)

let inputMagnitude = document.createElement("select");
let outputMagnitude = document.createElement("select");
let toDiv =document.createElement("div");


$unitSelector.addEventListener("input",(e)=>{
    console.log(e.target.value);
    if((e.target.value)=="temperature"){
        $quantityInput.disabled = false;
        $resultInput.disabled = false;
        outputMagnitude.innerHTML = inputMagnitude.innerHTML= `
            <option value="celcius" selected>Celcius</option>
            <option value="kelvin">Kelvin</option>
            <option value="farenheight">Farenheight</option>
        `
    } else if((e.target.value)=="lenght"){
        $quantityInput.disabled = false;
        $resultInput.disabled = false;
        outputMagnitude.innerHTML = inputMagnitude.innerHTML= `
            <option value="kilometer">Kilometer</option>
            <option value="hectometer">Hectometer</option>
            <option value="decemetre">Decemetre</option>
            <option value="meter" selected>Meter</option>
            <option value="decimeter">Decimeter</option>
            <option value="centimeter">Centimeter</option>
            <option value="milimeter">Milimeter</option>
        `
    }else if((e.target.value)=="weight"){
        $quantityInput.disabled = false;
        $resultInput.disabled = false;
        outputMagnitude.innerHTML = inputMagnitude.innerHTML= `
            <option value="ton">Ton</option>
            <option value="kilogram">Kilogram</option>
            <option value="gram" selected>Gram</option>
            <option value="decigram">Dedicram</option>
            <option value="centigram">Centigram</option>
            <option value="miligram">Miligram</option>
        `
    };

    inputMagnitude.setAttribute("class","col inputSelect");
    outputMagnitude.setAttribute("class","col outputSelect");
    toDiv.setAttribute("class","col toDiv");

    toDiv.innerHTML="to"

    $magnitudesDiv.appendChild(inputMagnitude);
    $magnitudesDiv.appendChild(toDiv);
    $magnitudesDiv.appendChild(outputMagnitude);
})
