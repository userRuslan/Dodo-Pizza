import React from 'react'

import style from './NotFoundBlock.module.scss';

export default function NotFoundBlock () {
    console.log(style)
    return (
        <div className={style.container}>
            <div style={{ fontSize: 64 + 'px' }}>😕</div>
            <br />
            <h1 className='mb-17'>Ничего не найдено</h1>
            <p>К сожалению произошла ошибка, или вы зашли на несуществующую страницу.</p>
        </div>
    )
}