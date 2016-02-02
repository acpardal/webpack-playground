export function helloWorld() {
    var element = document.createElement('h1');

    element.innerHTML = 'Hello world';

    return element;
}

export default function() {
    var element = document.createElement('h1');

    element.innerHTML = 'Default function';

    return element;
}
