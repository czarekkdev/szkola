// @ts-check

import { makeElement, br } from "https://cdn.jsdelivr.net/gh/czarekkdev/szkola@main/lib.js";

let btn = makeElement("button");
let size = document.body.appendChild(document.createElement("p"));

size.textContent = `${window.innerWidth}x${window.innerHeight}`;

btn.style = "background-color: white;"

btn.addEventListener("mouseenter", () => {
    btn.style = "background-color: red;";
});

btn.addEventListener("mouseleave", () => {
    btn.style = "background-color: white;";
});

btn.addEventListener("dblclick", () => {
    alert("Double clicked!");
});

btn.addEventListener("focusin", () => {
    btn.style = "background-color: orange;";
});

btn.addEventListener("focusout", () => {
    btn.style = "background-color: white;";
});

window.addEventListener("resize", () => {
    size.textContent = `${window.innerWidth}x${window.innerHeight}`;
});

document.addEventListener("keypress", (key) => {
    console.log(`key typed: ${key.key}`);
});

document.addEventListener("DOMContentLoaded", () => {
    alert("Witaj na stronie!");
});

btn.textContent = "double click me";