import React, { FC } from 'react';
import ReactDom from 'react-dom';
import logo from './pictures/logo.png';

import './app.css';

const Hello: FC<{ title: string }> = ({ title }) => {
    return (
        <h1>
            <img src={logo} />
            {title}s
        </h1>
    );
};

ReactDom.render(<Hello title="Hello world" />, document.querySelector('#root'));
