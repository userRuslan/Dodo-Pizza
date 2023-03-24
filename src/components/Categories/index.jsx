import React, { useState } from 'react';

import classNames from 'classnames';

import './Categories.scss';


export default function Categories () {
    const [activeCategory, setActiveCategory] = useState(0)

    const categories = ['Все', 'Мясные', 'Вегетарианская', 'Гриль', 'Острые', 'Закрытые'];

    return (
        <ul className='categories'>
            {categories.map((item, index) => (
                <li onClick={() => setActiveCategory(index)} className={classNames('category', { 'mr-9': index !== 5 },
                    { active: activeCategory === index })}
                    key={index}>
                    {item}
                </li>
            ))}
        </ul>

    )
}