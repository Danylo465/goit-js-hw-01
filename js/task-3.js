function getElementWidth(content, padding, border){
const contentWidth = parseFloat(content.slice(0, -2));
const paddingValue = parseFloat(padding.slice(0, -2));
const borderWidth = parseFloat(border.slice(0, -2));
const totalWidth = contentWidth + 2 * (paddingValue + borderWidth);
return totalWidth;
}
const contentWidth = "70px";
const paddingValue = "15px";
const borderWidth = "5px";
const totalWidth = getElementWidth (contentWidth, paddingValue, borderWidth);
console.log(totalWidth);

// ---------------------------------------------------------------------------

console.log(getElementWidth("50px", "8px", "4px")); // 74
console.log(getElementWidth("60px", "12px", "8.5px")); // 101
console.log(getElementWidth("200px", "0px", "0px")); // 200
