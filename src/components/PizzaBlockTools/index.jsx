import React, { useState } from 'react'

import './PizzaBlockTools.scss';
import classNames from 'classnames';

export default function PizzaBlockTools ({ size, type }) {
    const [selectedType, setSelectedType] = useState(0);
    const [selectedSize, setSelectedSize] = useState(0);

    const typePizzas = ['тонкое', 'традиционное'];

    return (
        <div className="pizza-block__tools">
            <ul className="pizza-block__tools-block mb-7">
                {type.map((item, index) => (
                    <li key={index}
                        onClick={() => setSelectedType(index)}
                        className={classNames('pizza-block__tools-item', { 'mr-6': index !== 1 }, { active: selectedType === index })}>
                        {typePizzas[item]}
                    </li>
                ))}
            </ul>
            <ul className="pizza-block__tools-block">
                {size.map((item, index) => (
                    <li key={index}
                        onClick={() => setSelectedSize(index)}
                        className={classNames('pizza-block__tools-item', { 'mr-6': index !== 2 }, { active: selectedSize === index })}>
                        {item} cм.
                    </li>
                ))}
            </ul>
        </div>
    )
}