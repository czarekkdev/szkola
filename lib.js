/** @param {keyof HTMLElementTagNameMap} tagName */
export let makeElement = (tagName) => {
    return document.body.appendChild(document.createElement(tagName));
};

export let br = () => {
    return makeElement("br");
}