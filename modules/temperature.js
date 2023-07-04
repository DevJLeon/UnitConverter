export function temperature(input, output, textInput, textOutput) {
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