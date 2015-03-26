function addElementInContainer(e){
    var name = e.target.name;
    var parent,
        input,
        title,
        errorMessage;

    switch (name) {
        case 'addItemButton':
            parent = e.target.parentNode.parentNode;
            input = parent.querySelector('input[type=text]');
            title = input.value;
            errorMessage = parent.querySelector('div[name=errorSection]');
            try {
                Elements.getItem(title).addToDOM(parent);
            } catch (err) {
                if (err instanceof ReferenceError) {
                    errorMessage.className = 'showError';
                }
            }
            break;
        case 'addSectionButton':
            parent = e.target.parentNode;
            input = parent.querySelector('input[name=sectionTitle]');
            title = input.value;
            errorMessage = parent.querySelector('div[name=errorContainer]');
            try {
                Elements.getSection(title).addToDOM(parent);
            } catch (err) {
                if (err instanceof ReferenceError) {
                    errorMessage.className = 'showError';
                }
            }
            break;
        default:
            errorMessage = document.querySelector('.showError');
            if (errorMessage) {
                errorMessage.className = 'hideError';
            }
            break;
    }

    if (input) {
        input.value = '';
    }
}

var container = Elements.getContainer('TODO List');
var body = document.body;
body.appendChild(container.getHtmlElement());
body.addEventListener('click', addElementInContainer);