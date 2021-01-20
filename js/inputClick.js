/**
 * Show additional text above input and add new style to border
 * @param  {Number} id The first number
 */

function showAdditionalText(id) {
    const [clickedElement, textAbove, textBelow] = 
    [document.getElementById(id), document.getElementById("placeholder" + id), document.getElementById("text" + id)];
    document.addEventListener('click', function(event) {
        const isClickInside = clickedElement.contains(event.target);
        [clickedElement.style.outline, clickedElement.style.borderColor, textBelow.style.color, textAbove.style.display] = 
        ["none", "#1665D8", "#1665D8","block"];
        if (!isClickInside) {
            [clickedElement.style.borderColor, textBelow.style.color, textAbove.style.display] = 
            ["rgba(0, 0, 0, 0.32)", "black", "none"];
        }
    });
}
