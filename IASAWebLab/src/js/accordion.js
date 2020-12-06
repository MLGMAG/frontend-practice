function openCloseAccordion(accordion) {
    var accordionClassList = accordion.classList;
    console.log(accordionClassList);
    if (accordionClassList.contains("active")) {
        closePanel(accordion.nextElementSibling);
        accordionClassList.toggle("active");
    } else {
        closeAllAccordion();
        openPanel(accordion.nextElementSibling);
        accordionClassList.toggle("active");
    }
}

function closeAllAccordion() {
    const allAccordion = document.getElementsByClassName("accordion");
    for (let i = 0; i < allAccordion.length; i++) {
        closePanel(allAccordion[i].nextElementSibling);
    }
}

function closePanel(panel) {
    if (panel.style.maxHeight) {
        panel.style.maxHeight = null;
        panel.style.borderTop = null;
    }
}

function openPanel(panel) {
    if (!panel.style.maxHeight) {
        panel.style.maxHeight = panel.scrollHeight + "px";
        panel.style.borderTop = "4px solid black";
    }
}
