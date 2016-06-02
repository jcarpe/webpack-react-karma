// require( './styles.css' );
// document.write( require( './content.js' ) );
import React from 'react';
import ReactDOM from 'react-dom';

import './styles.scss';
import World from './content.jsx';

ReactDOM.render( <World />, document.getElementById('app') );