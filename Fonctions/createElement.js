/////////////////// FONCTION DE CREATEELEMENT ////////////////////////////////////////////
const createElement = (elementName, classIdAttr, textContent, appendCh) => {
    let element = document.createElement(elementName);
    // création d'un tableau de classe, d'id ou d'attributs
    Object.keys(classIdAttr).map((i) => {
        element[i] = classIdAttr[i];
    });

    element.textContent = textContent;
    const parent = document.querySelector(appendCh);

    parent.appendChild(element);

    return element;
};
createElement('h5', { className: 'testFunction', id: "iciId", ariaLabel: "ok c'est moi" }, "LeTextduH5", "section.container__card");