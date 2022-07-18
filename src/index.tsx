import React from 'react';
import ReactDom from 'react-dom';

import MyRouter from './router';

import './app.less';

ReactDom.render(<MyRouter />, document.querySelector('#root'));
