import {DidactElement, DidactElementTyps} from './element';
import { renderDOM } from './render';

console.log('test started');

const root = document.getElementById('root');
const element = {
    type: DidactElementTyps.DIV,
    props: {
        children: [
            {type: DidactElementTyps.A, props: {}},
            {type: DidactElementTyps.DIV, props: {}},
            {type: DidactElementTyps.DIV, props: {
                    children: [
                        {type: DidactElementTyps.A, props: {}},
                        {type: DidactElementTyps.SPAN, props: {
                            children: ['Text me more']
                        }},
                        {type: DidactElementTyps.SPAN, props: {
                            children: ['Follow the white rabbit']
                        }}
                    ]
                }}
        ]
    }
};
renderDOM(element, root);