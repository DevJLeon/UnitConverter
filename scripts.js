const $magnitudesDiv = document.querySelector(".magnitudes");
const $unitSelector = document.querySelector("#unitSelector");
console.log($unitSelector)

let magnitudes = document.createElement("select")


$unitSelector.addEventListener("input",(e)=>{
    console.log(e.target.value);
    if((e.target.value)=="temperature"){
        magnitudes.innerHTML= `
            <option value="celcius">Celcius</option>
            <option value="kelvin">Kelvin</option>
            <option value="farenheight">Farenheight</option>
        `
    } else if((e.target.value)=="lenght"){
        magnitudes.innerHTML= `
            <option value="kilometer">Kilometer</option>
            <option value="hectometer">Hectometer</option>
            <option value="decemetre">Decemetre</option>
            <option value="meter">Meter</option>
            <option value="decimeter">Decimeter</option>
            <option value="centimeter">Centimeter</option>
            <option value="milimeter">Milimeter</option>
        `
    }else if((e.target.value)=="weight"){
        magnitudes.innerHTML= `
            <option value="ton">Ton</option>
            <option value="kilogram">Kilogram</option>
            <option value="decemetre">Decemetre</option>
            <option value="meter">Meter</option>
            <option value="decimeter">Decimeter</option>
            <option value="centimeter">Centimeter</option>
            <option value="milimeter">Milimeter</option>
        `
    };
    $magnitudesDiv.appendChild(magnitudes)
})

