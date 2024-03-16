function getElementWidth(content, padding, border){
const contentWidth = parseFloat(content);
const paddingValue = parseFloat(padding);
const borderWidth = parseFloat(border);
const totalWidth = contentWidth + 2 * (paddingValue + borderWidth);
return `${totalWidth}`;
}
const content = "70px";
const padding = "15px";
const border = "5px";
const totalWidthBoxMassage = getElementWidth(content, padding, border);
console.log(totalWidthBoxMassage);

// ---------------------------------------------------------------------------

console.log(getElementWidth("50px", "8px", "4px")); // 74
console.log(getElementWidth("60px", "12px", "8.5px")); // 101
console.log(getElementWidth("200px", "0px", "0px")); // 200
