export enum DidactElementTyps {
    DIV = 'div',
    A = 'a',
    SPAN = 'span',
}

export interface DidactProps {
    children?: Array<DidactElement>,
}

export type DidactElement = DidactElementInterface | string;

export interface DidactElementInterface {
    type: DidactElementTyps,
    props: DidactProps,
}