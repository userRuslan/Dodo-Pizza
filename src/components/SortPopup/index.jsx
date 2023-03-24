import React, { useEffect, useRef, useState } from 'react';
import classNames from 'classnames';

import './SortPopup.scss';


export default function SortPopup () {
    const [isVisiblePopup, setIsVisiblePopup] = useState(false)
    const [selected, setSelected] = useState(0)
    const sortList = ['популярности', 'цене', 'aлфовиту']
    const activeSort = sortList[selected]

    const sortRef = useRef(null)

    useEffect(() => {
        document.addEventListener('click', checkOutlinePopup)
    }, [])

    const selectActiveSort = (index) => {
        setSelected(index);
        setIsVisiblePopup(false)
    }

    const toggleVisiblePopup = () => {
        setIsVisiblePopup(!isVisiblePopup)
    }

    const checkOutlinePopup = (event) => {
        const eventPath = event.composedPath();
        if (!eventPath.includes(sortRef.current)) {
            setIsVisiblePopup(false)
        }
    }

    return (
        <div ref={sortRef} className='sort'>
            <div className="sort__label">
                <img src='/img/black-arrow__ico.svg' className={classNames('sort__label-icon', 'mr-7', { rotate: isVisiblePopup })} alt='arrow' />
                <div className="sort__label-text mr-9">Сортировка по: </div>
                <div onClick={toggleVisiblePopup} className="sort__active-text">{activeSort}</div>
            </div>
            {isVisiblePopup &&
                <ul className="sort__popup">
                    {sortList.map((item, index) => (
                        <li key={index}
                            className={classNames('sort__popup-item', { active: selected === index })}
                            onClick={() => selectActiveSort(index)}>
                            {item}
                        </li>
                    ))}
                </ul>
            }
        </div>
    )
}