import { DidactElement } from './element';

export function renderDOM(element: DidactElement, parent: HTMLElement | null): void {
    if (!parent) {
        console.error('No root element');
        return;
    }

    if (typeof element === 'string') {
        const textElement = document.createTextNode(element);
        parent.appendChild(textElement);
        return;
    }

    const domElement = document.createElement(element.type);
    const children = element.props.children || [];

    children.forEach((childElement: DidactElement) => {
        renderDOM(childElement, domElement);
    });

    parent.appendChild(domElement);
}