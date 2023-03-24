import React from 'react';

import { Link } from 'react-router-dom';

import Button from '../Button';


import './Header.scss';



export default function Header () {
    return (
        <div className='header'>
            <Link to={'/'}>
                <div className="header__info-block">
                    <div className="header__logo mr-17">
                        <img src='/img/logo.svg' alt='logo' />
                    </div>
                    <div className="header__text-block">
                        <h2 className="header__title">DODO PIZZA</h2>
                        <div className="header__slogan">самая вкусная пицца во вселенной</div>
                    </div>
                </div>
            </Link>
            <Link to={'/cart'}>
                <Button>
                    <div>520 ₽</div>
                    <span className='mx-13'></span>
                    <div className='cart-block'>
                        <img className='mr-7' src='/img/cart.svg' alt='cart' />
                        <div>3</div>
                    </div>
                </Button>
            </Link>
        </div>
    )
}