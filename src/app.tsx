import React, { FC, ReactElement } from 'react';
import ReactDom from 'react-dom';
import logo from './pictures/logo.png';

import './app.css';

const Hello: FC<{ title: string }> = ({ title }): ReactElement => {
    return (
        <h1>
            <img src={logo} />
            {title}sssd
        </h1>
    );
};

ReactDom.render(<Hello title="Hello world" />, document.querySelector('#root'));
