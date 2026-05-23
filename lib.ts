let makeElement = (tagName: keyof HTMLElementTagNameMap) => {
    return document.body.appendChild(document.createElement(tagName));
};

let br = () => {
    return makeElement("br");
}