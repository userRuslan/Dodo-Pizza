import React from 'react';
import classNames from 'classnames';
import './Button.scss'

export default function Button ({ children, outlined, toggle, black }) {
    return (
        <button className={classNames('button',
            { outlined: outlined },
            { 'toggle-button': toggle },
            { black: black })}>
            {children}
        </button>
    )
}