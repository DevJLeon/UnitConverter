export function distance(input, output, textInput, textOutput) {
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
    } else if (input.value == "meter" && output.value == "decameter"){
        textOutput.value = textInput.value / 10;
    }}
