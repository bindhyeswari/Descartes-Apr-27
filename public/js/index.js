

document.addEventListener('DOMContentLoaded', function () {
    var fileuploader = new FileUploader(
        document.querySelector('input[type="file"]'),
        document.querySelector('ul')
    );
});

function FileUploader(inputElement, displayElement, submitElement) {
    // add an event listener for the file
    var files = [];
    inputElement.addEventListener('change', function () {
        Array.prototype.forEach.call(this.files, function (file) {
            files.push(file);
        });
        displayElement.innerHTML = '';
        files.forEach(function (file) {
            var displayString = file.name + ', ' + file.type + ', ' + file.size;
            var li = createElement('li', displayElement, '', displayString);
            createDeleteButton(li);
        });
    });

    function createDeleteButton(li) {
        // create a delete button that will allow you to delete the li element based
        // on which button was clicked.
        createElement('button', li, '', 'Delete').addEventListener('click', function () {
            console.log(this); // print the button element
            var li = this.parentNode;
            var ul = li.parentNode;
            var children = Array.prototype.slice.call(ul.children);
            var index = children.indexOf(li);
            files.splice(index, 1); // remove the file from the list
            ul.removeChild(li); // remove the child from the ul
        });
    }

    // handle the form submit

}

FileUploader.prototype.submit = function () {
    console.log(files);
};





function createElement(elementType, parent, className, innerHTML, custom) {
    var element = document.createElement(elementType);
    if (parent) parent.appendChild(element);
    if (className) element.className = className;
    if (innerHTML) element.innerHTML = innerHTML;

    if (typeof custom !== 'undefined') {
        for (var prop in custom) {
            element.setAttribute(prop, custom[prop]);
        }
    }

    return element;
}

