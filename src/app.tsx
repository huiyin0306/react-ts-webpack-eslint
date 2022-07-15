import React, { FC } from 'react';
import ReactDom from 'react-dom';
import logo from './pictures/logo.png';

const Hello: FC<{ title: string }> = ({ title }) => {
    return (
        <h1>
            <img src={logo} />
            {title}
        </h1>
    );
};

ReactDom.render(<Hello title="Hello world" />, document.querySelector('#root'));
