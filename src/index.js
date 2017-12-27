import React from 'react';
import ReactDOM from 'react-dom';
import Lists from './Lists'
import {observe} from './Game'

observe((cardPosition) => {

ReactDOM.render( <Lists cardPosition={cardPosition}/> , document.getElementById('root'));

})