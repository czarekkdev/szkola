let button = document.getElementById("calculate");
let calc = document.getElementById("calc");
let left = document.getElementById("left");

button.addEventListener("click", () => {
    let gas_type = document.getElementById("type");
    let liters = document.getElementById("liters");

    gas_type = Number(gas_type.value);
    liters = Number(liters.value);

    if (!isNaN(gas_type) && !isNaN(liters)) {
        if (!calc) {
            calc = document.createElement("p");

            if (left)
                left.appendChild(calc);
        }
        if (gas_type === 1 && liters >= 0)
            calc.innerText = `Koszt paliwa: ${4 * liters} zł`;
        else if (gas_type === 2 && liters >= 0)
            calc.innerText = `Koszt paliwa: ${3.5 * liters} zł`;
        else
            calc.innerText = `Koszt paliwa: 0 zł`;
    }
});