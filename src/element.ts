export enum DidactElementTyps {
    DIV = 'div',
    A = 'a',
    SPAN = 'span',
}

export interface DidactProps {
    children?: Array<DidactElement>,
}

export interface DidactElement {
    type: DidactElementTyps,
    props: DidactProps,
}