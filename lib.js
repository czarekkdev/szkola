/** @param {keyof HTMLElementTagNameMap} tagName */
let makeElement = (tagName) => {
    return document.body.appendChild(document.createElement(tagName));
};

let br = () => {
    return makeElement("br");
}