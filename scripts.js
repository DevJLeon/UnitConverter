const $magnitudesDiv = document.querySelector(".magnitudes");
const $unitSelector = document.querySelector("#unitSelector");
const $quantityInput = document.querySelector("#quantityInput");
const $resultInput = document.querySelector("#resultInput");


console.log($unitSelector)

let inputMagnitude = document.createElement("select");
let outputMagnitude = document.createElement("select");
let toDiv =document.createElement("div");


$unitSelector.addEventListener("input",(e)=>{
    if((e.target.value)=="select"){
        $quantityInput.disabled = true;
        $resultInput.disabled = true;
        $quantityInput.value = "";
        $resultInput.value = "";
    }else if((e.target.value)=="temperature"){
        $quantityInput.disabled = false;
        $resultInput.disabled = false;

        $quantityInput.value = "";
        $resultInput.value = "";

        outputMagnitude.innerHTML = inputMagnitude.innerHTML= `
            <option value="celcius" selected>Celcius</option>
            <option value="kelvin">Kelvin</option>
            <option value="farenheight">Farenheight</option>
        `
    } else if((e.target.value)=="lenght"){
        $quantityInput.disabled = false;
        $resultInput.disabled = false;
        $quantityInput.value = "";
        $resultInput.value = "";
        outputMagnitude.innerHTML = inputMagnitude.innerHTML= `
            <option value="kilometer">Kilometer</option>
            <option value="hectometer">Hectometer</option>
            <option value="decemetre">Decemetre</option>
            <option value="meter" selected>Meter</option>
            <option value="decimeter">Decimeter</option>
            <option value="centimeter">Centimeter</option>
            <option value="millimeter">millimeter</option>
        `
    }else if((e.target.value)=="weight"){
        $quantityInput.disabled = false;
        $resultInput.disabled = false;
        $quantityInput.value = "";
        $resultInput.value = "";
        outputMagnitude.innerHTML = inputMagnitude.innerHTML= `
            <option value="ton">Ton</option>
            <option value="kilogram">Kilogram</option>
            <option value="gram" selected>Gram</option>
            <option value="decigram">Dedicram</option>
            <option value="centigram">Centigram</option>
            <option value="milligram">milligram</option>
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

$quantityInput.addEventListener("input", (e)=>{
    const $inputSelect = document.querySelector(".inputSelect");
    const $outputSelect = document.querySelector(".outputSelect");
    
    if($unitSelector.value=="temperature"){
        temperature($inputSelect,$outputSelect,$quantityInput,$resultInput)
    }else if($unitSelector.value=="lenght"){
        distance($inputSelect,$outputSelect,$quantityInput,$resultInput)
    }else if($unitSelector.value=="weight"){
        mass($inputSelect,$outputSelect,$quantityInput,$resultInput)
    }
})

$resultInput.addEventListener("input", (e)=>{
    const $inputSelect = document.querySelector(".inputSelect");
    const $outputSelect = document.querySelector(".outputSelect");

    if($unitSelector.value=="temperature"){
        temperature($outputSelect,$inputSelect,$resultInput,$quantityInput)
    }else if($unitSelector.value=="lenght"){
        distance($outputSelect,$inputSelect,$resultInput,$quantityInput)
    }else if($unitSelector.value=="weight"){
        mass($outputSelect,$inputSelect,$resultInput,$quantityInput)
    }
})


function temperature(input, output, textInput, textOutput) {
    parseFloat(textInput.value);
    parseFloat(textOutput.value);

    if (input.value == output.value) {
        textOutput.value = textInput.value;
    } else if (input.value == "farenheight" && output.value == "celcius") {
        textOutput.value = (textInput.value - 32) * (5 / 9);
    } else if (input.value == "farenheight" && output.value == "kelvin") {
        textOutput.value = (textInput.value + 459.67) * (5 / 9);
    } else if (input.value == "celcius" && output.value == "farenheight") {
        textOutput.value = (textInput.value * 9 / 5) + 32;
    } else if (input.value == "celcius" && output.value == "kelvin") {
        textOutput.value = parseFloat(textInput.value) + 273.15;
    } else if (input.value == "kelvin" && output.value == "farenheight") {
        textOutput.value = (textInput.value * 9 / 5) - 459.67;
    } else if (input.value == "kelvin" && output.value == "celcius") {
        textOutput.value = parseFloat(textInput.value) - 273.15;
    }
}

function distance(input, output, textInput, textOutput) {
    parseFloat(textInput.value);
    parseFloat(textOutput.value);

    if (input.value == output.value) {
        textOutput.value = textInput.value;
    } else if (input.value == "kilometer" && output.value == "hectometer") {
        textOutput.value = textInput.value * 10;
    } else if (input.value == "kilometer" && output.value == "decameter") {
        textOutput.value = textInput.value * 100;
    } else if (input.value == "kilometer" && output.value == "meter") {
        textOutput.value = textInput.value * 1000;
    } else if (input.value == "kilometer" && output.value == "decimeter") {
        textOutput.value = textInput.value * 10000;
    } else if (input.value == "kilometer" && output.value == "centimeter") {
        textOutput.value = textInput.value * 100000;
    } else if (input.value == "kilometer" && output.value == "millimeter") {
        textOutput.value = textInput.value * 1000000;
    } else if (input.value == "hectometer" && output.value == "kilometer") {
        textOutput.value = textInput.value / 10;
    } else if (input.value == "hectometer" && output.value == "decameter") {
        textOutput.value = textInput.value * 10;
    } else if (input.value == "hectometer" && output.value == "meter") {
        textOutput.value = textInput.value * 100;
    } else if (input.value == "hectometer" && output.value == "decimeter") {
        textOutput.value = textInput.value * 1000;
    } else if (input.value == "hectometer" && output.value == "centimeter") {
        textOutput.value = textInput.value * 10000;
    } else if (input.value == "hectometer" && output.value == "millimeter") {
        textOutput.value = textInput.value * 100000;
    } else if (input.value == "decameter" && output.value == "kilometer") {
        textOutput.value = textInput.value / 100;
    } else if (input.value == "decameter" && output.value == "hectometer") {
        textOutput.value = textInput.value / 10;
    } else if (input.value == "decameter" && output.value == "meter") {
        textOutput.value = textInput.value * 10;
    } else if (input.value == "decameter" && output.value == "decimeter") {
        textOutput.value = textInput.value * 100;
    } else if (input.value == "decameter" && output.value == "centimeter") {
        textOutput.value = textInput.value * 1000;
    } else if (input.value == "decameter" && output.value == "millimeter") {
        textOutput.value = textInput.value * 10000;
    } else if (input.value == "meter" && output.value == "kilometer") {
        textOutput.value = textInput.value / 1000;
    } else if (input.value == "meter" && output.value == "hectometer") {
        textOutput.value = textInput.value / 100;
    } else if (input.value == "meter" && output.value == "decameter") {
        textOutput.value = textInput.value / 10;
    } else if (input.value == "meter" && output.value == "decimeter") {
        textOutput.value = textInput.value * 10;
    } else if (input.value == "meter" && output.value == "centimeter") {
        textOutput.value = textInput.value * 100;
    } else if (input.value == "meter" && output.value == "millimeter") {
        textOutput.value = textInput.value * 1000;
    } else if (input.value == "decimeter" && output.value == "kilometer") {
        textOutput.value = textInput.value / 10000;
    } else if (input.value == "decimeter" && output.value == "hectometer") {
        textOutput.value = textInput.value / 1000;
    } else if (input.value == "decimeter" && output.value == "decameter") {
        textOutput.value = textInput.value / 100;
    } else if (input.value == "decimeter" && output.value == "meter") {
        textOutput.value = textInput.value / 10;
    } else if (input.value == "decimeter" && output.value == "centimeter") {
        textOutput.value = textInput.value * 10;
    } else if (input.value == "decimeter" && output.value == "millimeter") {
        textOutput.value = textInput.value * 100;
    }
}


function mass(input, output, textInput, textOutput) {
    parseFloat(textInput.value);
    parseFloat(textOutput.value);

    if (input.value == output.value) {
        textOutput.value = textInput.value;
    } else if (input.value == "ton" && output.value == "kilogram") {
        textOutput.value = textInput.value * 1000;
    } else if (input.value == "ton" && output.value == "gram") {
        textOutput.value = textInput.value * 1000000;
    } else if (input.value == "ton" && output.value == "decigram") {
        textOutput.value = textInput.value * 10000000;
    } else if (input.value == "ton" && output.value == "milligram") {
        textOutput.value = textInput.value * 1000000000;
    } else if (input.value == "kilogram" && output.value == "ton") {
        textOutput.value = textInput.value / 1000;
    } else if (input.value == "kilogram" && output.value == "gram") {
        textOutput.value = textInput.value * 1000;
    } else if (input.value == "kilogram" && output.value == "decigram") {
        textOutput.value = textInput.value * 10000;
    } else if (input.value == "kilogram" && output.value == "milligram") {
        textOutput.value = textInput.value * 1000000;
    } else if (input.value == "gram" && output.value == "ton") {
        textOutput.value = textInput.value / 1000000;
    } else if (input.value == "gram" && output.value == "kilogram") {
        textOutput.value = textInput.value / 1000;
    } else if (input.value == "gram" && output.value == "decigram") {
        textOutput.value = textInput.value * 10;
    } else if (input.value == "gram" && output.value == "milligram") {
        textOutput.value = textInput.value * 1000;
    } else if (input.value == "decigram" && output.value == "ton") {
        textOutput.value = textInput.value / 10000000;
    } else if (input.value == "decigram" && output.value == "kilogram") {
        textOutput.value = textInput.value / 10000;
    } else if (input.value == "decigram" && output.value == "gram") {
        textOutput.value = textInput.value / 10;
    } else if (input.value == "decigram" && output.value == "milligram") {
        textOutput.value = textInput.value * 100;
    } else if (input.value == "milligram" && output.value == "ton") {
        textOutput.value = textInput.value / 1000000000;
    } else if (input.value == "milligram" && output.value == "kilogram") {
        textOutput.value = textInput.value / 1000000;
    } else if (input.value == "milligram" && output.value == "gram") {
        textOutput.value = textInput.value / 1000;
    } else if (input.value == "milligram" && output.value == "decigram") {
        textOutput.value = textInput.value / 100;
    }
}
